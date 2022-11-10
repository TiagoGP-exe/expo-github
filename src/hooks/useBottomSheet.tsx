import React, {
  createContext,
  createRef,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { View } from "react-native";
import { BottomSheetComponent } from "../components/BottomSheet";

interface ExposeBottomSheetArg {
  children: ReactNode;
}

interface IBottomSheetContext {
  exposeBottomSheet: (component: JSX.Element) => void;
  hideBottomSheet: () => void;
}

const BottomSheetContext = createContext<IBottomSheetContext | null>(null);

export const BottomSheetProvider: FC<ExposeBottomSheetArg> = ({ children }) => {
  const [childrenBottomSheet, setChildrenBottomSheet] = useState<JSX.Element>();

  const exposeBottomSheet = useCallback((component: JSX.Element) => {
    setChildrenBottomSheet(component);
  }, []);

  const hideBottomSheet = useCallback(() => {
    setChildrenBottomSheet(undefined);
  }, []);

  return (
    <BottomSheetContext.Provider value={{ exposeBottomSheet, hideBottomSheet }}>
      {children}
      <BottomSheetComponent
        isOpen={!!childrenBottomSheet}
        onClose={hideBottomSheet}
      >
        {childrenBottomSheet}
      </BottomSheetComponent>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = (): IBottomSheetContext => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw new Error("useBottomSheet must be used within BottomSheetProvider");
  }

  return context;
};
