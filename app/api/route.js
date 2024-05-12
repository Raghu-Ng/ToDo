import { NextResponse } from "next/server";
import { ConnectDB } from "../../lib/config/db.js";
import TodoModel from "@/lib/models/TodoModel.js";

const LoadDB = async()=>{
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    return NextResponse.json({msg:"get methot hit"})
}

export async function POST(request){

    const{title,discription} = await request.json();
    await TodoModel.create({
        title,
        discription
    })

    return NextResponse.json({msg:"Todo Created"})
}