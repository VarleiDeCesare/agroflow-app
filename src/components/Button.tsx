import React, { FC } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";

interface IProps {
  onPress: () => any;
  label: string;
  loading?: boolean;
}
const Button: FC<IProps> = ({ onPress, label, loading = false }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" style={styles.buttonText} />
        ) : (
          <Text style={styles.buttonText}>{label}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#128058",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    width: "70%",
    textAlign: "center",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: 16,
  },
});
