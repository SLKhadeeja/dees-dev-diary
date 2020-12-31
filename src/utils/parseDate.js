const arrayMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "july",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const parseDate = date => {
  var unparsedDate = date.split("/");
  return `${unparsedDate[0]} ${arrayMonths[unparsedDate[1] - 1]}, ${
    unparsedDate[2]
  }`;
};
