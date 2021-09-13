export const MINIMUM_AGE = 18;
export const FIRST_OPTION_MAX_AGE = 35;
export const FIRST_OPTION_TEXT =
  "По вам скучает очень близкий человек, которого больше нет в мире живых.";
export const SECOND_OPTION_MIN_AGE = 36;
export const SECOND_OPTION_MAX_AGE = 45;
export const SECOND_OPTION_TEXT =
  "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.";
export const THIRD_OPTION =
  "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.";
export const MONTH = "Месяц";
export const DAY = "День";
export const YEAR = "Год";

export const DEATH_IS_HARDER =
  "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!";

export const FIND_OUT_THE_FUTURE =
  "Уже совсем скоро Вы узнаете много интересного о своем будущем!";

export let formValues = {};

let today = new Date();
export let todayYear = today.getFullYear();

export const LISSEN = document.querySelector(".end_block__coll_lisen");

export const dataYear = document.getElementById("year");
export const inpDay = document.getElementById("value");
export const daySelect = document.getElementById("day");
export const inpMonth = document.getElementById("text");
export const inpYear = document.getElementById("nummm");
export const dataMonth = document.getElementById("month");

export const setData = document.querySelectorAll(".set_data");
export const formSteps = document.querySelectorAll(".form__step");
export const formBtn = document.querySelectorAll(".step_two_bock__forma__btn");
export const classNotifications = document.querySelectorAll(".steptwo__result");
export const formEndButton = document.querySelectorAll(
  ".step_two_bock__forma__button_end"
);

export const dip = document.querySelector(".dip");
export const erRor = document.querySelector(".err");
export const classDay = document.querySelector(".day");
export const errorSl = document.querySelector(".err__sl");
export const classYear = document.querySelector(".year");
export const classMonth = document.querySelector(".month");
export const activeStep = document.querySelector(".active_step");
export const classHeaderText = document.querySelector(".steptwo__title");
export const formaButton = document.querySelector(
  ".step_two_bock__forma__button"
);
export const classNotificationsText = document.querySelector(
  ".steptwo__result_text"
);

/////// SCRIPT>JS

export const modal = document.querySelector(".modal");
export const footer = document.querySelector(".footer");
export const header = document.querySelector(".end_page");
export const section = document.querySelector(".end_block");
export const recorting = document.querySelector(".recorting");
export const modalWrapper = document.querySelector(".modal__wrapper");
/////// REQUESTcall>JS

// export let formValues = {};
