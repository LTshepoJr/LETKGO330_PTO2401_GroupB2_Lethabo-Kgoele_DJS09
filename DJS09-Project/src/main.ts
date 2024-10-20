import "./style.css";
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

// const reviewTotalDisplay = document.querySelector("#reviews");

type Review = {
  id: number;
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
};
type UpdatedReview = Partial<Review>;

let addId: number = 1;

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

const jersey: number[] = [55, 77, 88, 99, 11];

const addNewReview = (review: Omit<Review, "id">): Review => {
  const newUser = {
    id: addId++,
    ...review,
  };
  reviews.push(newUser);
  return newUser;
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

const updateReview = (id: number, update: UpdatedReview): void => {
  let user = reviews.find((obj) => obj.id === id);
  if (!user) {
    throw new Error("NO USER FOUND");
  }
  Object.assign(user, update);
};

const lastIndex = <T>(array: T[]): T | void => {
  return array[array.length - 1];
};

addNewReview({
  name: "Lethabo",
  stars: 3,
  loyaltyUser: false,
  date: "20-09-2024",
});
filterReview("lethabo");
updateReview(4, { loyaltyUser: true });
console.log(lastIndex<Review>(reviews));
console.log(lastIndex<Number>(jersey));
console.log(reviews);
