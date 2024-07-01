import { BCRYPT_ROUND, SECRET_CODE } from "@/utils/services/server/constants";
import { isDBConnected } from "@/utils/services/server/server";
import { NextRequest, NextResponse } from "next/server";
import { SignUpType } from "../types";
import bcrypt from "bcrypt";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = (await req.json()) as SignUpType;
    const { name, email, password, secretCode } = data;

    if (!name || !email || !password || !secretCode) {
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

    if (admin) {
      return NextResponse.json(
        { message: "Admin is already registered with this email id" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUND);

    const newAdmin = { ...data,  password: hashedPassword};

    await Admin.create(newAdmin);

    return NextResponse.json(
      { success: true, message: "New admin added in the database" },
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
