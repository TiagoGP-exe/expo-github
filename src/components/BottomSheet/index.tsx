import React, { ReactNode, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

interface BottomSheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function BottomSheetComponent({
  isOpen,
  onClose,
  children,
}: BottomSheetComponentProps) {
  const [isClosing, setIsClosing] = useState(false);

  return isOpen ? (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backgroundBottomSheet} />
      </TouchableWithoutFeedback>
      <View style={styles.contentBottomSheet}>
        <View style={styles.line} />
        {children}
      </View>
    </>
  ) : null;
}

const styles = StyleSheet.create({
  backgroundBottomSheet: {
    flex: 1,
    backgroundColor: "#0000006c",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentBottomSheet: {
    maxHeight: 500,
    minHeight: 200,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    zIndex: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  line: {
    width: 30,
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 16,
  },
});
