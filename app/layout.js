import '../styles/globals.css'
import HeaderNew from './components/HeaderNew.js'
import FooterNew from './components/FooterNew.js'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='bg-gray-100 flex flex-col justify-items-center'>
        <HeaderNew/>
      {children}
        <FooterNew/>
      </body>
    </html>
  )
}
