import axios from "axios";

const request = axios.create({
    baseURL: 'http://3.7.252.58:4001'
})



request.interceptors.response.use(
    function(response){
      return response.data  
    },
    function(error){
        return error
    }
)

export default request