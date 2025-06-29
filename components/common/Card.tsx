import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, image, description }) => (
    <div className="border rounded-lg p-4 shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
    </div>
)

export default Card
