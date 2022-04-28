import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import TopView from './components/TopView'
import Details from './components/Details'
import Items from './components/Items'
import { } from 'react-native'

// const width = Dimensions.get('screen').width

export default function Basket({ top, details, items }) {
  return (
    <ScrollView>
      <TopView {...top} />
      <Details {...details} />
      <Items {...items} />
    </ScrollView>
  )
}

// styling a object
const styles = StyleSheet.create({
  // styles goes here
})

