import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TextInput from "../../components/TextInput";
import { useAuth } from "../../contexts/auth";
import { validateEmail } from "../../utils/isValidEmail";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as yup from "yup";
import { Button, IconButton } from "@react-native-material/core";
import toastMessage from "../../utils/ToastMessage";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  password: yup.string().required("Senha é obrigatório"),
  email: yup.string().test("email", "E-mail é invalido", (email) => {
    if (!email) {
      return false;
    }
    return validateEmail(email);
  }),
});

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [viewPass, setViewPass] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { errors }: any = formState;

  useEffect(() => {
    if (errors) {
      for (let erro in errors) {
        //FIXME: Tentar aumentar o tamanho da fonte desse toast
        toastMessage("Opss!!", errors[erro]?.message, "error");
      }
    }
  }, [errors]);
  const handleForm: SubmitHandler<any> = async (data) => {
    try {
      toastMessage("Sucesso", "Login feito com sucesso", "success");
    } catch (err: any) {
      toastMessage(
        "Opss!!",
        err?.response?.data?.message ||
          err?.message ||
          "Tivemos um erro com seu login",
        "error"
      );
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        name="email"
        error={errors}
        control={control}
        label="E-mail"
        variant="standard"
      />
      <TextInput
        label="Senha"
        variant="outlined"
        secureTextEntry={viewPass}
        trailing={(props) => (
          <IconButton
            onPress={() => {
              setViewPass(!viewPass);
            }}
            icon={(props) => (
              <Icon name={!viewPass ? "eye" : "eye-off"} {...props} />
            )}
            {...props}
          />
        )}
        control={control}
        name="password"
      />
      <Button onPress={handleSubmit(handleForm)} title="teste" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
