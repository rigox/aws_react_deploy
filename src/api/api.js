import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000'

export const registerUser =(data)=>{

    axios.post('/api/user/register',data)
    .then(function(res){console.log(res)})
    .catch(function(err){console.log(err)})

}