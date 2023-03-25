import '../styles/globals.css'
import Header from './components/header'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
