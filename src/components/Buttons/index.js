import React from 'react';
import './styles.css';

const Button = (props) => {
    return <button
                className='button'
                disabled={props.isDisabled}
                onClick={props.handleOnClick}
            >
                {props.text}
            </button>

}

export {Button};