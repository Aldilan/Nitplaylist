//menu function
const menuPageParent = document.getElementById('menuPageParent')
const menuPage = document.getElementById('menuPage')
const showMenuButton = document.getElementById('showMenuButton')
const closeMenuButton = document.getElementById('closeMenuButton')

showMenuButton.addEventListener('click',function (e) {
    menuPageParent.classList.remove('invisible')
    menuPage.classList.remove('opacity-0')
    menuPage.classList.add('opacity-100')
    showMenuButton.classList.remove('invert')
    showMenuButton.classList.remove('brightness-0')
})

closeMenuButton.addEventListener('click', function (e) {
    menuPageParent.classList.add('invisible')
    menuPage.classList.add('opacity-0')
    menuPage.classList.remove('opacity-100')
    showMenuButton.classList.add('invert')
    showMenuButton.classList.add('brightness-0')
})

//clock function
function getTimeNow() {
    let dateNow = new Date()
    let colon = ':'
    let hourNow = dateNow.getHours()
    let meridiem = 'AM'

    if (hourNow > 12) {
        hourNow -= 12
        meridiem = 'PM'
    }

    let hourNow2
    if (hourNow < 10) {
        hourNow2 = '0'+hourNow
    }else {
        hourNow2 = hourNow
    }

    let minuteNow = dateNow.getMinutes()
    if (minuteNow < 10) {
        minuteNow = '0'+minuteNow
    }
    
    let timeNowArray = [hourNow2,colon,minuteNow,meridiem]
    const timeNowpage = document.querySelectorAll('#timeNowPage li')
    for (let i = 0; i < timeNowArray.length; i++) {
        timeNowpage[i].innerHTML = timeNowArray[i];   
    }
}

setInterval(getTimeNow, 1000);