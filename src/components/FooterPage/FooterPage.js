import React from 'react';
import {Button} from 'antd';
import {GetUsers} from "../../redux/actions/testActions";
import {useDispatch, useSelector} from "react-redux";

function FooterPage(props) {
    const {testReducers}=useSelector(state => state)
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(GetUsers())

    }
    return (
        <div>
            <div className="App" >
                <Button type="primary" onClick={handleClick}>Button</Button>
                { testReducers.loading? testReducers.data.map(data=><h5 key={data.id}>{data.name}</h5>):<h1>Loading...</h1> }
            </div>

        </div>
    );
}

export default FooterPage;
