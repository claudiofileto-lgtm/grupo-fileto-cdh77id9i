import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative bg-background text-foreground">
      <Navbar />
      <main className="flex-grow flex flex-col pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
