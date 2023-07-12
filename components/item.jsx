import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BasketContext } from "../context/basketContext";

const Item = (props) => {
  const [basket, setBasket] = useContext(BasketContext)
  const [quantity, setQuantity] = useState(1)

  const addToBasket = (product) => {
    // console.log("add to basket has been triggered")
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
        <Text style={styles.titleproduct}>{props.product.title}</Text>
        <Image style={styles.img} source={{uri: props.product.thumbnailUrl}} resizeMode="contain"/>
        <Text style={styles.textproduct}>Quantité :</Text>
        <TextInput style={styles.input} placeholder="1" onChangeText={(text)=>{setQuantity(text)}}/>
        <TouchableOpacity onPress={()=>{addToBasket(props.product)}} style={styles.link}>
          <Text style={styles.linkText}>Ajouter au panier</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textproduct: {
      color: "black",
      fontSize: 15,
      marginRight: 10,
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
  }
})

export default Item;
