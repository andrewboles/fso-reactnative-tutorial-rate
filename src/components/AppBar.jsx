import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    // ...
  },
  heading: {
    padding: 18,
    color: "#ffffff",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.heading} fontSize="subheading" fontWeight="bold">
            Repositories
          </Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.heading} fontSize="subheading" fontWeight="bold">
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
