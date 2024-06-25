import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try{
        const {userId} = auth()
        if (!userId){
            
        }

    }catch (error){
        console.log("Error creating task:", error)
        return NextResponse.json({error: "creating task", status: 500})
    }
}


export async function GET(req: Request) {
    try{

    }catch (error){
        console.log("Error GETTING task:", error)
        return NextResponse.json({error: "getting task", status: 500})
    }
}

export async function PUT(req: Request) {
    try{

    }catch (error){
        console.log("Error Updating task:", error)
        return NextResponse.json({error: "deleting task", status: 500})
    }
}

export async function DELETE(req: Request) {
    try{

    }catch (error){
        console.log("Error Deleting task:", error)
        return NextResponse.json({error: "deleting task", status: 500})
    }
}