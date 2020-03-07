let timer;
let newId;
let getSrcIcon;
document.getElementById("button").addEventListener("click", () => {
  let cityName;
  cityName = document.getElementById("form").value;
  let url = "https://api.openweathermap.org/data/2.5/forecast?lang=en&q=" + `${cityName}` + "&appid=7ef5bbf172b6b63ecedaa4b032ac7887";
  showDateTime();

  function autoRefresh() {
    clearTimeout(timer);

    fetch(url)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        document.querySelector(".second__condition").innerHTML = data.list[0].weather[0].description;
        document.querySelector(".first__cityname").innerHTML = data.city.name.toUpperCase();
        document.querySelector(".second__two").innerHTML = Math.round(data.list[0].main.temp - 273);
        //
        document.getElementById("morning-cond").innerHTML = data.list[0].weather[0].description;
        document.getElementById("morning-temp").innerHTML = Math.round(data.list[0].main.temp - 273);
        //
        document.getElementById("day-cond").innerHTML = data.list[1].weather[0].description;
        document.getElementById("day-temp").innerHTML = Math.round(data.list[5].main.temp - 273);
        //
        document.getElementById("night-cond").innerHTML = data.list[2].weather[0].description;
        document.getElementById("night-temp").innerHTML = Math.round(data.list[7].main.temp - 273);
        //
        document.getElementById("t1").innerHTML = Math.round(data.list[8].main.temp - 273);
        document.getElementById("t2").innerHTML = Math.round(data.list[16].main.temp - 273);
        document.getElementById("t3").innerHTML = Math.round(data.list[24].main.temp - 273);
        document.getElementById("t4").innerHTML = Math.round(data.list[39].main.temp - 273);
        //
        let getSrcIcon = data.list[0].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("second__icon").setAttribute("src", newId);
        //
        getSrcIcon = data.list[0].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("morn").setAttribute("src", newId);
        getSrcIcon = data.list[1].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("day").setAttribute("src", newId);
        getSrcIcon = data.list[2].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("night").setAttribute("src", newId);
        //
        getSrcIcon = data.list[8].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("ic-1").setAttribute("src", newId);
        getSrcIcon = data.list[16].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("ic-2").setAttribute("src", newId);
        getSrcIcon = data.list[24].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("ic-3").setAttribute("src", newId);
        getSrcIcon = data.list[39].weather[0].icon;
        changeIcon(getSrcIcon);
        document.getElementById("ic-4").setAttribute("src", newId);
      })
      .catch();
    timer = setTimeout(autoRefresh, 2000);
  }
  autoRefresh();
  window.onload = setInterval(clock, 1000);
});
//////
function changeIcon(id) {
  switch (id) {
    case "01n":
      return (newId = "img/icons/night.svg");
      break;
    case "02n":
      return (newId = "img/icons/cloudy-night-1.svg");
      break;
    case "03n":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "04n":
      return (newId = "img/icons/night.svg");
      break;
    case "05n":
      return (newId = "img/icons/night.svg");
      break;
    case "06n":
      return (newId = "img/icons/night.svg");
      break;
    case "07n":
      return (newId = "img/icons/night.svg");
      break;
    case "08n":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "09n":
      return (newId = "img/icons/rainy-6.svg");
      break;
    case "10n":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "11n":
      return (newId = "img/icon/thunder.svg");
      break;
    case "13n":
      return (newId = "img/icons/snowy-6.svg");
      break;
    case "50n":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "01d":
      return (newId = "img/icons/day.svg");
      break;
    case "02d":
      return (newId = "img/icons/cloudy-day-2.svg");
      break;
    case "03d":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "04d":
      return (newId = "img/icons/day.svg");
      break;
    case "05d":
      return (newId = "img/icons/day.svg");
      break;
    case "06d":
      return (newId = "img/icons/day.svg");
      break;
    case "07d":
      return (newId = "img/icons/day.svg");
      break;
    case "08d":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "09d":
      return (newId = "img/icons/rainy-6.svg");
      break;
    case "10d":
      return (newId = "img/icons/cloudy.svg");
      break;
    case "11d":
      return (newId = "img/icon/thunder.svg");
      break;
    case "13d":
      return (newId = "img/icons/snowy-6.svg");
      break;
    case "50d":
      return (newId = "img/icons/cloudy.svg");
      break;
    default:
      return (newId = "https://openweathermap.org/img/wn/" + `${id}` + "@2x.png");
  }
}
//
function clock() {
  let d = new Date();
  let time = moment().format("HH:mm:ss");
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = monthArr[month];
  document.querySelector(".first__date").innerHTML = date + " " + " " + month + " " + year;
  document.querySelector(".first__time").innerHTML = time;
}
//
function showDateTime() {
  var d = new Date();
  var n1, n2, n3, n4, n5;
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let n = weekday[d.getDay()];
  if (d.getDay() >= 3) {
    n1 = weekday[d.getDay() + 1];
    n2 = weekday[d.getDay() + 2];
    n3 = weekday[d.getDay() + 3];
    n4 = weekday[7 - (d.getDay() + 4)];
  }
  if (d.getDay() >= 4) {
    n1 = weekday[d.getDay() + 1];
    n2 = weekday[d.getDay() + 2];
    n3 = weekday[7 - (d.getDay() + 3)];
    n4 = weekday[9 - (d.getDay() + 4)];
  }
  if (d.getDay() >= 5) {
    n1 = weekday[d.getDay() + 1];
    n2 = weekday[7 - (d.getDay() + 2)];
    n3 = weekday[9 - (d.getDay() + 3)];
    n4 = weekday[11 - (d.getDay() + 4)];
  }
  if (d.getDay() >= 6) {
    n1 = weekday[7 - (d.getDay() + 1)];
    n2 = weekday[9 - (d.getDay() + 2)];
    n3 = weekday[11 - (d.getDay() + 3)];
    n4 = weekday[13 - (d.getDay() + 4)];
  }
  if (d.getDay() < 3) {
    n1 = weekday[d.getDay() + 1];
    n2 = weekday[d.getDay() + 2];
    n3 = weekday[d.getDay() + 3];
    n4 = weekday[d.getDay() + 4];
  }
  document.querySelector(".first__dayname").innerHTML = n;
  document.getElementById("n1").innerHTML = n1;
  document.getElementById("n2").innerHTML = n2;
  document.getElementById("n3").innerHTML = n3;
  document.getElementById("n4").innerHTML = n4;
}
