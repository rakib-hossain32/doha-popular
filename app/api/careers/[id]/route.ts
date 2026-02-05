import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const { id } = await params;

    await db.collection("applications").deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
