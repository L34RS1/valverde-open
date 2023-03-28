import '../styles/globals.css'
import Header from './components/Header'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 flex flex-col justify-items-center'>
        <Header/>
      {children}
      </body>
    </html>
  )
}
