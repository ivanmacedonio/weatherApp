import React from 'react'
import { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    const changeHandler = (e) => {
        const value = e.target.value
        
        setCity(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onChangeCity(city)

    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandler} />
    </form>
  )
}
