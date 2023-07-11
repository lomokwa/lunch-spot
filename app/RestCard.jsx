import { Text, View, StyleSheet, Image } from "react-native";

export default function RestCard({ restaurant }) {
  return(
    <>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: restaurant.photo_url, cache: "force-cache",}} />
        <Text style={styles.title}>{restaurant.name}</Text>
          {
          (restaurant?.rating.length > 0)
            ? <Text style={styles.rating}>{"✭".repeat(restaurant.rating)} </Text>
            : null
          }
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
    marginTop: 12,
  },
  rating: {
    textAlign: "center",
    color: "whitesmoke",
    fontSize: 28
  },
  card: {
    paddingVertical: 30,
    shadowColor: "#626262",
    shadowOffset: {
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image:{
    width: "100%",
    height: 200,
  },
  
})
