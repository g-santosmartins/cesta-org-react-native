import React from 'react'
import {StyleSheet, View } from 'react-native'
import TopView from './components/TopView'
import Details from './components/Details'

// const width = Dimensions.get('screen').width

export function Basket() {
  return (
    <>
      <TopView/>
      <Details/>
    </>
  )
}

// styling a object
const styles = StyleSheet.create({
  // styles goes here
})

