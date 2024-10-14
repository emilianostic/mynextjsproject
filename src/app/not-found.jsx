
import Link from "next/link"
function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href="/">volver
      </Link>
    </div>
  )
}

export default NotFound
