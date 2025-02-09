const {default: axios} = require('axios');

const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl='http://localhost:1337/api'

const axiosClient = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})

const getLatestProducts=()=>axiosClient.get('/products?populate=*');

const getProductById=(documentId)=>axiosClient.get('/products/'+documentId+'?populate=*')

const getProductByCategory=(category)=>axiosClient.get('/products?filters[category] [$eq]='+category+"&populate=*")

//Add to Cart Collection
const addToCart=(data)=>axiosClient.post('/carts',data)



const getUserCartItems = (email) =>
    axiosClient.get(`/carts?populate[product][populate]=banner&filters[email][$eq]=${email}`);  

//Delete Cart Item
const deleteCartItem=(id)=>axiosClient.delete('/carts/'+id)

export default {
    getLatestProducts,
    getProductById,
    getProductByCategory,
    addToCart,
    getUserCartItems,
    deleteCartItem
}