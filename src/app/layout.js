import { Inter } from "next/font/google";
import './styles/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import AppRouter from "next/dist/client/components/app-router";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tate Braeckel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}

 