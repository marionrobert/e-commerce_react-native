import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BasketContext } from "../context/basketContext";
import Ionicons from 'react-native-vector-icons/Ionicons';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const BaskteItem = (props) => {
  const [basket, setBasket] = useContext(BasketContext)

  const deleteProduct = (product) => {
    console.log("je veux supprimer le produit")
    let newBasket = [...basket]
    let index = newBasket.findIndex(item => item.id === product.id)
    console.log(index)
    newBasket.splice(index, 1)
    console.log("newbasket", newBasket)
    setBasket(newBasket)
  }

  const removeOneQuantity = (product) => {
    console.log("remove one quantity")
    if (product.quantityInCart === 1) {
      deleteProduct(product)
    } else {
      let newBasket = [...basket]
      let index = newBasket.findIndex(item => item.id === product.id)
      newBasket[index].quantityInCart -= 1
      setBasket(newBasket)
    }
  }

  const addOneQuantity = (product) => {
    console.log("add one quantity")
    let newBasket = [...basket]
    let index = newBasket.findIndex(item => item.id === product.id)
    newBasket[index].quantityInCart += 1
    setBasket(newBasket)
  }

  return (
    <View  style={styles.product}>
        <Image style={styles.img} source={{uri: props.product.thumbnailUrl}} resizeMode="contain"/>
        <Text>{props.product.title}</Text>
        <Text>Quantité: {props.product.quantityInCart}</Text>
        <Text>Modifier la quantité</Text>
        <Ionicons style={styles.icon} name="remove-circle-outline" onPress={()=>{removeOneQuantity(props.product)}}/>
        <TextInput style={styles.input} defaultValue={props.product.quantityInCart}>{props.product.quantityInCart}</TextInput>
        <Ionicons style={styles.icon} name="add-circle-outline" onPress={()=>{addOneQuantity(props.product)}}/>

        <TouchableOpacity style={styles.link} onPress={()=>{deleteProduct(props.product)}}>
          <Text style={styles.linkText}>Supprimer le produit</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 25,
      paddingTop: 100,
      backgroundColor: "green",
      justifyContent: "flex-start",
      alignItems: "center"
  },
  title: {
      color: "white",
      fontSize: 32,
      marginBottom: 50
  },
  text: {
      color: "black",
      fontSize: 22,
  },
  link: {
      marginVertical: 25,
      borderColor: "white",
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      padding: 10
  },
  linkText: {
      color: "black",
      fontSize: 20,
  },
  result: {
    backgroundColor: "white",
    textAlign: "center",
    padding: 25,
    marginTop: 25,
    height: 200
  },
  img: {
    width: "50%",
    padding: 30,
    marginLeft: "auto",
    marginRight: "auto"
  },
  input: {
    backgroundColor: "pink",
    height: 50,
    marginTop: 0,
    marginBottom: 50,
    paddingLeft: 15,
    width: 200
  },
  icon: {
    fontSize: 40
  }


})

export default BaskteItem;
