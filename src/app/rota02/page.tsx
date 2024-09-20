"use client";
import React, { useEffect, useState } from "react";

export default function RotaMult() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const value = localStorage.getItem("number");
    if (value) {
      setInputValue(value);
    }
  }, []);

  console.log(Number(inputValue));

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-none tracking-tight mb-7">
        Rota 02
      </h1>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="flex">O dobro do valor informado é:</h2>
        <p className="p-4 flex text-5xl font-semibold leading-none tracking-tight mb-7">
          {Number(inputValue) * 2}
        </p>
      </div>
    </div>
  );
}
