import Text from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { View, Pressable } from "react-native";

const initialValues = {
  username: "",
  password: ""
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};
