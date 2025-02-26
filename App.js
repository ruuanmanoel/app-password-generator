import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassaword } from "./src/components/modal";

let charset = "abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPassowordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassowordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={(value) => setSize(Math.floor(value))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassaword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginBlock: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
