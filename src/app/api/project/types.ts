interface NewProjectType{
    title: string,
    description: string,
    tags: [string],
    image: string,
    sourceLink?: string,
    deployedLink?: string,
    secretCode:string
}

interface UpdateProjectType{
    projectId:string,
    title?: string,
    description?: string,
    tags?: [string],
    image?: string,
    sourceLink?: string,
    deployedLink?: string,
    secretCode:string
}

interface DeleteProjectType{
    projectId:string,
    secretCode:string
}

export type {
    NewProjectType,
    UpdateProjectType,
    DeleteProjectType
}