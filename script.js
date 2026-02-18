const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author')
const city = document.querySelector('.city');
const currentTime = document.querySelector('.current-time')
const someInf = document.querySelector('.some-inf')
const showBtn = document.querySelector('.show-btn')
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
    console.log(dataF);
    city.innerHTML = `IN ${dataF.data.location.country.alpha2} , ${dataF.data.location.region.name}`
    currentTime.innerHTML = dataF.data.timezone.current_time.split("T")[1].slice(0,5);


}

getLocation()

showBtn.addEventListener('click',()=>{
  someInf.classList.toggle('hide')
})
