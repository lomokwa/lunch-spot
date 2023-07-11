import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';


export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState();

  return (
    <>
    <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.header}>Lunch SPOT</Text>
        <RestList style={styles.header} selectRestaurant={selectRestaurant}/>
        <StatusBar style="auto" />
      </View>
      <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: "#090909",
    color: "whitesmoke",
    fontSize: 30,
    width: "100%",
    paddingTop: 60,
    paddingBottom: 10,
    paddingLeft: 20,
    fontWeight: "bold"
  },
});
