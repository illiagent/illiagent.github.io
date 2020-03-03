 let timer;
document.getElementById('button').addEventListener("click", () => {
	let cityName;
        cityName = document.getElementById('form').value;
        let url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + `${cityName}` + "&appid=7ef5bbf172b6b63ecedaa4b032ac7887";

	    function autoRefresh() {
	
clearTimeout(timer);
        
        fetch(url)
            .then(function(resp) { return resp.json() })
            .then(function(data) {
                console.log(data);
                document.querySelector('.condition').innerHTML = data.weather[0].description;
                document.querySelector('.city_name').innerHTML = data.name.toUpperCase();
                document.querySelector('.temperature').innerHTML = Math.round((data.main.temp - 273));
                let getSrcIcon = data.weather[0].icon;
                newSrc = "https://openweathermap.org/img/wn/" + `${getSrcIcon}` + "@2x.png";
                document.querySelector('.icon').setAttribute('src', newSrc)
            })
            .catch();
        timer = setTimeout(autoRefresh, 2000);
    }
    autoRefresh();
  window.onload = setInterval(clock, 1000);

    function clock() {
        let d = new Date();
        let time = d.getTime();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        let date = d.getDate();
        let month = d.getMonth();
        let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        month = monthArr[month];
        document.querySelector(".date").innerHTML = month + "<br>" + date + "<br>" +
            hours + ":" + minutes + ":" + seconds;
    }
   })
