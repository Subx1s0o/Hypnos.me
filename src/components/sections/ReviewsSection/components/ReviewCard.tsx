export default function ReviewCard() {
    const data = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat, architecto totam obcaecati recusandae rem at ipsum consequatur soluta iste.",
            imageUrl: "/images/ReviewsSection/person_1.avif",
            altText: "fotoslide",
            author: "Albert Flores",
            date: "24.02.2022"
        },
        {
            text: "Tempus nunc in at ipsum hendrerit massa, iaculis. Faucibus tristique porttitor quis eu.",
            imageUrl: "/images/ReviewsSection/person_2.avif",
            altText: "secondSlide",
            author: "John Doe",
            date: "01.03.2023"
        },
        {
            text: "Enim, ullamcorper urna ultricies arcu malesuada potenti. Justo, vitae sagittis vitae sit auctor congue velit. Cursus dignissim sed proin.",
            imageUrl: "/images/ReviewsSection/person_3.avif",
            altText: "fotoslide",
            author: "Albert Flores",
            date: "12.06.2021"
        },
        {
            text: "Enim, ullamcorper urna ultricies arcu malesuada potenti.",
            imageUrl: "/images/ReviewsSection/person_4.avif",
            altText: "fotoslide",
            author: "Cody Fisher",
            date: "07.09.2025"
        }
    ];

    return (
        <>
            {data.map((dat, index) => (
                <div key={index}>
                    <p>{dat.text}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="292" height="33" viewBox="0 0 292 33" fill="none">
                        <path d="M0 1H86C87.1046 1 88 1.89543 88 3V31.3062C88 32.0674 88.8166 32.5495 89.4831 32.1818L145.549 1.24884C145.845 1.08561 146.177 1 146.515 1H292" stroke="#D9CABF" stroke-miterlimit="3.8637" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <img src={dat.imageUrl} alt={dat.altText} className="rounded-[64px] w-16 h-16" />
                        <h3>{dat.author}</h3>
                        <p>{dat.date}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
