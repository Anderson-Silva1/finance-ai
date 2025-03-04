// "use client";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const NavBar = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="flex justify-between border-b border-solid px-8 py-4">
//       <div className="flex items-center gap-10">
//         <Image src="/logo.png" width={173} height={39} alt="Finance AI" />
//         <Link
//           href="/"
//           className={
//             pathname === "/"
//               ? "font-bold text-primary"
//               : "text-muted-foreground"
//           }
//         >
//           Dashboard
//         </Link>
//         <Link
//           href="/transactions"
//           className={
//             pathname === "/transactions"
//               ? "font-bold text-primary"
//               : "text-muted-foreground"
//           }
//         >
//           Transações
//         </Link>
//         <Link
//           href="/subscription"
//           className={
//             pathname === "/subscription"
//               ? "font-bold text-primary"
//               : "text-muted-foreground"
//           }
//         >
//           Assinatura
//         </Link>
//       </div>
//       <UserButton showName />
//     </nav>
//   );
// };

// export default NavBar;

"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Usando ícones de menu e fechar

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.png" width={173} height={39} alt="Finance AI" />
      </div>

      {/* Menu para telas grandes */}
      <div className="hidden items-center gap-10 sm:flex">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>

      {/* Botão de usuário */}
      <UserButton showName />

      {/* Menu Hambúrguer para telas pequenas */}
      <div className="flex items-center sm:hidden">
        <button
          className="text-muted-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu de navegação para dispositivos móveis */}
      {isMenuOpen && (
        <div className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center bg-white sm:hidden">
          <Link
            href="/"
            className="py-2 text-xl text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className="py-2 text-xl text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className="py-2 text-xl text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Assinatura
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
