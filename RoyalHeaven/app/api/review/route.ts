import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.users.findUnique({
        where: {
            email: session.user?.email
        }
    })

    if (!user) NextResponse.json({ error: "User not found" }, { status: 404 })

    const { reveiw_text, room_id } = await req.json();

    if (!reveiw_text || !room_id) NextResponse.json({ message: "Missing data" }, { status: 400 });

    const existingReview = await prisma.reviews.findFirst({
        where: {
            user_id: user?.user_id,
            room_id: room_id,
        },
    });

    if (existingReview) {
        return NextResponse.json(
            { error: "You have already submitted a review for this room." },
            { status: 409 }
        );
    }

    const review = await prisma.reviews.create({
        data: {
            user_id: user?.user_id,
            room_id: room_id,
            comment: reveiw_text,
        }
    });

    return NextResponse.json({ message: "Review saved", review });
}