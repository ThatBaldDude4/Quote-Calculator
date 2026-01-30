import {useState, usEffect, useRef} from 'react';


export default function Form({children}) {
    return (
        <form>
            <p style={{color: "red"}}>HI</p>
            {children}
        </form>
    )
}