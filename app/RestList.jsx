import { useState, useEffect } from "react"
import { Text, StyleSheet, ScrollView } from "react-native"
import RestCard from "./RestCard";

export default function RestList({ selectRestaurant }) {
  const [restaurantList, setRestaurantList] = useState();
  const [chosenRestaurant, setChosenRestaurant] = useState();

  useEffect(() => {
    fetch("https://api.bocacode.com/api/restaurants")
      .then(res => res.json())
      .then(setRestaurantList)
      .catch(alert)
  }, [])

  useEffect(() => {
    console.log(selectRestaurant)
    if (selectRestaurant > 0) {
      const index = Math.floor(selectRestaurant * restaurantList.length)
      setChosenRestaurant(restaurantList[index])
    } else {  
      setChosenRestaurant()
    }
  }, [selectRestaurant])

  return(
    <ScrollView style={styles.scrollingList}>
      {!restaurantList
        ? <Text style={styles.loadingText}>Loading...</Text>
        : (chosenRestaurant)
          ? <RestCard key={chosenRestaurant._id} restaurant={chosenRestaurant} />
          : restaurantList.map(restaurant => (
            <RestCard key={restaurant._id} restaurant={restaurant} />
          ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollingList: {
    width: "100%",
    marginTop: 20,
  },
  loadingText: {
    padding: 8,
    color: "whitesmoke",
    fontSize: 24,
    textAlign:"center",

  },
  restaurantList: {
    color: "whitesmoke",
    textAlign:"center",
    fontSize: 24,

  },
})
