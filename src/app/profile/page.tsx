"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import toast from "react-hot-toast"


//update so we use the hook useEffect to update as soon as the request reaches the profile page
export default function ProfilePage() {

    const router = useRouter()
    const [data,setData] = useState("nothing")
    
    //initiating the logout up
    const logout = async () => {
            try {
                const response = await axios.get("/api/users/logout")
                console.log("Signup success", response.data)
                router.push("/login")
            } catch (error: any) {
                console.log("logout failed" + error.message)
                toast.error(error.message)
            } 
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data.username)
        console.log()
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="p-3 rounded bg-green-500">{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />

            <button 
            className = "bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={getUserDetails}
            >
                Get User details
            </button>

            <button 
            className = "bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}