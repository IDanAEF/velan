/* 
    Модель данных для категорий продуктов:
    var cats = {
        1(id категории): {
            "title": 'Название категории',
            "parent": id родительской категории (Если указать этот параметр, 
                то категория станет подкатегорией. Значением можно поставить
                обычное число, или массив [23, 32, 1], если есть необходимость
                добавить несколько родительских категорий),
            "descr": 'Описание',
            "image": 'Ссылка на фото' (Указывать с точкой и слэшем в начале
                './assets/images/image1.png'
                './uploads/upload.jpg
                и т.п.),
            "dop": 'Название последней колонки' (Так как последние колонки у некоторых продуктов разные, решил обозначить таким образом)
            
        },
        2: {
            ...
        },
        3: {
            ...
        }
    };

    Модель данных для продуктов
    var prods = {
        1(id продукта): {
            "title": 'Название',
            "category": id категории (Можно указать число или массив [23, 32, 1]),
            "new": true или 1 - да/false или 0 - нет (Показывать в новинках?)
            "image": Ссылка на фото (Формат тот же, что описан выше),
            "docs": Сслыка на pdf/docx и т.п. (Формат тот же, что описан выше),
            "protection": 'Степень взрывозащиты',
            "ip": 'IP',
            "dop": 'Значение последней колонки для категории'
        },
        2: {
            ...
        },
        3: {
            ...
        }
    };
*/

var cats = {
    1: {
        "title": "КРУВ",
        "parent": "",
        "descr": "(комплектно-распределительные взрывозащищенные устройства)",
        "image": "./assets/images/production/prod12.png",
        "dop": "Номинальное напряжение"
    },
    2: {
        "title": "Датчики",
        "parent": "",
        "descr": "(датчики освещённости, микроволновый датчик и магнитный выключатель)",
        "image": "./assets/images/production/prod5.png",
        "dop": "Номинальное напряжение"
    },
    3: {
        "title": "Комплексные решения",
        "parent": "",
        "descr": "(комплексные решения могут комплектоваться по требованию заказчика различными видами и типоразмерами любых изделий компании)",
        "image": "./assets/images/production/prod11.png",
        "dop": "Номинальное напряжение"
    },
    4: {
        "title": "Ex - компоненты",
        "parent": "",
        "descr": "(контрольно-измерительные приборы, индикаторы, блоки контактные, элементы кнопочные, микропереключатели)",
        "image": "./assets/images/production/prod3.png",
        "dop": "Номинальное напряжение"
    },
    5: {
        "title": "Оболочки, фитинги",
        "parent": "",
        "descr": "(различные материалы изготовления, множество габаритов для любой зоны взрывозащиты, возможность комплектации смотровым окном; взрывозащищенные)",
        "image": "./assets/images/production/prod4.png",
        "dop": "Номинальное напряжение"
    },
    6: {
        "title": "Кабельные вводы",
        "parent": "",
        "descr": "(для бронированного/небронированного кабеля, трубной проводки, различные материалы изготовления, диапозон кабелей от 5 до 112 мм, врезные и накладные, внутренняя и наружная резьба различных типов; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod9.png",
        "dop": "Номинальное напряжение"
    },
    7: {
        "title": "Соединители",
        "parent": "",
        "descr": "(номинальный ток от 16 до 400А, возможность встраивания в различные оболочки, комплектация автоматическим выключателем и переключателем; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod2.png",
        "dop": "Номинальное напряжение"
    },
    8: {
        "title": "Выключатели",
        "parent": "",
        "descr": "(клавишные, путевые, концевые, различные материалы изготовления корпуса, различные типы приводов; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod1.png",
        "dop": "Номинальное напряжение"
    },
    9: {
        "title": "Пускатели и устройства управления",
        "parent": "",
        "descr": "(возможность местного и дистанционного управления, различные виды защиты, наличие световой сигнализации, возможность реверсивного исполнения, номинальный ток до 250А, номинальное напряжение до 1 140В; взрывозащищеные)",
        "image": "./assets/images/production/prod19.png",
        "dop": "Номинальное напряжение"
    },
    10: {
        "title": "Светофоры",
        "parent": "",
        "descr": "(светодиодный источник света, 5 вариантов свечения модулей, возможность комплектации козырьком, напряжение питания 12-220В, 1 и 2 группа электрооборудования, взрывозащищенные)",
        "image": "./assets/images/production/prod8.png",
        "dop": "Номинальное напряжение"
    },
    11: {
        "title": "Табло информационное",
        "parent": "",
        "descr": "(световые, свето-звуковые, со статичной надписью или динамически-меняющиеся, различные крепления, комплектация аккумулятором, возможность программирования надписей; взрывозащищенные)",
        "image": "./assets/images/production/prod18.png",
        "dop": "Номинальное напряжение"
    },
    12: {
        "title": "Посты сигнализации",
        "parent": "",
        "descr": "(световые, звуковые, свето-звуковые, различные цвета, 4 типа креплений; взрывозащищенные)",
        "image": "./assets/images/production/prod16.png",
        "dop": "Номинальное напряжение"
    },
    13: {
        "title": "Посты управления кнопочные",
        "parent": "",
        "descr": "(кнопки с фиксацией и без, пьезокнопки, кнопки с индикацией, индикаторы различных цветов, комплектация необходимыми измерительными приборами; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod7.png",
        "dop": "Номинальное напряжение"
    },
    14: {
        "title": "Пакетные переключатели",
        "parent": "",
        "descr": "(реализация любой схемы комплектации, корпус алюминий/пластик, номинальный ток до 63А; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod15.png",
        "dop": "Номинальное напряжение"
    },
    15: {
        "title": "Ящики, коробки зажимов соединительные и разветвительные",
        "parent": "",
        "descr": "(свободная комплектация, высоковольтные/низковольтные, различные материалы исполнения для подключения кабелей круглого и плоского сечения; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod14.png",
        "dop": "Номинальное напряжение"
    },
    16: {
        "title": "Модули коммутации",
        "parent": "",
        "descr": "(модульная комплектация, количество циклов срабатывания до 10 000; взрывозащищенные)",
        "image": "./assets/images/production/prod6.png",
        "dop": "Номинальное напряжение"
    },
    17: {
        "title": "Щитки освещения",
        "parent": "",
        "descr": "(модульная конструкция, цветовая индикация, возможность комплектации вилками и розетками; взрывозащищенные, общепромушленные)",
        "image": "./assets/images/production/prod17.png",
        "dop": "Номинальное напряжение"
    },
    18: {
        "title": "Шкафы управления и сигнализации, щитовое оборудование",
        "parent": "",
        "descr": "(4 вида оболочек из различных  материалов, 32 габарита, свободная комплектация; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod10.png",
        "dop": "Напряжение питания"
    },
    19: {
        "title": "Осветительное оборудование",
        "parent": "",
        "descr": "(светильники, прожекторы - светодиодные, \nламповые; взрывозащищенные, общепромышленные)",
        "image": "./assets/images/production/prod13.png",
        "dop": "Световая отдача"
    },
    20: {
        "title": "Взрывозащищенное осветительное оборудование",
        "parent": 19,
        "descr": "",
        "image": "./assets/images/production/prod13.png",
        "dop": "Световая отдача"
    },
    21: {
        "title": "Общепромышленные светильники",
        "parent": 19,
        "descr": "",
        "image": "./assets/images/production/prod20.png",
        "dop": "Световая отдача"
    }
};

