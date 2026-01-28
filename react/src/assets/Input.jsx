import { useState, useEffect, useRef } from 'react';

export function Input({type, id, key, onChange}) {
    return (
        <input id={id} type={type} key={key} onChange={(e) => onChange(e.target.value)}/>
    )
}