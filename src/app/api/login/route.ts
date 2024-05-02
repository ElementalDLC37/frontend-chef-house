import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { setTimeout } from "timers/promises"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const response = await fetch('http://localhost:3333/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Adicionando cabeçalho Content-Type
    },
    body: JSON.stringify({
      email, password
    })
  })

  const { value } = await response.json()
  cookies().set('Session', `b ${value}`)

  return NextResponse.json({ success: 'success'})
}