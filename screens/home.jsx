import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { getAllProducts } from "../api/product";
import Item from "../components/item";

const Home = (props) => {
  const [products, setProducts] = useState([])

  const goToBasket = () => {
    // console.log(props)
    props.navigation.navigate("Basket")
  }

  const oneProduct = (product) => {
    return (
      <Item key={product.id} product={product} />
    )
  }

  useEffect(()=>{
    getAllProducts()
    .then((res)=>{
      // console.log("res", res)
      setProducts(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Accueil</Text>
        <TouchableOpacity
                style={styles.link}
                onPress={()=>{
                    goToBasket()
                }}
            >
              <Text style={styles.linkText}>Voir mon panier</Text>
        </TouchableOpacity>
        {products.length > 0 && <ScrollView style={styles.result}>
              {products.map((product)=>{
                return oneProduct(product)
              })}
        </ScrollView>}


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
      color: "white",
      fontSize: 20,
  },
  result: {
    backgroundColor: "white",
    textAlign: "center",
    padding: 25,
    marginTop: 25,
    height: 200
  },
  product: {
    margin: 20,
  }

})
export default Home
