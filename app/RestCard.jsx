import { Text, View, StyleSheet, Image } from "react-native";

export default function RestCard({ restaurant }) {
  return(
    <>
      <View style={styles.card}>
        <Image src={restaurant.photo_url} style={styles.image}/>
        <Text style={styles.title}>{restaurant.name}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "whitesmoke",
    fontSize: 28,
    textAlign: "center",
    padding: 5,
  },
  card: {
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#1e2124"
  },
  image:{
    width: "100%",
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  }
})
