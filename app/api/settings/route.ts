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
        metaDescription: "Premium Maintenance, Cleaning, and Manpower Services in Qatar.",
        operationalHours: "Sun - Thu: 08:00 AM - 06:00 PM",
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6668704626155!2d51.53326131500965!3d25.32379798383742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4c23063543b%3A0xc3b5e4069156740!2sWest%20Bay%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1645524385967!5m2!1sen!2sbd",
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
