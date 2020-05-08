import React, {useState} from 'react';

const Display = (props) => {

    const style= {
        height: '400px',
        width: '600px',
        border: '1px solid black',
        textalign: 'center',
        margin: '8px 0 0 660px'
    }
    
    if (props.state === 'TAB 1'){
        return(
            <div style={style}>
                <h2>This is Tab 1</h2>
                <p>It is such a cool tab.</p>
                <p>Check out the other cool tabs.</p>
                <p>2 & 3 are pretty cool too.</p>
            </div>
        )
    }
    else if (props.state === 'TAB 2'){
        return(
            <div style={style}>
                <h2>This is Tab 2</h2>
                <p>Woah!!! You made it!!</p>
                <p>This is prolly the coolest tab here.</p>
                <p>Just stay here forever.</p>
            </div>
        )
    }
    else {
        return(
            <div style={style}>
                <h2>This is Tab 3</h2>
                <p>This tab sucks.</p>
                <p>Just go to any other tab and don't come back.</p>
                <p>JK, this one is also cool.</p>
            </div>
        )
    }
};

export default Display;