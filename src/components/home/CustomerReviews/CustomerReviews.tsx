import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa";

interface Review {
  image: string;
  name: string;
  review: string;
  rating: number;
}

const CustomerReviews = () => {
  const reviews: Review[] = [
    {
      image: "https://i.postimg.cc/qRK56363/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
      name: "John Doe",
      review: "This product is amazing! Highly recommended.",
      rating: 5,
    },
    {
      image: "https://i.postimg.cc/qRK56363/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
      name: "Jane Smith",
      review: "Great value for the price. Will buy again.",
      rating: 4,
    },
    {
      image: "https://i.postimg.cc/qRK56363/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
      name: "Michael Johnson",
      review: "Good quality but a bit expensive.",
      rating: 3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-semibold text-center mb-8">
      Customer Reviews
    </h2>
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
    >
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col items-center p-5">
          
          <div>
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full mb-4"
          />
          </div>
          <h3 className="text-xl font-semibold">{review.name}</h3>
          <p className="text-center text-gray-600 my-4">{review.review}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < review.rating ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  </div>
  );
};

export default CustomerReviews;
