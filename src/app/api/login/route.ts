import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  
  console.log(JSON.stringify({
    email: email,
    password: password
  }))
  
  const response = await fetch('http://localhost:3333/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    }),
  })

  const data = await response.json()
  console.log(data)
  cookies().set('Session', `bearer ${data}`)

  return NextResponse.json(200)
}