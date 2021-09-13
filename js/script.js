import { day, month, year } from "./year.js";

const dataYear = document.getElementById("year");
const inpDay = document.getElementById("value");
const daySelect = document.getElementById("day");
const inpMonth = document.getElementById("text");
const inpYear = document.getElementById("nummm");
const dataMonth = document.getElementById("month");

const setData = document.querySelectorAll(".set_data");
const formSteps = document.querySelectorAll(".form__step");
const formBtn = document.querySelectorAll(".step_two_bock__forma__btn");
const classNotifications = document.querySelectorAll(".steptwo__result");
const formEndButton = document.querySelectorAll(
  ".step_two_bock__forma__button_end"
);

const dip = document.querySelector(".dip");
const erRor = document.querySelector(".err");
const classDay = document.querySelector(".day");
const errorSl = document.querySelector(".err__sl");
const classYear = document.querySelector(".year");
const classMonth = document.querySelector(".month");
const activeStep = document.querySelector(".active_step");
const classHeaderText = document.querySelector(".steptwo__title");
const formaButton = document.querySelector(".step_two_bock__forma__button");
const classNotificationsText = document.querySelector(".steptwo__result_text");

let formValues = {};

let today = new Date();
let todayYear = today.getFullYear();

const update = () => {
  const selectedYear = dataYear.options[dataYear.selectedIndex].value;
  const selectedDay = daySelect.options[daySelect.selectedIndex].value;
  const selectedMonth = dataMonth.options[dataMonth.selectedIndex].value;

  inpDay.value = selectedDay;
  inpYear.value = selectedYear;
  inpMonth.value = selectedMonth;

  if (todayYear - +selectedYear >= 18 && todayYear - +selectedYear <= 35) {
    return (classNotificationsText.innerHTML =
      "По вам скучает очень близкий человек, которого больше нет в мире живых.");
  } else if (
    todayYear - +selectedYear >= 36 &&
    todayYear - +selectedYear <= 45
  ) {
    return (classNotificationsText.innerHTML =
      "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.");
  } else if (todayYear - +selectedYear > 45) {
    return (classNotificationsText.innerHTML =
      "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.");
  }
};

const removeClassFromList = (list, className) => {
  list.forEach((el) => {
    el.classList.remove(className);
  });
};

let renderDayItems = () => {
  const a = day.map(
    (item) => `<option value=${item.value}>${item.value}</option>`
  );

  classDay.innerHTML = [
    '<option value="" selected disabled hidden>День</option>',
    ...a,
  ];
};
renderDayItems();

let renderMonthItems = () => {
  const a = month.map(
    (item) =>
      `<option value=${item.value} key="${item.id}"">${item.value}</option>`
  );
  classMonth.innerHTML = [
    '<option value="" selected disabled hidden>Месяц</option>',
    ...a,
  ];
};
renderMonthItems();

let renderYearItems = () => {
  const a = year.map(
    (item) => `<option value=${item.value} >${item.value}</option>`
  );
  classYear.innerHTML = [
    '<option value="" selected disabled hidden>Год</option>',
    ...a,
  ];
};
renderYearItems();

update();

formBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    formValues.step2Question = e.target.innerText;
    removeClassFromList(formSteps, "form__step_active");
    formSteps[1].classList.add("form__step_active");
    classHeaderText.innerHTML =
      "Уже совсем скоро Вы узнаете много интересного о своем будущем!";
    activeStep.innerHTML = 3;
  })
);

formaButton.addEventListener("click", (e) => {
  const selectedYear = Number(dataYear.options[dataYear.selectedIndex].value);
  const selectedDay = Number(daySelect.options[daySelect.selectedIndex].value);
  const selectedMonth = dataMonth.options[dataMonth.selectedIndex].text;

  formValues.step3Question = e.target.innerText;

  if (selectedDay === 0 && selectedMonth === "Месяц" && selectedYear === 0) {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "День, Месяц и Год");
  } else if (selectedDay === 0 && selectedYear === 0) {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "День и Год");
  } else if (selectedDay === 0 && selectedMonth === "Месяц") {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "День и Месяц");
  } else if (selectedMonth === "Месяц" && selectedYear === 0) {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "Месяц и Год");
  } else if (selectedDay === 0) {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "День");
  } else if (selectedMonth === "Месяц") {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "Месяц");
  } else if (selectedYear === 0) {
    dip.classList.remove("dip");
    return (errorSl.innerHTML = "Год");
  } else if (selectedYear && selectedMonth !== "Месяц" && selectedDay) {
    removeClassFromList(formSteps, "form__step_active");
    formSteps[2].classList.add("form__step_active");
    classHeaderText.innerHTML =
      "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!";
    activeStep.innerHTML = 4;
  }
});

formEndButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    formValues.step4Question = e.target.innerText;
    removeClassFromList(formSteps, "form__step_active");
    formSteps[3].classList.add("form__step_active");
    removeClassFromList(classNotifications, "display_none");
    classHeaderText.style.display = "none";
    activeStep.innerHTML = 5;
  });
});

dataYear.addEventListener("change", update);
daySelect.addEventListener("change", update);
dataMonth.addEventListener("change", update);
