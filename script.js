const btns = document.querySelectorAll(".btn");
const back = document.getElementById("background");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;

    if (color.contains("theme1")) {
      document.body.classList.add("theme111");
      document.body.classList.remove("theme222", "theme333");
      back.classList.add("back1");
      back.classList.remove("back3", "back2");
    } else if (color.contains("theme2")) {
      document.body.classList.add("theme222");
      document.body.classList.remove("theme111", "theme333");
      back.classList.add("back2");
      back.classList.remove("back3", "back1");
    } else if (color.contains("theme3")) {
      document.body.classList.add("theme333");
      document.body.classList.remove("theme222", "theme111");
      back.classList.add("back3");
      back.classList.remove("back2", "back1");
    } else if (color.contains("original")) {
      document.body.classList.remove("theme333", "theme222", "theme111");
      back.classList.remove("back3", "back2", "back1");
    }
  });
});
