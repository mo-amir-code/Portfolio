interface SignInFormType{
    email: string,
    password: string,
    secretCode: string
}

interface SignUpFormType{
    name: string,
    email: string,
    password: string,
    secretCode: string
}


export type {
    SignInFormType,
    SignUpFormType
}