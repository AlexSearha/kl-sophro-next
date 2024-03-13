import LoginForm from "@/app/ui/auth/loginForm"
import { lusitana } from "@/app/ui/fonts"

export default function LoginPage({
    params,
  }: {
    params: { slug: string }
  }) {
    return (
        <div className="flex flex-col items-center my-4 h-auto grow">
            <h1 className={`${lusitana.className} text-4xl font-bold mb-8`}>Connexion</h1>
            <LoginForm />
        </div>
    )
  }