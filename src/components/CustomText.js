import React from 'react'

import { Text, StyleSheet } from 'react-native'

// how to get all props from the children component
export default function CustomText({children, style}) {
  let standardStyle = styles.text

  // if fontWeight is equal to bold do:
  if(style?.fontWeight === 'bold') {
    standardStyle = styles.textBold
  }
  // Catch the style from props.children and pass it within an array
  return <Text style={[style, standardStyle]}>{children}</Text>
}


const styles  = StyleSheet.create({

  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },

  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal"
  }
})