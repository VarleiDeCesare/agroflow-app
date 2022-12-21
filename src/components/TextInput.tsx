import {
  Text,
  TextInput as TextInputMaterial,
  TextInputProps,
} from "@react-native-material/core";
import React, { FC, ForwardRefRenderFunction } from "react";
import { useController, Control, FieldError } from "react-hook-form";
import { StyleSheet } from "react-native";

interface IProps extends TextInputProps {
  label: string;
  color?: string;
  error?: any;
  control: Control;
  name: string;
}
const TextInput: ForwardRefRenderFunction<HTMLInputElement, IProps> = ({
  label,
  color = "#128058",
  error = null,
  control,
  name,
  ...rest
}) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <>
      <TextInputMaterial
        {...rest}
        label={label}
        color={color}
        variant="standard"
        style={styles.textInputMaterial}
        value={field.value}
        onChangeText={field.onChange}
      />
      {error && (
        <Text variant="caption" style={styles.errorsMessageStyle}>
          {/* {error && (
            <Text style={styles.errorsMessageStyle}>{error.message}</Text>
          )} */}
        </Text>
      )}
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    padding: 15,
    borderWidth: 1.3,
    width: "70%",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  textInputMaterial: {
    width: "80%",
    marginBottom: 10,
  },
  errorsMessageStyle: {
    marginTop: -15,
    width: "80%",
    color: "red",
  },
});
