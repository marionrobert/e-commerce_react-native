import React, {useState, createContext} from "react";

//création de l'environnement du context (natif de react): on peut l'appeler directement
const BasketContext = createContext()

const BasketProvider = (props) => {
  //je déclare la state globale
  const [basket, setBasket] = useState([])

  //englober toutes les routes
  return (
    // va retour un objet avec plein de fonctionnalités
    // avec la capacité d'appeler la state favorite ou de la modifier
    <BasketContext.Provider value={[basket, setBasket]}>
      {/* on sait pas encore quel composant sera appelé donc on utilise children, permet d'attribuer l'environnement du conetxte par défaut sur le composant demandé*/}
      {props.children}
    </BasketContext.Provider>
  )
}

export {BasketContext, BasketProvider}
