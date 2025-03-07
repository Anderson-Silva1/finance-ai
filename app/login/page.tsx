import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <>
      <div className="grid-row flex h-full flex-col-reverse md:grid md:grid-cols-2">
        {/* Texto - ESQUERDA */}
        <div className="flex h-full max-w-[600px] flex-col justify-center space-y-5 p-12">
          <Image src="/logo.png" alt="Finance AI" width={180} height={40} />
          <h1 className="text-4xl font-bold">
            Seja bem <span className="text-primary">vindo!!</span>
          </h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>

          <SignInButton>
            <Button variant="outline">
              <LogInIcon /> Fazer login ou criar conta
            </Button>
          </SignInButton>
        </div>
        {/* Imagem - DIREITA */}
        <div className="relative h-full w-full">
          <Image
            src="/login.png"
            alt="faça login"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
