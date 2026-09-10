var my = new Date()
my.setHours(0, 0, 0, 0)

var day = my.getDate()
var d = day + ``
var mounth = my.getMonth() + 1
var am = mounth + ``
var Year = my.getFullYear()
var tari = Year + ``
if (d.length < 2) {
    d = `0` + d
}
if (am.length < 2) {
    am = `0` + am
}
var dat = document.querySelector(`.date_inp`)
var dates = `${tari}-${am}-${d}`
var elem = dat.value = dates
var al = document.querySelector(`.alert`);

function happy() {
    var happyDate = new Date(dat.value)
    happyDate.setHours(0, 0, 0, 0)

    var happyYear = happyDate.getFullYear()
    var happyMonthe = happyDate.getMonth() + 1
    var happyDay = happyDate.getDate()

    var oreriQanak = Math.abs(Math.round((my.getTime() - happyDate.getTime()) / 1000 / 3600 / 24))

    var ver = document.querySelector(`.vern`)
    var mas = document.querySelector(`.massage`)

    if (happyDate.getTime() < my.getTime()) {
        ver.innerHTML = `Since you specified your birth date`
        mas.innerHTML = `${oreriQanak} days have passed since your birth date.`
    }
    else if (Year == happyYear && mounth == happyMonthe && day == happyDay) {
        ver.innerHTML = `Happy Birthday!`
        mas.innerHTML = `Today is your birthday. Wishing you all the best!`
    }
    else {
        ver.innerHTML = `Since you selected a future date`
        mas.innerHTML = `${oreriQanak} days are left until your birthday.`
    }

    al.style = `
        display: flex;
    `
}

function f2() {
    al.style = `
        display: none;
    `
}