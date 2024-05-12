import { ObjectId } from 'mongodb';
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

// export async function DELETE(request){

//     const mongoId = await request.nextUrl.searchParams.get('mongoId');
//     await TodoModel.findByIdAndDelete(ObjectId(mongoId));

//     return NextResponse.json({msg:"Todo Deleted"})
// }

export async function DELETE(request) {
    const mongoId = request.nextUrl.searchParams.get('mongoId');
  
    try {
      // Assuming TodoModel is a Mongoose model
      await TodoModel.findByIdAndDelete(mongoId);
      return NextResponse.json({ msg: 'Todo Deleted' });
    } catch (error) {
      console.error(error);
      return NextResponse.error({ msg: 'Failed to delete todo' });
    }
  }