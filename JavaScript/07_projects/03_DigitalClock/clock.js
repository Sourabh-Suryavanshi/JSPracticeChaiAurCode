const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  // console.log(date);
  clock.innerHTML = date.toLocaleTimeString();
  clock.style.backgroundColor = randomColor();
}, 1000);

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
