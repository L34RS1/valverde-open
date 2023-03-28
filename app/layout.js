import '../styles/globals.css'
import Header from './components/header'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 flex flex-col justify-items-center'>
        <header/>
      {children}
      </body>
    </html>
  )
}
