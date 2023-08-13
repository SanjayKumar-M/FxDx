import React from 'react'

const Algorand = () => {
    const algocont={
        display:'flex',
        'background-color': 'black',
        'justify-content': 'center'
    }
    const algoimg = {
        width: '1612px',
        height: '782px',
        
    };

    return (
        <div style={algocont} >
            <img style={algoimg} src='https://raw.githubusercontent.com/SanjayKumar-M/Twitter-Bot-using-Python/main/Screenshot%20from%202023-08-13%2022-11-54.png' alt='img' />

        </div>
    )
}

export default Algorand