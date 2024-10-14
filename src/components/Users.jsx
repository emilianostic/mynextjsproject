 "use client" //con esto marco que es del cliente
import {useEffect} from 'react'

function Users() {
    useEffect( ()=>{
        alert("loaded")
    }, [])
  return (
   <h1>Users</h1>
  )
}

export default Users
