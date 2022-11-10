import { StyleSheet } from "react-native";
import { BottomSheetProvider } from "./src/hooks/useBottomSheet";
import { RepoProvider } from "./src/hooks/useRepo";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <RepoProvider>
      <BottomSheetProvider>
        <Routes />
      </BottomSheetProvider>
    </RepoProvider>
  );
}
