import React from 'react'
import {StyleSheet, View } from 'react-native'
import TopView from './components/TopView'
import Details from './components/Details'

// const width = Dimensions.get('screen').width

export default function Basket({top, details}) {
  return (
    <>
      <TopView {...top}/>
      <Details {...details}/>
    </>
  )
}

// styling a object
const styles = StyleSheet.create({
  // styles goes here
})

