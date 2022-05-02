import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import CustomText from '../../../components/CustomText'

export default function Items({ title, list}) {
  return <>
    <CustomText style={styles.title}>{title}</CustomText>
    {list.map(({ name, image, index }) => {
      return <>
          <View key={index} style={styles.item}>
            {/* first item and then text */}
            <Image source={image} style={styles.image} />
            <CustomText  style={styles.name}>{name}</CustomText>
          </View>
      </>
    })}
  </>
}

const styles = StyleSheet.create( {
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    paddingHorizontal: 11

  },

  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
    paddingHorizontal: 11
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