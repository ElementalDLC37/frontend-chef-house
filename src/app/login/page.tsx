'use client'

import { cookies } from 'next/headers'
import { FormEvent } from 'react'
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    
    await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      }),
    })
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  )
}