"use client";

import Form from "./components/form";
import Wheel from "./components/wheel";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="float-left w-[30%] bg-orange-300 h-screen">
        <Form />
      </div>
      <div className="float-left w-[70%]">
        <Wheel />
      </div>
    </main>
  );
}
