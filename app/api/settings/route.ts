import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// GET settings
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const settings = await db.collection("settings").findOne({});
    
    // Return default settings if none found
    if (!settings) {
      return NextResponse.json({
        siteName: "Doha Popular",
        email: "info@dohapopular.com.qa",
        phone: "+97400000000",
        address: "West Bay, Doha, Qatar",
        facebook: "",
        instagram: "",
        linkedin: "",
        metaDescription: "Premium Maintenance, Cleaning, and Manpower Services in Qatar."
      });
    }
    
    return NextResponse.json(settings);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

// POST/PUT update settings
export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const body = await req.json();
    
    // Remove _id for safety
    const { _id, ...updateData } = body;

    const result = await db.collection("settings").updateOne(
      {},
      { $set: { ...updateData, updatedAt: new Date() } },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
