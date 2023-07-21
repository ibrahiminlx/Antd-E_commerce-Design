import axios from "axios";
export const SET_NAME='SET_NAME'
export const SET_DATA='SET_DATA'


export const SetData = (data)=>{
    return{
        type:SET_DATA,
        payload:data
    }
}


export const GetUsers=()=>{
    return async dispatch=>{
        try {
            const response=await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(()=>{
                dispatch(SetData(response.data))

            },3000)

        }catch (e) {
            console.log(e)
        }
    }
}
