export async function POST(route: String) {
    const res = await fetch(`${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "email3l",
        password: "12345",
      }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
}
  