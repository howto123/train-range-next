import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers'


export const options: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: ""
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: ""
                }
            },
            async authorize(credentials) {
                const user = { id: "", name: process.env.CUSTOM_CLIENT_NAME!, password: process.env.CUSTOM_CLIENT_SECRET! }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    // frontside authorization successful

                    const backendURL = process.env.BACKEND_URL!
                    const loginApi = backendURL + "/login"
                    const backendPassword = process.env.BACKEND_PASSWORD!
                    if(!backendPassword) {
                        throw new Error("BACKEND_PASSWORD not found")
                    }

                    console.log("Backend password is: " + backendPassword)
                    console.log("URL is: " + loginApi)

                    const cookie = await fetch(loginApi, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "password": backendPassword
                        })
                    })
                    .then(res => {
                        // @ts-ignore
                        return res.headers.getSetCookie()
                    })
                    .then(cookies => {
                        if(!cookies[0]) {
                            throw new Error("Token missing or not in first position in setCookie")
                        }
                        console.log("Cookie! "+ cookies[0])
                        return cookies[0]
                    })
                    .catch(err => console.log("There was an error during backend authentication."))
                    || ""

                    const cookieKey = cookie.slice(0, cookie.indexOf('='))
                    const cookieValue = cookie.slice(cookie.indexOf('=') + 1, cookie.indexOf(';'))
                    cookies().set(cookieKey, cookieValue)                

                    return user
                } else {
                    return null
                }
            }
        })
    ]
}