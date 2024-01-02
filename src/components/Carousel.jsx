export default function Carousel() {
    return (
        <div className="bg-secondary text-center py-32">
            <h2 className="text-[#2b1c50] text-6xl">One video is worth a thousand words</h2>
            <p className="text-2xl text-[#3d2e7c] mx-auto w-[50%] py-6">
                Easily record and share AI-powered video messages with your teammates and customers
                to supercharge productivity
            </p>
            <div className="mt-8 mb-16">
                <a
                    href=""
                    className="bg-primary text-white py-8 px-16 text-[20px] font-semibold rounded-full border-4 border-[#5559dd66] hover:drop-shadow-lg shadow-button"
                >
                    Get Loom For Free
                </a>
            </div>
            <div className="rounded-lg overflow-hidden text-center mx-auto w-[1022px] h-[575px]">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bgOu-fN0QT4"
                    title="What is Loom? Video messaging for work"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    )
}
