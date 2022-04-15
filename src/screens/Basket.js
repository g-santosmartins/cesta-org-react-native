import React from 'react'
import { Text, Image, StyleSheet, Dimensions } from 'react-native'
import topViewImageBackground from '../../assets/topo.png'
import tomatoImage from '../../assets/frutas/Tomate.png'

// getting the true width depending the divice you're running
const width = Dimensions.get('screen').width

export function Basket() {
  return (
    <>
      <Image
        source={topViewImageBackground}
        style={styles.top}
      />
      <Text
        style={styles.title}
      >
        Detalhe da cesta
      </Text>
    </>
  )
}


// styling a object
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
  }
})

