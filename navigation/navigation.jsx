import React from "react"

import Home from "../screens/home"
import Basket from '../screens/basket'

//container qui gère l'environnement du router et son branchement à l'application
import { NavigationContainer } from '@react-navigation/native'
//permet de créer des routes vers nos pages
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//permet de créer un menu customisé, directement branché sur le router
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//librairie d'icons (comme fontawesome)
import Ionicons from 'react-native-vector-icons/Ionicons'

//création du menu de pied de page
const Stack = createBottomTabNavigator()

/* Stack.Navigator permet à l'application de passer d'un écran à l'autre,
chaque nouvel écran étant placé au dessus d'une pile.(on peut en créer plusieurs)

Stack.Screen crée le lien du menu qui va nous afficher le composant lorsqu'on clique dessus*/
const Routes = (props) => {
  return (
    <NavigationContainer styles={{flex: 1}}>
      <Stack.Navigator
        screenOptions={({route})=> ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch(true){
              case (route.name === "Home"):
                iconName = focused ? 'ios-home' : 'ios-home-outline'
              break;
              case (route.name === "Basket"):
                iconName = focused ? 'ios-basket' : 'ios-basket-outline'
              break;
            }

            //tu peux retourner n'importe quel icon que tu veux ici
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: "#277DC2",
          tabBarInactiveTintColor: "grey",
          headerShown: false

        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Basket" component={Basket} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
