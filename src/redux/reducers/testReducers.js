import {SET_NAME,SET_DATA} from "../actions/testActions";


const initialState = {
    name:'ahmet',
    age:19,
    data:[],
    loading:false
}

const UserReducer =(state=initialState,action)=>{
    switch (action.type){

        case SET_DATA:{
            return {
                ...state,data:action.payload,loading: true
            }
        }
        default:
            return state
    }
}
export default UserReducer
