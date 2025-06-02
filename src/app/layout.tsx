import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Food Tracker",
  description: "Controle sua alimentação e treino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-white text-black">
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="text-xl font-bold">My Food Tracker</div>
          <div className="space-x-6">
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="/refeicoes" className="hover:text-gray-300">
              Refeições
            </Link>
            <Link href="/atividades" className="hover:text-gray-300">
              Atividades
            </Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
