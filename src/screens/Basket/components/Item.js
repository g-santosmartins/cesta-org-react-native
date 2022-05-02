import React from 'react'
import { View, Image, StyleSheet, FlatList } from 'react-native'
import CustomText from '../../../components/CustomText'

export default function Item({ item: { name, image } }) {

  // new destructuring way
  return <View style={styles.item}>
    {/* first item and then text */}
    <Image source={image} style={styles.image} />
    <CustomText style={styles.name}>{name}</CustomText>
  </View>
}

const styles = StyleSheet.create({



  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16
  },

  image: {
    width: 46,
    height: 46,
  },


  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",

  }

})