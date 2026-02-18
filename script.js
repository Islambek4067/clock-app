const regionName = document.querySelector('.region-name')
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author')
const city = document.querySelector('.city');
const currentTime = document.querySelector('.current-time')
const someInf = document.querySelector('.some-inf')
const showBtn = document.querySelector('.show-btn');
const dayOfYearEl = document.querySelector('.day-of-year');
const dayOfWeekEl = document.querySelector('.day-of-week');
const weekNumberEl = document.querySelector('.week-number');
const getQuote = async ()=>{
  const res = await fetch('https://api.api-ninjas.com/v2/quotes', {
    
      headers: {
  'X-Api-Key': 'wPK3OzDdhY7i74gfSE9mEvNndXmEwYANNwv5v8Hg'
}
      
    
  });
  const data = await res.json();
  quote.innerHTML = data[0].quote;
  quoteAuthor.innerHTML = data[0].author;

}
getQuote()

const getLocation = async ()=>{
  const res = await fetch("https://api.ipbase.com/v2/info?ip=185.102.119.230&apikey=ipb_live_VUvRM9zk9V4akE704rTzEuQhgpAuK64XKWUaMLeN")
    const dataF = await res.json();
    
   const isoTime = dataF.data.timezone.current_time;
  const date = new Date(isoTime);

  let dayOfWeek = date.getDay();
  if (dayOfWeek === 0) dayOfWeek = 7; 
  dayOfWeekEl.innerHTML = dayOfWeek;

 
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  dayOfYearEl.innerHTML = dayOfYear;

 
  const tempDate = new Date(date);
  tempDate.setHours(0,0,0,0);
  tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7));
  const yearStart = new Date(tempDate.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((tempDate - yearStart) / oneDay) + 1) / 7);
  weekNumberEl.innerHTML = weekNumber;

    city.innerHTML = `IN ${dataF.data.location.country.alpha2} , ${dataF.data.location.region.name}`
    currentTime.innerHTML = dataF.data.timezone.current_time.split("T")[1].slice(0,5);
    regionName.innerHTML = `${dataF.data.timezone.id}`

}


getLocation()

showBtn.addEventListener('click',()=>{
  someInf.classList.toggle('hide')
})
