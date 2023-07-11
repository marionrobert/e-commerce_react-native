import axios from "axios"

//on récupère nos fake annonces dans l'api https://jsonplaceholder.typicode.com/photos?albumId=1
export const getAllProducts = ()=>{
  return axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then((res)=>{
    return res.data
  })
  .catch((err)=>{
    return err
  })
}
