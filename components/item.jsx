import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BasketContext } from "../context/basketContext";

const Item = (props) => {
  const [basket, setBasket] = useContext(BasketContext)
  const [quantity, setQuantity] = useState(1)

  const addToBasket = (product) => {
    console.log("add to basket has been triggered")
    let newBasket = [...basket]
    const index = basket.findIndex(item => item.id === product.id)
    if (index === -1){
      //le produit n'existe pas encore dans le panier, je lui crée la propriété quantityInCart
      product.quantityInCart = parseInt(quantity)
      // je push le nouveau produit
      newBasket.push(product)
    } else {
      //je mets à jour la quantité du cart pour le produit déjà existant
      newBasket[index].quantityInCart += parseInt(quantity)
    }
    setBasket(newBasket)
  }

  return (
    <View  style={styles.product}>
        <Image style={styles.img} source={{uri: props.product.thumbnailUrl}} resizeMode="contain"/>
        <Text>{props.product.title}</Text>
        <Text>Quantité</Text>
        <TextInput style={styles.input} placeholder="1" onChangeText={(text)=>{setQuantity(text)}}/>
        <TouchableOpacity onPress={()=>{addToBasket(props.product)}} style={styles.link}>
          <Text style={styles.linkText}>Ajouter au panier</Text>
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
  }

})

export default Item;
