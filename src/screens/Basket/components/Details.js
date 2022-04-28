import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native'
import CustomText from '../../../components/CustomText'

export default function Details({ name, logoFarm, description, farmName, price, button }) {
  return (
    <>
      <View style={styles.basket}>
        <CustomText style={styles.name}>{name}</CustomText>

        <View style={styles.farm}>
          <Image source={logoFarm} style={styles.farmImage} />
          <CustomText style={styles.farmName}>{farmName}</CustomText>
        </View>
        <CustomText style={styles.description}>
          {description}
        </CustomText>
        <CustomText style={styles.price}>{price}</CustomText>
        <TouchableOpacity style={styles.button} onPress={() => {Alert.alert("Sobre a compra", "Comprar realizada com sucesso")}}>
          <CustomText style={styles.buttonText}>{button}</CustomText>
        </TouchableOpacity>
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
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    // to know how much space does the font is taking 
    lineHeight: 26,
    fontWeight: 'bold',

  }
})