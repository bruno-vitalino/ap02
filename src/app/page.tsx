"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [sumValue, setSumValue] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const number = parseFloat(input);
    if (!isNaN(number)) {
      setSumValue(number + 2);
    }
    localStorage.setItem("number", input);
    setInput("");
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
        {sumValue !== null && (
          <div className="mt-4">
            <p>O número digitado + 2 é igual a {sumValue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
