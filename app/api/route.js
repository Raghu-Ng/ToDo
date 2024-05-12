import { NextResponse } from "next/server";
import { ConnectDB } from "../../lib/config/db.js";
import TodoModel from "@/lib/models/TodoModel.js";

const LoadDB = async()=>{
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    const todos = await TodoModel.find({});
    return NextResponse.json({todos:todos})
}

export async function POST(request){

    const{title,discription} = await request.json();
    await TodoModel.create({
        title,
        discription
    })

    return NextResponse.json({msg:"Todo Created"})
}

export async function DELETE(request){

    const mongoId = await request.nextUrl.searchParams.get('mongoId')
    

    return NextResponse.json({msg:"Todo Created"})
}