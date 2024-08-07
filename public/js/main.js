const cityName = document.querySelector("#cityName");
const submitBtn = document.querySelector("#submitBtn");
const city_name = document.querySelector("#city_name");
const temp = document.querySelector("#temp");

const temp_status = document.querySelector("#temp_status");
const tempOutp = document.querySelector(".middle_layer");

// --------------- date and day
const day = document.querySelector("#day");
const currDate = document.querySelector("#today_date");


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === '') {
        city_name.innerText = `write the name before search`;
        // tempOutp.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.weatherapi.com/v1/current.json?key=1e15bd8c2c3e44f7ac262846240208&q=%27${cityVal}%27&aqi=no`;

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${data.location.name}, ${data.location.country.slice(0, 2)}`;
            temp.innerText = `${data.current.temp_c} °C`;
            // const icon = data.current.temp_c.condition.icon;
            // temp_status.innerHTML = icon;
            tempOutp.style.visibility = "visible"
        } catch {
            city_name.innerText = `write the city name properly `;
            // tempOutp.classList.add('data_hide');

        }

    }

}

const getCurrentDay = () => {

    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let currentTime = new Date();
    let crrDay = weekday[currentTime.getDay()];
    day.innerText = crrDay;
    return day;
}

const getCurretdate = () => {
    const d = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let m = d.getMonth();
    let month = months[m];

    let date = d.getDate();

    date = date < 10 ? '0' + date : date
    let fDate = `${date} ${month}`
    currDate.innerText = fDate;

    return fDate;
}

getCurretdate()
getCurrentDay();
submitBtn.addEventListener("click", getInfo);
