interface ProjectFormType{
    title: string,
    description: string,
    tags: [string] | string,
    image: string,
    sourceLink: string,
    deployedLink?: string,
    secretCode: string
}

export type {
    ProjectFormType
}