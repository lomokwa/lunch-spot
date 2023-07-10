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
          <Text style={styles.buttonText}>Feeling Lucky</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={clear} style={styles.resetButton}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tray: {
    backgroundColor: "#1e2124",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20 
  },
  button: {
    backgroundColor: "#9146FF",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2
  },
  buttonText: {
    fontWeight: 800,
    fontSize: 13, 
    color: "whitesmoke"
  },
  resetButton: {
    backgroundColor: "salmon",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonList: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
})