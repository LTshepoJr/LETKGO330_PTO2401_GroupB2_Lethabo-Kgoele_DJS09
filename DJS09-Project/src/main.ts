import "./style.css";
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");

type Review = {
  id: number;
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
};

let addId = 1;

const reviews: Review[] = [
  {
    id: addId++,
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    id: addId++,
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    id: addId++,
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];
console.log(reviewTotalDisplay);

const addNewReview = (review: Review): void => {
  reviews.unshift(review);
};

const filterReview = (nameOrStars: string | number): Review | void => {
  if (typeof nameOrStars === "number") {
    const star = reviews.filter((obj) => nameOrStars <= obj.stars);
    if (!star) {
      throw new Error("REQUESTED FILTER NOT FOUND");
    } else {
      for (const obj of star) {
        console.log(obj);
      }
    }
  } else {
    const star = reviews.find(
      (obj) => obj.name.toLowerCase() === nameOrStars.toLowerCase()
    );
    if (!star) {
      throw new Error("REQUESTED FILTER NOT FOUND");
    } else {
      console.log(star);
    }
  }
};

addNewReview({
  id: addId++,
  name: "Lethabo",
  stars: 3,
  loyaltyUser: false,
  date: "20-09-2024",
});
filterReview("lethabo");
