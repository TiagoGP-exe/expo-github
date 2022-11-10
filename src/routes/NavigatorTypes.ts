import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IRepoCard } from "../components/Card/CardRepo";
import { StackNavigationProp } from "@react-navigation/stack";

export interface RootNavigatorParamList {
  Home: TitheNavigatorParamList;
  DetailsRepository: IRepoCard;
  FavoritesRepositories: undefined;
  AllRespositories: undefined;
}

export type ScreenProp<T extends keyof RootNavigatorParamList> =
  StackNavigationProp<RootNavigatorParamList, T>;

export type TitheNavigatorParamList = Pick<
  RootNavigatorParamList,
  "Home" | "FavoritesRepositories"
>;

export default RootNavigatorParamList;
