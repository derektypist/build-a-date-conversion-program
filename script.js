const currentDate = new Date();
console.log(currentDate);
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

// Functions
function formatDateMMDDYYYY(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(date) {
  const dateStr = date.toDateString();
  const monthName = dateStr.slice(4,7);
  const dayNumber = dateStr.slice(8,10);
  const year = dateStr.slice(11,15);
  const monthObj = {"Jan": "January", "Feb": "February", "Mar": "March", "Apr": "April", "May": "May", "Jun": "June", "Jul": "July", "Aug": "August", "Sep": "September", "Oct": "October", "Nov": "November", "Dec": "December"};
  const monthNameLong = monthObj[monthName];
  return `Formatted Date (Month Day, Year): ${monthNameLong} ${dayNumber}, ${year}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
