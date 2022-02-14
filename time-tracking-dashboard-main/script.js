const cardsTitleContent = document.querySelectorAll('[data-card-content] .card-title-content')
const cardsTime = document.querySelectorAll('[data-card-content] .card-time')
const previousCardTime = document.querySelectorAll('.card-previous-time')
const btnDaily = document.getElementById('daily')
const btnWeekly = document.getElementById('weekly')
const btnMonthly = document.getElementById('monthly')


btnDaily.addEventListener('click', ()=>{
    setCardTime('daily')
    setPreviousCardTime('daily')
})

btnWeekly.addEventListener('click', ()=>{
    setCardTime('weekly')
    setPreviousCardTime('weekly')
})

btnMonthly.addEventListener('click', ()=>{
    setCardTime('monthly')
    setPreviousCardTime('monthly')
})


window.onload = function () {
    setCardTitles()
    setCardTime('daily')
    setPreviousCardTime('daily')
}

const jsonContent = [];
fetch("./data.json")
.then(function(resp){
    return resp.json();
 })
.then(function(data){
    data.forEach(element => {
        jsonContent.push(element)
    });;
});


function setCardTitles(){
    let index = 0;
    cardsTitleContent.forEach(element => {
        element.innerHTML = jsonContent[index].title
        index++
    })
}

function setCardTime(timeframe) {
    let index = 0;
    cardsTime.forEach(element => {
        if(timeframe === 'daily') {
            document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)'
            document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)'
            document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)'
            element.innerHTML = `${jsonContent[index].timeframes.daily.current}hrs`

        } else if (timeframe === 'weekly') {
            element.innerHTML = `${jsonContent[index].timeframes.weekly.current}hrs`
            document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)'
            document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)'
            document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)'
        } else if (timeframe === 'monthly') {
            element.innerHTML = `${jsonContent[index].timeframes.monthly.current}hrs`
            document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)'
            document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)'
            document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)'
        }
        index++
    })
}

function setPreviousCardTime (timeframe) {
    let index = 0
    previousCardTime.forEach(element =>{
        if(timeframe === 'daily') {
            element.innerHTML = `Last Week - ${jsonContent[index].timeframes.daily.previous}hrs`

        } else if (timeframe === 'weekly') {
            element.innerHTML = `Last Week - ${jsonContent[index].timeframes.weekly.previous}hrs`
        } else if (timeframe === 'monthly') {
            element.innerHTML = `Last Week - ${jsonContent[index].timeframes.monthly.previous}hrs`
        }
        index++
    })

}