import axios from 'axios'
import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../constants/userConstants'


export const login = (email,password) =>async(dispatch,getState)=>{

    console.log(email,password)
try{
    dispatch({type:LOGIN_REQUEST})
    const config = {headers:{"Content-Type":"Appliction/json"}}
    const {data}  = await axios.post ( 
        `/api/auth/login`, 
        {email,password},
        );

dispatch({type:LOGIN_SUCCESS,payload:data.user})
console.log(data)

}catch(error){
    dispatch({type:LOGIN_FAIL,payload:error.response.data})

    console.log(error.response.data)
    
}

}

export const register = (userData) =>async(dispatch)=>{

    try{
        
        dispatch({type:REGISTER_USER_REQUEST});

        const config = {headers:{"Content-Type":"Application/json"}}

        const {data } = await axios.post(`/api/auth/register`,userData,config)

        dispatch({type:REGISTER_USER_SUCCESS,payload:data.user})
        console.log(data)

    }catch(error){

        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data,
        })
        console.log(error)
    }
}

//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS});
  };