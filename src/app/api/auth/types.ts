
interface SignInType{
    email:string,
    password: string,
    secretCode: string
}

interface SignUpType{
    name:string,
    email:string,
    password: string,
    secretCode: string
}


export type {
    SignInType,
    SignUpType
}