import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Tray({ setSelectRestaurant }) {

  const choose = () => {
    const chosen = Math.random();
    setSelectRestaurant(chosen)
  }

  const clear = () => {
    setSelectRestaurant(0);
  }

  return(
    <View style={styles.tray}>
      <View style={styles.buttonList}>
        <TouchableOpacity onPress={choose} style={styles.button}>
          <Text style={styles.buttonText}>Feeling Lucky 🍀</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={clear} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tray: {
    backgroundColor: "#090909",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30, 
    shadowColor: "#626262",
    shadowOffset: {
	  width: 0,
	  height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  button: {
    backgroundColor: "#128eb2",
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 17,
  },
  buttonText: {
    fontWeight: 800,
    fontSize: 13, 
    color: "#0e1011",
  },
  resetButton: {
    backgroundColor: "#3b3b3b",
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 17,
  },
  resetButtonText: {
    fontWeight: 800,
    fontSize: 13, 
    color: "#0e1011",
  },  
  buttonList: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
})