var prods = {
    1: {
        "title": 'Светильник ВЭЛАН 11',
        "category": 20,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>120Лм/Вт'
    },
    2: {
        "title": 'Светильник ВЭЛАН 21',
        "category": 20,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": ''
    },
    3: {
        "title": 'Светильник ВЭЛАН 22',
        "category": 20,
        "new": 0,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    4: {
        "title": 'Светильник ВЭЛАН 22',
        "category": 20,
        "new": 0,
        "image": './assets/images/production/prod2.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    5: {
        "title": 'Светильник ВЭЛАН 22',
        "category": 20,
        "new": 0,
        "image": './assets/images/production/prod14.png',
        "docs": '',
        "protection": '1Ех е II Т6(Т5/T4/T3) Gb, \nРП Ex e I Mc,\n0Ex ia IIA Т6(Т5/T4/T3) Ga X, \n0Ex ia IIB Т6(Т5/T4/T3) Ga X,\n0Ex ia IIC Т6(Т5/T4/T3) Ga X, \n1Ex ib IIA Т6(Т5/T4/T3) Gb X,\n1Ex ib IIB Т6(Т5/T4/T3) Gb X, \n1Ex ib IIC Т6(Т5/T4/T3) Gb X,\n2Ex ic IIA Т6(Т5/T4/T3) Gc X, \n2Ex ic IIB Т6(Т5/T4/T3) Gc X,\n2Ex ic IIC Т6(Т5/T4/T3) Gc X, \nРО Ex ia I Ma X,\nEx tb IIIC T85°C(T100°C/T135°C/\nT200°C) Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    6: {
        "title": 'Светильник ВЭЛАН 22',
        "category": 20,
        "new": 0,
        "image": './assets/images/production/prod17.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    7: {
        "title": 'Светильник ВЭЛАН 28',
        "category": 20,
        "new": 1,
        "image": './assets/images/production/prod19.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    8: {
        "title": 'Щиток ВЭЛАН 11',
        "category": 17,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>120Лм/Вт'
    },
    9: {
        "title": 'Щиток ВЭЛАН 21',
        "category": 17,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": ''
    },
    10: {
        "title": 'Щиток ВЭЛАН 22',
        "category": 17,
        "new": 0,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    11: {
        "title": 'Щиток ВЭЛАН 22',
        "category": 17,
        "new": 0,
        "image": './assets/images/production/prod2.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    12: {
        "title": 'Щиток ВЭЛАН 22',
        "category": 17,
        "new": 0,
        "image": './assets/images/production/prod14.png',
        "docs": '',
        "protection": '1Ех е II Т6(Т5/T4/T3) Gb, \nРП Ex e I Mc,\n0Ex ia IIA Т6(Т5/T4/T3) Ga X, \n0Ex ia IIB Т6(Т5/T4/T3) Ga X,\n0Ex ia IIC Т6(Т5/T4/T3) Ga X, \n1Ex ib IIA Т6(Т5/T4/T3) Gb X,\n1Ex ib IIB Т6(Т5/T4/T3) Gb X, \n1Ex ib IIC Т6(Т5/T4/T3) Gb X,\n2Ex ic IIA Т6(Т5/T4/T3) Gc X, \n2Ex ic IIB Т6(Т5/T4/T3) Gc X,\n2Ex ic IIC Т6(Т5/T4/T3) Gc X, \nРО Ex ia I Ma X,\nEx tb IIIC T85°C(T100°C/T135°C/\nT200°C) Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    13: {
        "title": 'Щиток ВЭЛАН 22',
        "category": 17,
        "new": 0,
        "image": './assets/images/production/prod17.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    14: {
        "title": 'Щиток ВЭЛАН 28',
        "category": 17,
        "new": 1,
        "image": './assets/images/production/prod19.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    15: {
        "title": 'Шкаф ВЭЛАН 11',
        "category": 18,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>120Лм/Вт'
    },
    16: {
        "title": 'Шкаф ВЭЛАН 21',
        "category": 18,
        "new": 1,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1Ex d IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": ''
    },
    17: {
        "title": 'Шкаф ВЭЛАН 22',
        "category": 18,
        "new": 0,
        "image": './assets/images/production/prod20.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    18: {
        "title": 'Шкаф ВЭЛАН 22',
        "category": 18,
        "new": 0,
        "image": './assets/images/production/prod2.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    19: {
        "title": 'Шкаф ВЭЛАН 22',
        "category": 18,
        "new": 0,
        "image": './assets/images/production/prod14.png',
        "docs": '',
        "protection": '1Ех е II Т6(Т5/T4/T3) Gb, \nРП Ex e I Mc,\n0Ex ia IIA Т6(Т5/T4/T3) Ga X, \n0Ex ia IIB Т6(Т5/T4/T3) Ga X,\n0Ex ia IIC Т6(Т5/T4/T3) Ga X, \n1Ex ib IIA Т6(Т5/T4/T3) Gb X,\n1Ex ib IIB Т6(Т5/T4/T3) Gb X, \n1Ex ib IIC Т6(Т5/T4/T3) Gb X,\n2Ex ic IIA Т6(Т5/T4/T3) Gc X, \n2Ex ic IIB Т6(Т5/T4/T3) Gc X,\n2Ex ic IIC Т6(Т5/T4/T3) Gc X, \nРО Ex ia I Ma X,\nEx tb IIIC T85°C(T100°C/T135°C/\nT200°C) Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    20: {
        "title": 'Шкаф ВЭЛАН 22',
        "category": 18,
        "new": 0,
        "image": './assets/images/production/prod17.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
    21: {
        "title": 'Шкаф ВЭЛАН 28',
        "category": 18,
        "new": 1,
        "image": './assets/images/production/prod19.png',
        "docs": '',
        "protection": '1 Ex d e IIC T6(T5,T4,T3) Gb, \nEx tb IIIC T80°C...T195°C Db',
        "ip": 'IP65/66/67',
        "dop": '>110Лм/Вт'
    },
}

var catsKeys = Object.keys(cats).reverse(),
    prodsKeys = Object.keys(prods).reverse();