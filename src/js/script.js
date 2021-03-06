import { day, month, year } from "./yearMocks.js";
import {
  FIND_OUT_THE_FUTURE,
  MINIMUM_AGE,
  FIRST_OPTION_MAX_AGE,
  FIRST_OPTION_TEXT,
  SECOND_OPTION_MIN_AGE,
  SECOND_OPTION_MAX_AGE,
  DEATH_IS_HARDER,
  SECOND_OPTION_TEXT,
  THIRD_OPTION,
  MONTH,
  YEAR,
  DAY,
  dataYear,
  inpDay,
  daySelect,
  inpMonth,
  inpYear,
  dataMonth,
  setData,
  formSteps,
  formBtn,
  classNotifications,
  formEndButton,
  dip,
  erRor,
  classDay,
  errorSl,
  classYear,
  classMonth,
  activeStep,
  classHeaderText,
  formaButton,
  classNotificationsText,
  todayYear,
  formValues,
  ACTIVE_THREE_PAGE,
  ACTIVE_FOUR_PAGE,
  ACTIVE_FIVE_PAGE,
} from "./constant.js";

const removeClassFromList = (list, className) => {
  list.forEach((el) => {
    el.classList.remove(className);
  });
};

const removeClassFunc = (e) => {
  dip.classList.remove(e);
};

const update = () => {
  const selectedYear = Number(dataYear.options[dataYear.selectedIndex].value);
  const selectedDay = daySelect.options[daySelect.selectedIndex].value;
  const selectedMonth = dataMonth.options[dataMonth.selectedIndex].value;

  inpDay.value = selectedDay;
  inpYear.value = selectedYear;
  inpMonth.value = selectedMonth;

  let resultAge = todayYear - selectedYear;

  if (resultAge >= MINIMUM_AGE && resultAge <= FIRST_OPTION_MAX_AGE) {
    return (classNotificationsText.innerHTML = FIRST_OPTION_TEXT);
  } else if (
    resultAge >= SECOND_OPTION_MIN_AGE &&
    resultAge <= SECOND_OPTION_MAX_AGE
  ) {
    return (classNotificationsText.innerHTML = SECOND_OPTION_TEXT);
  } else if (resultAge > SECOND_OPTION_MAX_AGE) {
    return (classNotificationsText.innerHTML = THIRD_OPTION);
  }
};

let renderDayItems = () => {
  const renderNumberOfDays = day.map(
    (item) => `<option value=${item.value}>${item.value}</option>`
  );

  classDay.innerHTML = [
    `<option value="" selected disabled hidden>${DAY}</option>`,
    ...renderNumberOfDays,
  ];
};
renderDayItems();

let renderMonthItems = () => {
  const renderNumberOfMonth = month.map(
    (item) =>
      `<option value=${item.value} key="${item.id}"">${item.value}</option>`
  );
  classMonth.innerHTML = [
    `<option value="" selected disabled hidden>${MONTH}</option>`,
    ...renderNumberOfMonth,
  ];
};
renderMonthItems();

let renderYearItems = () => {
  const renderNumberOfYear = year.map(
    (item) => `<option value=${item.value} >${item.value}</option>`
  );
  classYear.innerHTML = [
    `<option value="" selected disabled hidden>${YEAR}</option>`,
    ...renderNumberOfYear,
  ];
};
renderYearItems();

update();

formBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    formValues.step2Question = e.target.innerText;
    removeClassFromList(formSteps, "form__step_active");
    formSteps[1].classList.add("form__step_active");
    classHeaderText.innerHTML = FIND_OUT_THE_FUTURE;
    activeStep.innerHTML = ACTIVE_THREE_PAGE;
  })
);

formaButton.addEventListener("click", (e) => {
  const selectedYear = Number(dataYear.options[dataYear.selectedIndex].value);
  const selectedDay = Number(daySelect.options[daySelect.selectedIndex].value);
  const selectedMonth = dataMonth.options[dataMonth.selectedIndex].text;

  formValues.step3Question = e.target.innerText;

  if (selectedDay === 0 && selectedMonth === MONTH && selectedYear === 0) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = `${DAY}, ${MONTH} ?? ${YEAR}`);
  } else if (selectedDay === 0 && selectedYear === 0) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = `${DAY} ?? ${YEAR}`);
  } else if (selectedDay === 0 && selectedMonth === MONTH) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = `${DAY} ?? ${MONTH}`);
  } else if (selectedMonth === MONTH && selectedYear === 0) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = `${MONTH} ?? ${YEAR}`);
  } else if (selectedDay === 0) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = `${DAY}`);
  } else if (selectedMonth === MONTH) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = MONTH);
  } else if (selectedYear === 0) {
    removeClassFunc("dip");
    return (errorSl.innerHTML = YEAR);
  } else if (selectedYear && selectedMonth !== MONTH && selectedDay) {
    removeClassFromList(formSteps, "form__step_active");
    formSteps[2].classList.add("form__step_active");
    classHeaderText.innerHTML = DEATH_IS_HARDER;
    activeStep.innerHTML = ACTIVE_FOUR_PAGE;
  }
});

formEndButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    formValues.step4Question = e.target.innerText;
    removeClassFromList(formSteps, "form__step_active");
    formSteps[3].classList.add("form__step_active");
    removeClassFromList(classNotifications, "display_none");
    classHeaderText.style.display = "none";
    activeStep.innerHTML = ACTIVE_FIVE_PAGE;
  });
});

dataYear.addEventListener("change", update);
daySelect.addEventListener("change", update);
dataMonth.addEventListener("change", update);
