import Image from "next/image";

interface InfoPageParamsProps {
    params: Promise<{
        info: 'booking' | 'review' | 'error',
    }>,
};

const infoType = {
    booking: {
        title: "Booking is successful!",
        text: "Thank you for choosing our hotel.",
    },
    review: {
        title: "Your review has been saved!",
        text: "We appreciate your feedback.",
    },
    error: {
        title: "Something went wrong!",
        text: "Please try again later.",
    },
};

export default async function InfoPage({ params }: InfoPageParamsProps) {
    const { info } = await params;

    const infoContent = infoType[info] || {
        title: "Page not found.",
        text: "The information you requested is unavailable.",
    };

    return (
        <div className="page">
            <div className="info">
                <div className="info-image">
                    <Image
                        className="info-image__img"
                        src={info === "error" ? "/error.svg" : "/success.svg"}
                        alt="Status image"
                        height={100}
                        width={100}
                    />
                </div>
                <div className="info-status">
                    <h1 className={`info-status__title ${info === "error" ? "error" : "success"}`}>{infoContent.title}</h1>
                    <p className="info-status__text">
                        {infoContent.text}
                    </p>
                    <a href="/" className="btn btn--primary">
                        Back to the main page
                    </a>
                </div>
            </div>
        </div>
    );
}
