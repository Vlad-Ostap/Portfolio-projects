'use client'

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ReviewCardProps {
    image: string | null,
    title: string | null,
    room_id: number,
}

export default function ReviewCard({ image, title, room_id }: ReviewCardProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSaveReview(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            reveiw_text: formData.get('review'),
            room_id,
        };

        const res = await fetch('/api/review', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        setIsLoading(false);

        if (res.ok) {
            router.push("/info-page/review");
        } else {
            console.log(`Error: ${result.message}`);
            router.push("/info-page/error");
        }
    }

    return (
        <div className="review-card">
            <div className="review__image">
                <Image
                    src={image || ''}
                    alt={title || ''}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                />
            </div>
            <form onSubmit={handleSaveReview} className="review__form">
                <h3>{title}</h3>
                <textarea name="review" id="review" placeholder="Write a review" required></textarea>
                <button className="review__button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Save review...' : 'Save review'}
                </button>
            </form>
        </div>
    )
}