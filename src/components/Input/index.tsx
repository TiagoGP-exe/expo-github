import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
}

export function Input({ label, onFocus, onBlur, ...props }: InputProps) {
  return (
    <>
      <View style={styles.containerInput}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...props} />
      </View>
      {props.errorMessage && (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#8B8B8B",
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 8,
    width: "100%",
  },
  label: {
    color: "#606060",
    fontSize: 12,
  },
  errorMessage: {
    color: "#FF0000",
    fontSize: 10,
  },
});
