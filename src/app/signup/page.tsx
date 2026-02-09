"use client" // This component runs in the browser, not on the server
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"



export default function SignupPage() {
    
    //setting up state for user sign in
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = () => {

    }

    return (
        <div className= "flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white font-500 text-black"
            type="text"
            id = "username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username" />

            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white font-500 text-black"
            type="text"
            id = "username"
            value={user.username}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email" />

            <label htmlFor="password">password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white font-500 text-black"
            type="password"
            id = "username"
            value={user.username}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="username" />

            <button
             className="p-2 border border-gray-300 rounded-g mb-4 focus:outline-none focus:border-gray-600 bg-white text-black"
             onClick={onSignup}>
                Signup here    
            </button>
            <Link href="/login">Visit login</Link>
        </div>
    )
}