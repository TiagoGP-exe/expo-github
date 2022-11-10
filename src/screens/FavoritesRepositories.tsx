import React, { FC, useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  Dimensions,
  FlatList,
} from "react-native";
import { CardRepo, IRepoCard } from "../components/Card/CardRepo";
import { useRepo } from "../hooks/useRepo";
import { IChildren } from "./HomeScreen";

const { height } = Dimensions.get("window");

function FavoritesRepositories() {
  const { favoriteRepos } = useRepo();
  const keyExtractor = useCallback(
    (_: IRepoCard, index: Number) => String(index),
    []
  );

  const rowRenderer = useCallback(
    ({ item }: { item: IRepoCard }) => <CardRepo {...item} disableButton />,
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
