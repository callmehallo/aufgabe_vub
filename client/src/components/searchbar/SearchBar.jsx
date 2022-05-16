import React from 'react'
import { useForm } from 'react-hook-form'
import './Searchbar.css'

const Searchbar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()

  return (
    <div>
      <form onSubmit={handleSubmit(data => onSubmit(data.url))}>
        <input
          {...register('url')}
          type='text'
          placeholder='Enter URL Here'
        ></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}
export default Searchbar
