// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
import { 
  useFonts, 
  Montserrat_400Regular,
   Montserrat_700Bold } from '@expo-google-fonts/montserrat';

// internal imports
import  Basket from './src/screens/Basket';

import mock from './src/mocks/basket'

export default function App() {

  // importing font from expo google font lib
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  // making sure to return a view if google fonts is not ready yet
  if(!loadedFont) {
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      {/* passing all params separatly*/}
      <Basket {...mock} />
    </SafeAreaView>
  );
}


