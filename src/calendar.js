const dateCalendar = document.querySelector(".js-calendar-date"),
  dateMonth = document.querySelector(".js-month"),
  dateDay = document.querySelector(".js-day");

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
  "December"
];

function getDate() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  dateMonth.innerText = `${monthNames[month]}`;
  dateDay.innerText = day;
}

function init() {
  getDate();
}

init();
