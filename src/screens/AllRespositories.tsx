import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardRepo, IRepoCard } from "../components/Card/CardRepo";
import { useRepo } from "../hooks/useRepo";
import { ScreenProp } from "../routes/NavigatorTypes";

export interface IChildren {
  children?: ReactNode;
}

export function AllRespositories() {
  const { repos, setFavoriteById } = useRepo();

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
      <CardRepo {...item} onPress={setFavoriteById} goToRepo={goToRepo} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={repos}
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
