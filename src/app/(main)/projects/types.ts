interface ProjectCardType{
    _id: string,
    title: string,
    description: string,
    tags: [string],
    image: string,
    sourceLink: string,
    deployedLink?: string
}

export type {
    ProjectCardType
}