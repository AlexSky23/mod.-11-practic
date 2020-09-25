const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Даниил",
            "id_6": "Егор",
            "id_7": "Михаил",
            "id_8": "Дмитрий",
            "id_9": "Никита",
            "id_10": "Андрей"
        }
    }`,

    firstNameFamaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анастасия",
            "id_2": "Анна",
            "id_3": "Екатерина",
            "id_4": "Тамара",
            "id_5": "Олеся",
            "id_6": "Ксения",
            "id_7": "Елизавета",
            "id_8": "Кристина",
            "id_9": "Виктория",
            "id_10": "Людмила"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 2010, min = 1955) => Math.floor(Math.random() * (max - min + 1) + min),
    randomMont: (max = 12, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    randomDay: (max = 31, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomValue_otch: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(6, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        
            if(gen === "Мужчина"){
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFamaleJson);
        }
    },

     randomSurname: function() {
        if(gen === "Мужчина"){
        return this.randomValue(this.surnameJson);
    }
        else {
            return this.randomValue(this.surnameJson) + "a";
        }
    },

    randomTwoName: function() {
        if(gen === "Мужчина"){
        return this.randomValue_otch(this.firstNameMaleJson) + "ович";
    }
        else {
            return this.randomValue_otch(this.firstNameMaleJson) + "овна";
        }
    },

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        return this.person;
    }
};
