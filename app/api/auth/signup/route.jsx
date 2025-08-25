import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { email, password, name } = await req.json();
  if (!email || !password || !name) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
    name,
    createdAt: new Date(),
  });

  return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
}
