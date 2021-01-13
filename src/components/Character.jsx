import React from 'react'

export const Character = (props) => {
    return (

        <div className="profile">
            <h1>{props.name}</h1>
             <img src={props.img} alt=""/>
        </div>
    )
}
