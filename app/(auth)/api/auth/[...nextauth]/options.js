import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    session: {
        maxAge: 1*10*60*1,
    },
    providers: [ 
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username",
                },
                password:{
                    label: "Password",
                    type: "password",
                    placeholder: "your-awesome-password",
                },
            },
            async authorize(credentials){
                //TODO: hardcoded user
                const user = { id:1, name:"User", password: "123"}

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }
                else{
                    return null;
                }
                

            },
        })
    ],
    
    pages:{
        signIn: '/signin',
        //signOut: '/auth/signout',
    }
    
}