'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { POST } from "../api/route";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Login() {
  const response = await POST("http://localhost:3333/users/login")
  const data = await response.json()
  console.log(data)

  return (
    <h1>
      <Link href='/login'>User</Link>
    </h1>
  );
}