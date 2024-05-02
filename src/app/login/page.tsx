'use client'

import axios from 'axios'
import { cookies } from 'next/headers'
import { FormEvent } from 'react'
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const dataJSON = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    const response = await fetch('/api/login', {
      method: "POST",
      mode: "same-origin",
      body: JSON.stringify(dataJSON)
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