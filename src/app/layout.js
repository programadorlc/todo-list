import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List',
  description: 'Todo List feita com o curso',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className = ('')}>{children}</body>
    </html>
  )
}
