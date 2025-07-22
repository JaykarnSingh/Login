import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "../../components/atoms/buttonComp";
import imagePath from "@/src/constants/imagePath";
import { FontAwesome } from "@expo/vector-icons";
import IconsComp from '../../components/atoms/iconsComp';
import { router } from 'expo-router';

const Auth = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);

   let application_process=()=>{
    router.push("/application_process")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imagePath.logo} style={styles.logo} resizeMode="contain" />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <View
          style={[
            styles.inputWrapper,
            isEmailFocused && { borderColor: "#EB3E6F" },
          ]}
        >
          <FontAwesome
            name="envelope"
            size={25}
            color="#EB3E6F"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="ankur@leadingdots.com"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View
          style={[
            styles.inputWrapper,
            isPasswordFocused && { borderColor: "#EB3E6F" },
          ]}
        >  
          <FontAwesome
            name="lock"
            size={25}
            color="#EB3E6F"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="ankur@123#"
            secureTextEntry={!showPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <ButtonComp title="LOG IN" style={styles.login_button} onPress={application_process}/>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line} />
      </View>

          <IconsComp/>
       
      <TouchableOpacity>
        <Text style={styles.newHere}>New here?</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Sign up to explore top universities, scholarships, and student life in
        Japan.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "white",
    gap: 25,
  },
  login_button: {
    borderRadius: 8,
    fontWeight: "900",
  },
  logo: {
    height: 80,
    alignSelf: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 17,
    color: "#000",
    fontWeight: "600",
  },
  label: {
    color: "#EB3E6F",
    marginBottom: 15,
    fontWeight: "bold",
  },

  forgot: {
    color: "#EB3E6F",
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 4,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#aaa",
    color: "black",
  },
  orText: {
    marginHorizontal: 10,
    color: "black",
    fontWeight: "600",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 20,
  },
  iconBox: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 30,
    elevation: 4, // for Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  newHere: {
    color: "#EB3E6F",
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 10,
    textAlign: "center",
    color: "#555",
    paddingHorizontal: 10,
    fontWeight: "600",
  },
});

export default Auth;
