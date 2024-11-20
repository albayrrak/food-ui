"use client"
import Image from 'next/image'
import React from 'react'

import "./style.scss"

interface IProps {
    image: string,
    title: string,
    price: string,
    available: string

}

const ChooseCard: React.FC<IProps> = ({ image, title, price, available }) => {
    return (
        <div className='choose-card'>
            <div className='choose-card-image'>
                <Image src={require(`@/assets/images/${image}`)} alt="food1" width={150} height={150} />
            </div>
            <div className='choose-card-info'>
                <h3 className='heading-small'>{title}</h3>
                <p className='body-mn'>{price}</p>
                <p className='body-mn text-light'>{available}</p>
            </div>

        </div>
    )
}

export default ChooseCard