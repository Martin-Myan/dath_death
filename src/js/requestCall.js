import {
  modal,
  footer,
  header,
  LISSEN,
  section,
  recorting,
  modalWrapper,
} from "./constant.js";

setTimeout(function () {
  recorting.classList.add("dip_none");
}, 2100);

LISSEN.addEventListener("click", async () => {
  try {
    const data = await fetch("https://swapi.dev/api/people/1/").then((res) =>
      res.json()
    );
    modal.style.display = "flex";

    Object.keys(data).forEach((item) => {
      const value = data[item];
      if (typeof value === "string") {
        const p = document.createElement("p");
        const div = document.createElement("div");
        const span = document.createElement("span");

        p.innerText = item;
        div.appendChild(p);
        div.appendChild(span);
        span.innerText = value;
        footer.style.display = "none";
        header.style.display = "none";
        section.style.display = "none";
        div.classList.add("modal__item");

        modalWrapper.appendChild(div);
      }
    });
  } catch (error) {
    console.log(error, "error");
  }
});
