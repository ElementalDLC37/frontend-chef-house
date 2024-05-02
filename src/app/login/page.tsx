'use client'

import axios from 'axios'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
 
export default function Page() {
  const router = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const dataJSON = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    await fetch('/api/login', {
      method: "POST",
      mode: "same-origin",
      body: JSON.stringify(dataJSON)
    })

    router.push('/dashboard')
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  )
}