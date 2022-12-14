import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { useRepo } from "../../../hooks/useRepo";
import { LanguageUsage } from "../LanguageUsage";
import { StarButton } from "../StarButton";
import { StarCount } from "../StarCount";

export interface IRepoCard {
  id: number;
  name: string;
  description: string;
  language?: string;
  stars: number;
  avatar?: string;
  url: string;
  disableButton?: boolean;
}

export interface CardRepoProps extends IRepoCard {
  goToRepo?: (data: IRepoCard) => void;
}

const { width } = Dimensions.get("window");

export function CardRepo({
  id,
  name,
  description,
  stars,
  avatar,
  language,
  url,
  disableButton,
  goToRepo,
}: CardRepoProps) {
  const [firstText, secondText] = name.split("/");
  const { removeFavoriteById, setFavoriteById,favoriteRepos } = useRepo();
  const isFavorite = !!favoriteRepos?.some((repo) => repo.id === id);

  const handlePress = async () => {
    if (isFavorite) {
      removeFavoriteById(id)
      return
    }
    setFavoriteById(id)
  };

  const handleGoToRepo = () => {
    goToRepo &&
      goToRepo({ id, name, description, stars, avatar, language, url });
  };

  return (
    <Pressable onPress={handleGoToRepo} style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text>
          {firstText}/<Text style={styles.cardHeaderText}>{secondText}</Text>
        </Text>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>
        {description ?? "Nenhuma descrição encontrada"}
      </Text>
      <View style={styles.content}>
        {!disableButton && <StarButton isFavorite={isFavorite} onPress={handlePress} />}
        <StarCount count={stars ?? 0} />
        <LanguageUsage language={language ?? "desconhecido"} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    maxWidth: width,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardHeaderText: {
    fontWeight: "bold",
  },
  image: {
    width: 29,
    height: 29,
    borderRadius: 50,
  },
  divider: {
    width: "100%",
    height: 1,
    marginVertical: 16,
    backgroundColor: "#DADADA",
  },
  description: {
    width: "100%",
    color: "#9A9A9A",
    fontSize: 12,
  },
  content: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
