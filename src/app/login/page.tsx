'use client'

import { FormEvent } from 'react'
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://localhost:3333/users/login', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    console.log(data)
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  )
}