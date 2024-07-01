interface TextInputFieldType{
    type: "text" | "number" | "tel" | "date" | "email" | "password",
    register?: any,
    placeholder: string, 
    name: string,
    error?: string | undefined
}


export type {
    TextInputFieldType
}