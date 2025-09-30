"use client";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  function handleLogin() {
    router.push("/mari-food")
  }

  return (
    <div className="flex justify-end p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Entre com seu email e senha para acessar o painel.
            </DialogDescription>
          </DialogHeader>

          {/* FOORMULÁRIO LOGIN */}
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
          <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium">Senha</label>
              <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="********" className="pr-10" />
              <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              
              )}
            </Button>
            </div>
          </div>
            <Button className="w-full" onClick={handleLogin}>Entrar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
