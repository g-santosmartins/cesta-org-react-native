import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import topViewImageBackground from '../../../../assets/topo.png'

import CustomText from '../../../components/CustomText'

// getting the true width depending the divice you're running
const width = Dimensions.get('screen').width

export default function TopView({title}) {
  return (
    <>
    <Image
        source={topViewImageBackground}
        style={styles.top}
      />
      <CustomText
        style={styles.title}
      >
        {title}
      </CustomText>

    </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    // how to find the perfect height
    height: 578 / 768 * width,
  },

  title: {
    width: "100%",
    position: "absolute",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16
  },
 })