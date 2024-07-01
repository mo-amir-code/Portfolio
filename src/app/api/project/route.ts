import { isDBConnected } from "@/utils/services/server/server";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import { DeleteProjectType, NewProjectType, UpdateProjectType } from "./types";
import { SECRET_CODE } from "@/utils/services/server/constants";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await isDBConnected();

    const projects = await Project.find();

    return NextResponse.json(
      { success: true, message: "Projects fetched", data: projects },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some Internal Error Occured!" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = (await req.json()) as NewProjectType;
    const { title, description, image, tags, secretCode} = data;

    if(!title || !description || !image || !tags || !secretCode){
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    if(secretCode !== SECRET_CODE){
      return NextResponse.json(
        { message: "Secret code is wrong" },
        { status: 400 }
      );
    }

    await isDBConnected();

    await Project.create(data);

    return NextResponse.json(
      { success: true, message: "Project added" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some Internal Error Occured!" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  try {

    const data = (await req.json()) as UpdateProjectType;
    const { projectId, secretCode} = data;

    if(!projectId || !secretCode){
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    if(secretCode !== SECRET_CODE){
      return NextResponse.json(
        { message: "Secret code is wrong" },
        { status: 400 }
      );
    }

    await isDBConnected();

    await Project.findByIdAndUpdate(projectId, data);

    return NextResponse.json(
      { success: true, message: "Project updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some Internal Error Occured!" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    
    const { projectId, secretCode} = (await req.json()) as DeleteProjectType;

    if(!projectId || !secretCode){
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    if(secretCode !== SECRET_CODE){
      return NextResponse.json(
        { message: "Secret code is wrong" },
        { status: 400 }
      );
    }

    await isDBConnected();

    await Project.findByIdAndDelete(projectId);

    return NextResponse.json(
      { success: true, message: "Project updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some Internal Error Occured!" },
      { status: 500 }
    );
  }
}