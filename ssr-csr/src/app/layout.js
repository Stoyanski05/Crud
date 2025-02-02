import "./globals.css"
import Link from "next/link"
import { ToastContainer, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-orange-500 flex gap-4 mb-4">
          <Link href="/">Home</Link>
          <Link href="posts">Posts</Link>
          <Link href="users">Users</Link>
          <Link href="books">Books</Link>
          <Link href="login">Log in</Link>
        </nav>
        {children}
        <ToastContainer
          position="bottom-center"
          hideProgressBar={true}
          draggable
          closeButton={false}
          stacked={true}
          transition={Zoom}
          autoClose={false}
        />
      </body>
    </html>
  )
}
