import "./style.css";
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");

type Review = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
};

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];
console.log(reviewTotalDisplay);

const addNewReview = (review: Review): void => {
  reviews.unshift(review);
  console.log(reviews);
};

addNewReview({
  name: "Lethabo",
  stars: 3,
  loyaltyUser: false,
  date: "20-09-2024",
});
