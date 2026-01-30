import { useState, useEffect, useRef } from 'react';

export default function Input({label, type, id, key, onChange}) {
    return (
        <label className="label">
            {label}
            <input id={id} type={type} key={key} onChange={(e) => onChange(e.target.value)}/>
        </label>
    )
}