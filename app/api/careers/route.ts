import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const body = await req.json();

    const { name, email, phone, position, message } = body;

    // Basic validation
    if (!name || !email || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const application = {
      name,
      email,
      phone,
      position,
      message,
      status: "pending",
      appliedAt: new Date(),
    };

    const result = await db.collection("applications").insertOne(application);

    // --- HYBRID: SEND EMAIL NOTIFICATION ---
    const adminEmail = process.env.EMAIL_USER;
    if (adminEmail) {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #8A1538;">New Job Application Received</h2>
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This is an automated notification from your Doha Popular website.</p>
        </div>
      `;
      await sendEmail(adminEmail, `New Career Application: ${name} - ${position}`, emailHtml);
    }

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    });
  } catch (e) {
    console.error("Career application error:", e);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const applications = await db.collection("applications").find({}).sort({ appliedAt: -1 }).toArray();
    
    return NextResponse.json(applications);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
