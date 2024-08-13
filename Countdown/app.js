const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//to alway have 10 day in future
let tempDate = new Date();
let ty = tempDate.getFullYear();
let tm = tempDate.getMonth();
let td= tempDate.getDate();

// let futureDate =  new Date(2024,7,18,8,15,0);
let futureDate =  new Date(ty,tm,td+10,11,30,0);

const year = futureDate.getFullYear();
const day = futureDate.getDay();
const date = futureDate.getDate();
const month = futureDate.getMonth();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent =`giveaway ends on ${weekdays[day]},${date} ${months[month]} ${year} ${hours}:${mins}am  `
// future time in ms
const futureTime = futureDate.getTime();

const getRemanigTime = ()=>{
    const today = new Date().getTime();
    const rt =  futureTime-today;
     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour =  60 * 60 * 1000;
     const oneMins =   60 * 1000;
      //calculate all values
       let days = Math.floor(rt/oneDay);
       let hours = Math.floor((rt % oneDay)/oneHour);
       let minutes = Math.floor((rt % oneHour)/oneMins);
       let seconds = Math.floor((rt%oneMins)/1000);
    //    set values array
       const values = [days,hours,minutes,seconds];
        const format = (item)=>{
              if (item < 10) {
                 item = `0${item}`
              }
              return item;
        }

       items.forEach((item,index)=>{
         item.innerHTML = format(values[index]);
       })
       //when it expires the time line
         if(rt<0){
            clearInterval(countdown);
               deadline.innerHTML = `<h4 class="expired">Sorry,this giveaway is ended</h4>`
         }
}
let countdown = setInterval(getRemanigTime,1000);
getRemanigTime()  ;
