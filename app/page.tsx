import { auth } from "@clerk/nextjs/server";
import { Button } from "./_components/ui/button";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-12">
      <UserButton showName />

      <Button>Botão teste</Button>
    </div>
  );
}
