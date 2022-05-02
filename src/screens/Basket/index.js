import React from 'react'
import { StyleSheet, ScrollView, FlatList } from 'react-native'
import TopView from './components/TopView'
import Details from './components/Details'
import Item from './components/Item'
import { View } from 'react-native-web'
import CustomText from '../../components/CustomText'

// const width = Dimensions.get('screen').width

export default function Basket({ top, details, items }) {
  return (<>

    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}

      // calling as a list component 
      ListHeaderComponent={() => {
        return <>
            <TopView {...top} />
            <Details {...details} />
            <CustomText style={styles.title}> {items.title}</CustomText>
        </>
      }}
    />
  </>
  )
}

// styling a object
const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    padding: 16,

  },
})

