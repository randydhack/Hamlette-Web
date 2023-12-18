'use client'

import Form from './components/form'
import Wheel from './components/wheel'

export default function Home() {

  return (
    <main className="flex justify-center w-full h-screen items-center">
      <Form />
      <Wheel />
    </main>
  )
}
