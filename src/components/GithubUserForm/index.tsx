import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";
import { useBottomSheet } from "../../hooks/useBottomSheet";
import { useRepo } from "../../hooks/useRepo";
import { getReposWithOwner } from "../../services/repoService";
import { formattedRepos } from "../../utils/formatData";
import { Input } from "../Input";

interface FormData {
  user: string;
}

const githubUserSchema = yup.object().shape({
  user: yup.string().required("O Nome do usuário é obrigatório"),
});

export function GithubUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { hideBottomSheet } = useBottomSheet();
  const { setNewRepos } = useRepo();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(githubUserSchema),
  });

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      setValue("user", user ?? "");
    })();
  }, []);

  async function handleSearchUser({ user }: FormData) {
    try {
      setIsLoading(true);

      const payload = await getReposWithOwner(user);

      const formattedValue = formattedRepos(payload);

      await setNewRepos(user, formattedValue);

      hideBottomSheet();
    } catch (error: any) {
      setError("user", {
        type: "manual",
        message: "Usuário não encontrado",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Alterar usuário selecionado</Text>
      <Controller
        control={control}
        name="user"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="none"
            label="Nome do usuário"
            onChangeText={onChange}
            value={value}
            errorMessage={errors.user?.message}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.viewButtonContainer}>
          <TouchableOpacity
            disabled={isLoading}
            onPress={hideBottomSheet}
            style={styles.button}
          >
            <Text style={[styles.cancelButtonText, styles.buttonText]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonContainer}>
          <TouchableOpacity
            disabled={isLoading}
            onPress={handleSubmit(handleSearchUser)}
            style={[styles.button, styles.saveButton]}
          >
            {isLoading && (
              <ActivityIndicator style={styles.loading} color="#fff" />
            )}
            <Text style={[styles.saveButtonText, styles.buttonText]}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewButtonContainer: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
  cancelButtonText: {
    color: "#1976D2",
  },
  saveButtonText: {
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#1976D2",
  },
  loading: {
    marginRight: 8,
  },
});
