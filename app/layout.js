
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'Romi finance',
  description: 'Romi finance for assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div>
        {children}
        </div>
       <Footer/>
        </body>
    </html>
  )
}
