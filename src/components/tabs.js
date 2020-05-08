import React, {useState} from 'react';

const Tabs = (props) => {

    const style= {
        margin: '30px 10px',
        height: '40px',
        width: '100px',
        background: 'lightblue',
        display: 'inline-block'
    }

    const tabSelect = (e) => {
        e.preventDefault();
        console.log(props.state, 'was pressed')
        props.setState(props.state)
    }


    return(
        <form onSubmit={ tabSelect } style={{display: 'inline'}}>
            <input type='submit' style={style} value ={props.state} />
        </form>
    );
}


export default Tabs;