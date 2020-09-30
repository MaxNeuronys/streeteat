import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL:'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=',
        timeout: 10000,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer AIzaSyBIUMmeHtvXaxgLj-S6S9B9oMh5V7qxVfA'
        }
    })
       
}  