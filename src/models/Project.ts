import mongoose, { Schema } from "mongoose";


interface ProjectSchemaType extends Document{
    title: string,
    description: string,
    tags: [string],
    image: string,
    sourceLink: string,
    deployedLink?: string
}

const projectSchema: Schema<ProjectSchemaType> = new Schema<ProjectSchemaType>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: [{type: String, required: true}],
    image: {type: String, required: true},
    sourceLink: {type: String},
    deployedLink: {type: String}
});


export default mongoose.models.Project || mongoose.model<ProjectSchemaType>("Project", projectSchema);