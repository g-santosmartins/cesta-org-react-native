import React from 'react'
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native'
import topViewImageBackground from '../../assets/topo.png'
// import tomatoImage from '../../assets/frutas/Tomate.png'
import farmlogo from '../../assets/logo.png'
import CustomText from '../components/CustomText'

// getting the true width depending the divice you're running
const width = Dimensions.get('screen').width

export function Basket() {
  return (
    <>
      <Image
        source={topViewImageBackground}
        style={styles.top}
      />
      <CustomText
        style={styles.title}
      >
        Detalhe da cesta
      </CustomText>

      <View style={styles.basket}>
        <CustomText style={styles.name}>Cesta de Verduras</CustomText>

        <View style={styles.farm}>
          <Image source={farmlogo} style={styles.farmImage}/>
          <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
        </View>
        <CustomText style={styles.description}>
          Uma cesta com produtos selecionados
          cuidadosamente da fazenda direto para
          sua cozinha.
        </CustomText>

        <CustomText style={styles.price}>R$ 40,00</CustomText>
      </View>
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
  },

  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  name: {
    fontSize: 26,
    // line height
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },

  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    // fontFamily: "MontserratRegular",
  },

  farmImage: {
    width: 32,
    height: 32,
  },

  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 16,
  },

  price: {
    color: "#2A9F85",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 8
  }
})

