import {createStore,compose,applyMiddleware} from "redux";
import testReducer from "../index";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const allEnhencers=compose(composeWithDevTools(applyMiddleware(thunk)))
// const allEnhencers=compose(applyMiddleware(thunk))
export default createStore(testReducer,allEnhencers )