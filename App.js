// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

// internal imports
import { Basket } from './src/screens/Basket';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}


