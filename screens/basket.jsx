import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/basketItem"

const Basket = (props) => {
  const [basket, setBasket] = useContext(BasketContext)

  const goToHome = () => {
    // console.log(props)
    props.navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Panier</Text>
        {/* <TouchableOpacity
                style={styles.link}
                onPress={()=>{
                    goToHome()
                }}
            >
              <Text style={styles.linkText}>Retour à l'accueil</Text>
        </TouchableOpacity> */}
        { basket.length > 0 ? <ScrollView style={styles.result}>
          { basket.map((product) =>{
            return <BasketItem key={product.id} product={product}/>
          })

          }
          </ScrollView> : <Text>Vous n'avez pas encore ajouté de produit au panier</Text>
        }

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
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
    borderRadius: 2,
  }
})
export default Basket
