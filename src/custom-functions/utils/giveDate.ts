const giveDate = () => {
  // Create an array to store month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get current date
  const currentDate = new Date();

  // Extract day, month, and year from the current date
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Format the date as "DD Month, YYYY"
  const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;

  return formattedDate;
};

export default giveDate;
