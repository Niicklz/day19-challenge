const date = new Date();
let seconds: number;
let hour: number;
let minutes: number = date.getMinutes();
const hourWithoutTransform = new Date().getHours().toString();
const buttonThemeChange = document.getElementById(
  "theme"
)! as HTMLButtonElement;
buttonThemeChange.addEventListener("click", () => {
  const btnClassList = buttonThemeChange.classList;
  document.body.classList.toggle("dark");
  document.getElementById("lane2")!.classList.toggle("white-theme");
  document.getElementById("lane3")!.classList.toggle("white-theme");
  document.getElementById("hour")!.classList.toggle("dark-letters");
  document.getElementById("secondsCircle")!.classList.toggle("white-theme");
  buttonThemeChange.classList.toggle("white-theme");
  btnClassList.contains("white-theme")
    ? (buttonThemeChange.textContent = "Light Mode")
    : (buttonThemeChange.textContent = "Dark Mode");
});
const monthsOfTheYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getHours12() {
  const hours = new Date().getHours();
  return hours % 12;
}
const getAMPMHour = () => {
  const hour = new Date().getHours();
  return hour < 12 ? "AM" : "PM";
};
function getFullDay() {
  const dayOfWeek = new Date().getDay();
  return daysOfTheWeek[dayOfWeek].toUpperCase();
}
const getFullMonth = () => {
  const month = new Date().getMonth();
  return monthsOfTheYear[month].toUpperCase();
};
const fixedMinutes = (minutes: string) => minutes.length === 1 ? `0${minutes}` : minutes;
document.getElementById("date")!.textContent = `${getFullDay()}, ${getFullMonth()} ${date.getDate()}`;
document.getElementById("hour")!.textContent = `${hourWithoutTransform}:${fixedMinutes(minutes.toString())} ${getAMPMHour()}`;
setInterval(() => {
  hour = getHours12();
  seconds = new Date().getSeconds();
  minutes = new Date().getMinutes();
  document.getElementById("date")!.textContent = `${getFullDay()}, ${getFullMonth()} ${date.getDate()}`;
  document.getElementById("hour")!.textContent = `${hourWithoutTransform}:${fixedMinutes(minutes.toString())} ${getAMPMHour()}`;
  document.getElementById("minutesCircle")!.style.transform = `rotate(${270 + 6 * minutes}deg)`;
  document.getElementById("hourCircle")!.style.transform = `rotate(${270 + hour * 30}deg)`;
  document.getElementById("secondsCircle")!.style.transform = `rotate(${270 + 6 * seconds}deg)`;
}, 1000);
