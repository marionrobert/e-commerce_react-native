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
        <Text style={styles.title}>Tous nos produits</Text>
        {/* <TouchableOpacity
                style={styles.link}
                onPress={()=>{
                    goToBasket()
                }}
            >
          <Text style={styles.linkText}>Voir mon panier</Text>
        </TouchableOpacity> */}
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
      backgroundColor: "whitesmoke",
      justifyContent: "flex-start",
      alignItems: "center"
  },
  title: {
      color: "black",
      fontSize: 32,
      marginBottom: 30
  },
  text: {
      color: "black",
      fontSize: 22,
  },
  link: {
      marginVertical: 15,
      borderColor: "black",
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      padding: 10,
      borderRadius: 5
  },
  linkText: {
      color: "black",
      fontSize: 20,
  },
  result: {
    backgroundColor: "white",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
    borderRadius: 2,
  }

})
export default Home
