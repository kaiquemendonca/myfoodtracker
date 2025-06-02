import './globals.css';

export const metadata = {
  title: 'Food Tracker',
  description: 'Controle de refeições e gasto calórico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
