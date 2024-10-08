//"use client" para que entinda el código del lado client y pueda ejecutar la función o algun hook de react

//When to use Server and Client Components?
//nextjs por defecto crea componentes de servidor
import Users from '../components/Users'
export const metadata = {
  title: "mi casa"
}
function HomePage() {
  return (
    //server component
    <section>
{/*       client component*/} 
    <h1>Hello</h1> 
  <Users/> 
    </section>
  )
}

export default HomePage
