import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CardRepo, IRepoCard } from "../components/Card/CardRepo";
import { useRepo } from "../hooks/useRepo";
import { ScreenProp } from "../routes/NavigatorTypes";
import { IChildren } from "./AllRespositories";

function FavoritesRepositories() {
  const { favoriteRepos } = useRepo();

  const navigation = useNavigation<ScreenProp<"DetailsRepository">>();
  const keyExtractor = useCallback(
    (_: IRepoCard, index: Number) => String(index),
    []
  );

  const goToRepo = useCallback(
    (data: IRepoCard) => {
      navigation.navigate("DetailsRepository", data);
    },
    [navigation]
  );

  const rowRenderer = useCallback(
    ({ item }: { item: IRepoCard }) => (
      <CardRepo {...item} disableButton goToRepo={goToRepo} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRepos}
        renderItem={rowRenderer}
        keyExtractor={keyExtractor}
        CellRendererComponent={CellRenderer}
        style={styles.flatList}
      />
    </View>
  );
}

const CellRenderer: FC<IChildren> = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

export default FavoritesRepositories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F5",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  flatList: {
    marginTop: 16,
  },
});
