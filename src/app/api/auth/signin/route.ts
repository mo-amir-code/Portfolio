import { SECRET_CODE } from "@/utils/services/server/constants";
import { isDBConnected } from "@/utils/services/server/server";
import { NextRequest, NextResponse } from "next/server";
import { SignInType } from "../types";
import bcrypt from "bcrypt";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = (await req.json()) as SignInType;
    const { email, password, secretCode } = data;

    if (!email || !password || !secretCode) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    if (secretCode !== SECRET_CODE) {
      return NextResponse.json(
        { message: "Secret code is wrong" },
        { status: 400 }
      );
    }

    await isDBConnected();

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { message: "Admin is not registered with this email id" },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if(!isPasswordCorrect){
        return NextResponse.json(
            { message: "Email or password is incorrect" },
            { status: 400 }
          );
    }

    return NextResponse.json(
      { success: true, message: "You are logged in" },
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
