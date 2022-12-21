import { Toast } from "react-native-toast-message/lib/src/Toast";

const toastMessage = (text1: string, text2?: string, type?: string) => {
  return Toast.show({
    type: type || "success",
    text1: text1,
    text2: text2 || "",
  });
};

export default toastMessage;
