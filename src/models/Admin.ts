import mongoose, { Schema } from "mongoose";


interface AdminSchemaType extends Document{
    name: string,
    email: string,
    password: string
}

const adminSchema: Schema<AdminSchemaType> = new Schema<AdminSchemaType>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


export default mongoose.models.Admin || mongoose.model<AdminSchemaType>("Admin", adminSchema);