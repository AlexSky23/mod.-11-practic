var gen;
var dat
var monthes = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//window.onload = function()
//{
//    const initPerson = personGenerator.getPerson();
//    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
//};

function gender() {
    gen = Math.ceil(Math.random()*2);
    gen = (gen < 2)? personGenerator.GENDER_MALE : personGenerator.GENDER_FEMALE;
}

document.getElementById('btn_gen').addEventListener('click', function() {
    gender();

// new Date() - сама генерирует правильные даты, т.е. 30 февраля она не позволит написать:
    dat = new Date(personGenerator.randomIntNumber(), personGenerator.randomMont(), personGenerator.randomDay());
    var dat_full = dat.getDate() + " " + monthes[dat.getMonth()] + " " + dat.getFullYear();
    console.log(dat);

    document.getElementById('firstNameOutput').innerText = personGenerator.randomFirstName();
    document.getElementById('twoNameOutput').innerText = personGenerator.randomTwoName();
    document.getElementById('surnameOutput').innerText = personGenerator.randomSurname();
    document.getElementById('birthYearOutput').innerText = dat_full + " г.р.";
    document.getElementById('genderOutput').innerText = gen;
});

document.getElementById('btn_off').addEventListener('click', function() {
    history.go(0);
});