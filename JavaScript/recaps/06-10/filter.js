//? 3.1- Greater than
// You are given this array of numbers:
const numbers = [1, 100, 67, -5, 6784, 356, 200];
// Create a function that takes 2 arguments, an array and a number.
// With the filter method return from the function only the numbers that are
// greater than the number you gave as an argument.

function greaterThan(arr, number) {
  return arr.filter(elem => {
    return elem > number;
  });
}

//* console.log(greaterThan(numbers, 1));

//? 3.2 – Greater than and less than.
// Use the same array of numbers as in the previous exericse
// Create a function that takes 3 arguments, an array, and 2 numbers.With the filter method return from the function only the numbers that are
// greater than and less than the numbers you supplied to the function.
// E.g. if your first number is 10 and second number is 300 you should only
// return the numbers 100, 67, 200.

function greaterThanLess(arr, greater, less) {
  return arr.filter(elem => {
    return elem > greater && elem < less;
  });
}

///* console.log(greaterThanLess(numbers, 10, 300));

const movies = [
  {
    id: 1,
    url: 'http://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Ended',
    runtime: 50,
    premiered: '2013-06-24',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    schedule: { time: '22:00', days: ['Thursday'] },
    rating: { average: 6.5 },
    weight: 91,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 25988, thetvdb: 264492, imdb: 'tt1553656' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg',
    },
  },
  {
    id: 2,
    url: 'http://www.tvmaze.com/shows/2/person-of-interest',
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Crime'],
    status: 'Ended',
    runtime: 60,
    premiered: '2011-09-22',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    schedule: { time: '22:00', days: ['Tuesday'] },
    rating: { average: 9 },
    weight: 96,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 28376, thetvdb: 248742, imdb: 'tt1839578' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
  },
  {
    id: 3,
    url: 'http://www.tvmaze.com/shows/3/bitten',
    name: 'Bitten',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Horror', 'Romance'],
    status: 'Ended',
    runtime: 60,
    premiered: '2014-01-11',
    officialSite: 'http://bitten.space.ca/',
    schedule: { time: '22:00', days: ['Friday'] },
    rating: { average: 7.6 },
    weight: 75,
    network: {
      id: 7,
      name: 'Space',
      country: { name: 'Canada', code: 'CA', timezone: 'America/Halifax' },
    },
    webChannel: null,
    externals: { tvrage: 34965, thetvdb: 269550, imdb: 'tt2365946' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
    },
  },
  {
    id: 4,
    url: 'http://www.tvmaze.com/shows/4/arrow',
    name: 'Arrow',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Running',
    runtime: 60,
    premiered: '2012-10-10',
    officialSite: 'http://www.cwtv.com/shows/arrow',
    schedule: { time: '20:00', days: ['Monday'] },
    rating: { average: 7.6 },
    weight: 99,
    network: {
      id: 5,
      name: 'The CW',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 30715, thetvdb: 257655, imdb: 'tt2193021' },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg',
    },
  },
];

//? 3.3 – filter rating
// Create a function that takes two arguments, an array and a rating number
// Using the filter method return from the function only the movies that the
// rating average is more than the rating number provided in the function.

function greaterRating(arr, rating) {
  return arr.filter(res => {
    return res.rating.average > rating;
  });
}

//* console.log(greater(movies, 8.5));

//? 3.4 – filter ratings and run time
// Create a function that takes 3 arguments, an array, a rating number and a
// run time number.
// Using the filter method return from the function only the movies that have
// a rating average of more than the rating number provided to the function
// and the movies run time needs to be less or equal than the run time provided from
// the function.
// For example if the rating: 5 and run time: 50, you should only return the
// movie Under The Dome.

function ratingRuntime(arr, rating, runTime) {
  return arr.filter(movie => {
    return movie.rating.average > rating && movie.runtime <= runTime;
  });
}

//* console.log(ratingRuntime(movies, 5, 50));

//? 3.5 – filter rating and run time own object
// Using the same logic as the previous exercise don’t return the whole movie
// object, but only return the movie name and movie rating.

function ratingRuntimeObj(arr, rating, runTime) {
  return arr.filter(movie => {
    return movie.rating.average > rating && movie.runtime <= runTime;
  }).map((e) => {
    return {
      name: e.name,
      rating: e.rating.average
    };
  });
}

//* console.log(ratingRuntimeObj(movies, 5, 50));

