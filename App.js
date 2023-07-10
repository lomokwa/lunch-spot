import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';


export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Lunch Spot</Text>
        <RestList style={styles.header} selectRestaurant={selectRestaurant}/>
        <StatusBar style="auto" />
      </View>
      <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#282b30',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: "whitesmoke",
    fontSize: 36,
  },
});
