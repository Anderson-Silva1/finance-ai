import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <>
      <div className="grid h-full grid-cols-2">
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

          <Button variant="outline">
            <LogInIcon /> Fazer login ou criar conta
          </Button>
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
