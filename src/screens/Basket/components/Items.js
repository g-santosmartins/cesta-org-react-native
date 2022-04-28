import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import CustomText from '../../../components/CustomText'

export default function Items({ title, list}) {
  return <>
    <CustomText style={styles.title}>{title}</CustomText>
    {list.map(({ name, image }) => {
      return <>
          <View key={name}>
            <CustomText >{name}</CustomText>
            <Image source={image} />
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
  }
})