
"use client"
import Image from 'next/image'
import React from 'react'


import "./style.scss"
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    icon?: string
}
const Input: React.FC<IProps> = ({ label, icon, ...props }) => {
    return (
        <label className='form-input'>
            {icon && <Image src={require(`@/assets/icons/${icon}`)} alt='' width={16} height={16} />}
            <input type="text" {...props} />
        </label>
    )
}

export default Input