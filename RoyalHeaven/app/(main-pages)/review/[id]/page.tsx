import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import ReviewCard from "@/ui/ReviewCard";
import Banner from "@/ui/Banner";

interface ReviewParams {
    params: Promise<{ id: string }>
}

export default async function Review({ params }: ReviewParams) {
    const { id } = await params
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return (
            <div className="page">
                <Banner title="REVIEW" subtitle="Home > Review" background="/rooms-bg.jpg" />
                <p className="section__title" style={{ margin: 'auto' }}>Please sign in to view your wishlist</p>
            </div>
        );
    }

    const room = await prisma.rooms.findUnique({
        where: {
            room_id: Number(id),
        }
    });

    if (!room) {
        return (
            <div className="page">
                <Banner title="REVIEW" subtitle="Home > Review" background="/rooms-bg.jpg" />
                <p className="section__title" style={{ margin: 'auto' }}>Room not found</p>
            </div>
        );
    }

    const { image, title, room_id } = room;

    return (
        <div className="page">
            <Banner title="REVIEW" subtitle="Home > Review" background="/rooms-bg.jpg" />
            <h2 className="section__title" style={{ marginTop: '20px' }}>WRITE YOUR REVIEW ABOUT THE <span className='blue__title'>ROOM</span></h2>
            <ReviewCard {...{ image, title, room_id }} />
        </div>
    )
}