import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import CustomText from '../../../components/CustomText'
import farmlogo from '../../../../assets/logo.png'


export default function Details() {
  return (
    <>
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