const hourEle = document.getElementById("hour");

const minutsEle = document.getElementById("minuts");

const secendsEle = document.getElementById("secend");
const ampm = document.getElementById("ampm");

function updateHours() {
  //date by hours
  let h = new Date().getHours();
  //date by minuts
  let m = new Date().getMinutes();
  //date by secends
  let s = new Date().getSeconds();
  /*if the hours is higher than 12 then its pm time then reduse 12 from it you will get the pm time*/
  if (h > 12) {
    h = h - 12;
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "Am";
  }

  // i made it but dont understand actily (:
  //here i reeasign a virable with condation
  //to make it easier the variable will give the result of the condation
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  minutsEle.innerHTML = m;
  hourEle.innerHTML = h;
  secendsEle.innerHTML = s;
  //since the the Date class only give the time once wi no update
  //the setTime out will recall the function every secend
  setTimeout(() => {
    updateHours();
  }, 1000);
}

updateHours();
