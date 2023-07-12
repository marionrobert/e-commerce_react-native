import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BasketContext } from "../context/basketContext";
import Ionicons from 'react-native-vector-icons/Ionicons';

const BaskteItem = (props) => {
  const [basket, setBasket] = useContext(BasketContext)

  const deleteProduct = (product) => {
    // console.log("je veux supprimer le produit")
    let newBasket = [...basket]
    let index = newBasket.findIndex(item => item.id === product.id)
    // console.log(index)
    newBasket.splice(index, 1)
    // console.log("newbasket", newBasket)
    setBasket(newBasket)
  }

  const removeOneQuantity = (product) => {
    // console.log("remove one quantity")
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
    // console.log("add one quantity")
    let newBasket = [...basket]
    let index = newBasket.findIndex(item => item.id === product.id)
    newBasket[index].quantityInCart += 1
    setBasket(newBasket)
  }

  return (
    <View  style={styles.product}>
        <Text style={styles.titleproduct}>{props.product.title}</Text>
        <Image style={styles.img} source={{uri: props.product.thumbnailUrl}} resizeMode="contain"/>
        <Text style={styles.textQuantityProduct}>Quantité : {props.product.quantityInCart}</Text>
        <Text style={styles.textproduct}>Modifier la quantité :</Text>
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
  textQuantityProduct: {
    color: "black",
    fontSize: 17,
    marginRight: 10,
    width: "100%",
    marginVertical: 10,
  },
  textproduct: {
      color: "black",
      fontSize: 17,
      marginRight: 10,
      width: "50%",
      marginVertical: 10,
  },
  link: {
      marginVertical: 15,
      borderColor: "black",
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      height: 40,
      width: "100%",
      textAlign: "center",
      borderRadius: 2
  },
  linkText: {
      color: "black",
      fontSize: 15,
      paddingVertical: 0,
      textAlign: "center",
      paddingVertical: 8,
  },
  input: {
    height: 30,
    fontSize: 17,
    width: 50,
    marginTop: 0,
    borderRightColor: "black",
    borderRightWidth: 1,
    borderLeftColor: "black",
    borderLeftWidth: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    borderRadius: 2,
    textAlign: "center",
    paddingVertical: 5,
  },
  product: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "end",
    marginVertical: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1
  },
  img: {
    width: "30%",
    height: 100,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    borderRadius: 10
  },
  titleproduct: {
    color: "black",
    width: "70%",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
    paddingHorizontal: 5,
  }
})

export default BaskteItem;
