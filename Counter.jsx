import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()

const selector = useSelector(state => state.counterReducer);
console.log(selector)


const add = ()=>{

}

const del = ()=>{

}


  return (
    <View>
      <Text style={{fontSize:25,color:"black"}}>Counter</Text>



<TouchableOpacity onPress={add}>
    <Text style={{fontSize:25,color:"black"}}>
        ADD
    </Text>
</TouchableOpacity>



<TouchableOpacity onPress={del}>
    <Text style={{fontSize:25,color:"black"}}>
        DEL
    </Text>
</TouchableOpacity>


    </View>
  )
}

export default Counter

