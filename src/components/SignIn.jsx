import Text from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import * as yup from 'yup'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  signInForm:{
    display: "flex",
    alignItems: "center",
    marginTop: 10
  },
  loginTextInput:{
    padding: 8,
    borderColor: theme.colors.textSecondary,
    borderStyle: "solid",
    borderWidth:1.2,
    borderRadius: 5,
    width: 350,
    margin: 6
  },
  signInButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: 350,
    margin: 6,
    padding:8,
    display: "flex",
    alignItems: "center"
  }
})
const initialValues = {
  username: "",
  password: ""
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .required('password is required'),
});
const SignIn = () => {
  console.log(Constants.manifest.extra)
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.signInForm}>
      <FormikTextInput  style={styles.loginTextInput} name="username" placeholder="Username" />
      <FormikTextInput  style={styles.loginTextInput} name="password" placeholder="Password" />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text fontSize="subheading" fontWeight="bold" style={{color: "#ffffff"}}>Sign In</Text>
      </Pressable>
    </View>
  );
};
