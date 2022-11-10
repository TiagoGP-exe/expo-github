import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getReposWithOwner } from "../services/repoService";
import { formattedRepos } from "../utils/formatData";

interface IRepos {
  id: number;
  name: string;
  description?: string;
  language?: string;
  stars: number;
  avatar: string;
}

interface IRepoContext {
  updateRepo: (user: string) => Promise<void>;
  repos: IRepos[] | null;
  setNewRepos: (user: string, newRepos: IRepos[]) => Promise<void>;
  favoriteRepos: IRepos[] | null;
  setFavoriteById: (id: number) => Promise<void>;
  removeFavoriteById: (id: number) => Promise<void>;
}

const Repo = createContext<IRepoContext | null>(null);

interface RepoProviderProps {
  children?: ReactNode;
}

export const RepoProvider: FC<RepoProviderProps> = ({ children }) => {
  const [repos, setRepos] = useState<IRepos[] | null>(null);
  const [favoriteRepos, setFavoriteRepos] = useState<IRepos[] | null>(null);

  const setFavoriteById = async (id: number) => {
    const newFavoriteRepos = favoriteRepos?.find((repo) => repo.id === id);

    const actualRepos = repos?.find((repo) => repo.id === id);

    if (!newFavoriteRepos && actualRepos) {
      const result = favoriteRepos?.length
        ? [...favoriteRepos, actualRepos]
        : [actualRepos];

      setFavoriteRepos(result);

      await AsyncStorage.setItem("favoriteRepos", JSON.stringify(result));
    }
  };

  const removeFavoriteById = async (id: number) => {
    const newFavoriteRepos = favoriteRepos?.filter((repo) => repo.id !== id);

    if (newFavoriteRepos) {
      setFavoriteRepos(newFavoriteRepos);

      await AsyncStorage.setItem(
        "favoriteRepos",
        JSON.stringify(newFavoriteRepos)
      );
    }
  };

  const setNewRepos = async (user: string, newRepos: IRepos[]) => {
    setRepos(newRepos);

    await AsyncStorage.setItem("user", user);
  };

  const updateRepo = async (user: string) => {
    try {
      const payload = await getReposWithOwner(user);

      const formattedValue = formattedRepos(payload);

      await setNewRepos(user, formattedValue);
    } catch (error: any) {
      return error.response.message;
    }
  };

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      const favoriteRepos = await AsyncStorage.getItem("favoriteRepos");

      await updateRepo(user ?? "appswefit");

      if (favoriteRepos) {
        setFavoriteRepos(JSON.parse(favoriteRepos));
      }
    })();
  }, []);

  return (
    <Repo.Provider
      value={{
        repos,
        updateRepo,
        setNewRepos,
        favoriteRepos,
        setFavoriteById,
        removeFavoriteById,
      }}
    >
      {children}
    </Repo.Provider>
  );
};

export const useRepo = (): IRepoContext => {
  const context = useContext(Repo);
  if (!context) {
    throw new Error("useRepo must be used within RepoProvider");
  }

  return context;
};
