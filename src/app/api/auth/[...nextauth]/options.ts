import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';


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
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}