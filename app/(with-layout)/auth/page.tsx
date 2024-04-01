'use client';
import LoginForm from "@/app/ui/auth/loginForm"
import SignupForm from "@/app/ui/auth/signupForm";
import { lusitana } from "@/app/ui/fonts"
import { useState } from "react";


export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const buttonClass1 = isLogin ? " bg-greena-400 text-white " : " text-greena-400 hover:bg-slate-200";
  const buttonClass2 = isLogin ? " text-greena-400 hover:bg-slate-200": " bg-greena-400 text-white";
  
    return (
        <div className="flex flex-col items-center my-4 h-auto">
            <div className="flex justify-center bg-white gap-4 shadow p-2 mb-10 rounded ">
                <button 
                  onClick={() => setIsLogin(true)} 
                  className={`${lusitana.className} text-2xl font-bold transition-all rounded px-2 py-1 ${buttonClass1}`}>
                    Connexion
                </button>
                <button 
                  onClick={() => setIsLogin(false)} 
                  className={`${lusitana.className} text-2xl font-bold transition-all rounded px-2 py-1 ${buttonClass2}`}>
                    Inscription
                  </button>
            </div>
            {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
    )
  }