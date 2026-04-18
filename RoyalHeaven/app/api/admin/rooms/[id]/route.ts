import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = await params;
    const roomId = Number(id);
    const body = await req.json();

    const updated = await prisma.rooms.update({
        where: { room_id: roomId },
        data: {
            title: body.title,
            description: body.description,
            price_per_night: parseFloat(body.price),
            image: body.image,
            capacity: Number(body.capacity),
        },
    });

    return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const roomId = Number(id);

    await prisma.rooms.delete({
        where: { room_id: roomId },
    });

    return NextResponse.json({ message: "Room deleted" });
}
