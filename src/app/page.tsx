"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitNumber() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("number", input);
    setInput("");
    router.push("/rota02"); // Redireciona para a rota /rota02
  };

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded-lg border dark:bg-card text-card-foreground shadow-sm flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight mb-7">
          Rota 01
        </h3>

        <form
          className="flex w-full max-w-sm items-center space-x-2"
          onSubmit={handleSubmit}
        >
          <Input
            className="flex h-10 w-full rounded-md border border-input bg-background style-none text-sm text-muted-foreground"
            type="number"
            value={input}
            onChange={handleChange}
            placeholder="Digite um número..."
          />
          <Button className="flex" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
