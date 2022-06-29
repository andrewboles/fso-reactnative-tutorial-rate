import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  card: {
    display: "flex",
  },
  avatarImage: {
    height: 45,
    width: 45,
    margin: 10,
    borderRadius: 5,
  },
  ratingsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  ratingCard: {
    display: "flex",
    alignItems: "center",
  },
  profileText: {
    display: "flex",
    justifyContent: "flex-start",
    margin: 10,
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.profileSection}>
        <Image
          style={styles.avatarImage}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.profileText}>
          <Text
            fontSize="subheading"
            fontWeight="bold"
            style={{ marginBottom: 5 }}
          >
            {item.fullName}
          </Text>
          <Text color="textSecondary" style={{ marginBottom: 5 }}>
            {item.description}
          </Text>
          <View
            style={{
              backgroundColor: theme.colors.primary,
              padding: 5,
              marginBottom: 2,
              marginRight: "auto",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#ffffff" }}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ratingsRow}>
        <RatingItem metric={item.stargazersCount} title="Stars" />
        <RatingItem metric={item.forksCount} title="Forks" />
        <RatingItem metric={item.reviewCount} title="Reviews" />
        <RatingItem metric={item.ratingAverage} title="Rating" />
      </View>
    </View>
  );
};
export default RepositoryItem;

const RatingItem = ({ metric, title }) => {
  if (metric > 1000) {
    metric = (metric / 1000).toFixed(1) + "k";
  }

  return (
    <View style={styles.ratingCard}>
      <Text style={{ marginBottom: 5 }} fontWeight="bold">
        {metric}
      </Text>
      <Text style={{ color: theme.colors.textSecondary }}>{title}</Text>
    </View>
  );
};
