"use client";

import Form from "./components/form";
import Wheel from "./components/wheel";

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-auto">
      <div className="float-left w-[30%] bg-orange-300">
        <Form />
      </div>
      <div className="float-left w-[70%]">
        <Wheel />
      </div>
    </main>
  );
}
