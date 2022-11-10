import React, { ReactNode, useMemo, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

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
  const animationValue = useSharedValue(-20);

  const animated = useAnimatedStyle(() => ({
    bottom: withSpring(animationValue.value, { damping: 16 }),
    opacity: interpolate(animationValue.value, [-20, -5], [0, 1]),
  }));

  const animatedBackground = useAnimatedStyle(() => ({
    opacity: interpolate(animationValue.value, [-20, -5], [0, 0.5]),
  }));

  useMemo(() => {
    if (!isOpen) {
      animationValue.value = withSpring(-20);

      const time = setTimeout(() => {
        setIsClosing(false);
      }, 500);

      return () => clearTimeout(time);
    } else {
      setIsClosing(true);
      animationValue.value = withDelay(50, withSpring(-5, { damping: 16 }));
    }
  }, [isOpen]);

  return isClosing ? (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          style={[styles.backgroundBottomSheet, animatedBackground]}
        />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.contentBottomSheet, animated]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
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
