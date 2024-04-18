"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Header from "@/components/shared/Header";




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <>
            <main className="flex flex-col items-center justify-center  py-2 pt-52 ">
                <div className="flex flex-col items-center justify-center bg-white py-5 px-8 rounded-lg shadow-2xl  ">
                    <div className="mb-5 text-[20px]"><Link href='/signup' className="mr-1 ">Реєстрація</Link>/<Link href='login' className="ml-1 text-slate-500">Вхід</Link></div>
                        <hr />
                        
                    <label htmlFor="email">email</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="email"
                        />
                    <label htmlFor="password">пароль</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="password"
                        />
                        {buttonDisabled? <button
                         className="py-2 px-5 border bg-gray-50 border-gray-300 text-gray-300 rounded-lg mb-4   pointer-events-none ">Вхід</button>:
                        <button
                        onClick={onLogin}
                        className="py-2 px-5 border border-gray-300 rounded-lg mb-4 focus:outline-none    hover:border-slate-950 transition-colors duration-300">Вхід</button>}
                </div>
            </main>
        </>
    )

}