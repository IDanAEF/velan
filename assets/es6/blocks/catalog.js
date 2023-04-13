import getAllUrlParams from "./getParams";

const catalog = () => {
    let params = getAllUrlParams();

    function findInTitle(title, string) {
        let stringArr = string.split(' ');

        stringArr = stringArr.filter(n => n);

        if (title.indexOf(string) != -1 || stringArr.every(item => title.indexOf(item) != -1)) 
            return true;

        // if (stringArr.some(item => title.indexOf(item) != -1))
        //     return true;

        return false;
    }

    function getChilds(category = params['category']) {
        let out = {};

        if (category)
            for (var key in cats) {
                if ((Array.isArray(cats[key]['parent']) && cats[key]['parent'].indexOf(category) != -1) || cats[key]['parent'] == category) {
                    out[key] = cats[key];
                }
            }

        return out;
    }

    function getProducts(category = params['category'], newer = params['newer'], string = params['search-string']) {
        let out = {};

        if (!newer && !string && !category) return out;

        if (newer) {
            for (var key in prods) {
                if (prods[key]['new']) {
                    let currDop = Array.isArray(prods[key]['category']) ? cats[prods[key]['category'][0]]['dop'] : cats[prods[key]['category']]['dop'];

                    if (!out[currDop]) out[currDop] = {};

                    out[currDop][key] = prods[key];
                }
            }
        } else if (string) {
            let decode = decodeURIComponent(string).replace(/\+/g, ' ');

            document.querySelector('#search').value = decode;

            for (var key in prods) {
                if (findInTitle(prods[key]['title'].toLowerCase(), decode.toLowerCase())) {
                    let currDop = Array.isArray(prods[key]['category']) ? cats[prods[key]['category'][0]]['dop'] : cats[prods[key]['category']]['dop'];

                    if (!out[currDop]) out[currDop] = {};

                    out[currDop][key] = prods[key];
                }
            }
        } else {
            for (var key in prods) {
                if ((Array.isArray(prods[key]['category']) && prods[key]['category'].indexOf(category) != -1) || prods[key]['category'] == category) {
                    out[key] = prods[key];
                }
            }
        }

        return out;
    }

    function getCatsTemp(id, temp = '') {
        return temp == 'production' ? `
        <article class="production__item">
            <a href="./catalog.html?category=${id}" class="production__item-link">
                <img src="${cats[id]['image']}" alt="${cats[id]['title']}" class="production__item-image">
            </a>
            <div class="production__item-text">
                <h3 class="production__item-title text_fz22 text_fw700 text_blue">
                    <a href="./catalog.html?category=${id}">${cats[id]['title']}</a>
                </h3>
                <div class="production__item-descr text_fz20 text_gray">${cats[id]['descr']}</div>
            </div>
        </article>
        ` : `
        <a href="./catalog.html?category=${id}" class="main__promo-links-item">
            <div class="box">
                <h4>${cats[id]['title']}</h4>
                <img src="${cats[id]['image']}" alt="${cats[id]['title']}">
            </div>
        </a>
        `;
    }
    
    function getProdTemp(id) {
        return `
        <a href="${prods[id]['docs']}" target="_blank" class="catalog__item-row">
            <div class="catalog__td">
                <img src="${prods[id]['image']}" alt="${prods[id]['title'] ? prods[id]['title'] : '-'}">
            </div>
            <div class="catalog__td">${prods[id]['title'] ? prods[id]['title'] : '-'}</div>
            <div class="catalog__td">${prods[id]['protection'] ? prods[id]['protection'] : '-'}</div>
            <div class="catalog__td">${prods[id]['ip'] ? prods[id]['ip'] : '-'}</div>
            <div class="catalog__td">${prods[id]['dop'] ? prods[id]['dop'] : '-'}</div>
        </a>
        `;
    }

    function outProducts(items = {}, dop = '') {
        const output = document.querySelector('.catalog__place');

        let isEmpty = Object.keys(items).length === 0;

        if (!output || isEmpty) {
            document.querySelector('[data-out-cats]').innerHTML = "Нет элементов";
            return;
        }


        document.querySelector('[data-out-cats]').style.display = 'none';

        let table = document.createElement('div');
        table.className = "catalog__items text_fz20";
        table.innerHTML = `
        <div class="catalog__item-row head text_fw700 text_center">
            <div class="catalog__td">Фото</div>
            <div class="catalog__td">Название</div>
            <div class="catalog__td">Степень взрывозащиты</div>
            <div class="catalog__td">IP</div>
            <div class="catalog__td dop">${dop ? dop : cats[params['category']]['dop']}</div>
        </div>
        `;

        let keys = Object.keys(items).reverse();

        for (let i = 0; i < keys.length; i++) {
            let id = keys[i];

            if (prods[id]['protection'].indexOf("\n") != -1) prods[id]['protection'] = prods[id]['protection'].replace("\n", "<br>");

            table.innerHTML += getProdTemp(id);
        }

        output.append(table);
    }

    function outCats(items = {}) {
        const output = document.querySelector('[data-out-cats]');
        
        let isEmpty = Object.keys(items).length === 0;

        if (!output) return;

        let iter = 0,
            walks = output.getAttribute('data-out-cats'),
            keys = !isEmpty ? Object.keys(items).reverse() : catsKeys;
        
        for (let i = 0; i < keys.length; i++) {
            let id = keys[i];

            if (walks > 0 && iter >= walks) break;
            if (isEmpty && cats[id]['parent']) continue;

            if (cats[id]['descr'].indexOf("\n") != -1) cats[id]['descr'] = cats[id]['descr'].replace("\n", "<br>");

            output.innerHTML += getCatsTemp(id, output.getAttribute('data-temp'));

            iter++;
        }
    }

    try {
        const breadcrumbs = document.querySelector('.catalog__breadcrumbs');

        let childs = getChilds(),
            products = getProducts();

        if (params['category'] && Object.keys(childs).length > 0) {
            outCats(childs);
        } else if (params['category']) {
            outProducts(products);
        } else if (params['newer'] || params['search-string']) {
            for (var key in products) {
                outProducts(products[key], key);
            }
        }
        else outCats();

        if (breadcrumbs && params['category']) {
            let links = '<a href="./index.html">Главная</a><img src="./assets/images/svg/gray_bread.svg" alt=""><a href="./catalog.html">Каталог</a>';

            if (cats[params['category']]['parent']) {
                let parId = Array.isArray(cats[params['category']]['parent']) ? cats[params['category']]['parent'][0] : cats[params['category']]['parent'];

                links += `<img src="./assets/images/svg/gray_bread.svg" alt=""><a href="./catalog.html?category=${parId}">${cats[parId]['title']}</a>`;
            }

            links += `<img src="./assets/images/svg/burg_arrow.svg" alt=""><span>${cats[params['category']]['title']}</span>`;

            breadcrumbs.innerHTML = links;
        } else if (breadcrumbs && (params['newer'] || params['search-string'])) {
            breadcrumbs.innerHTML = `<a href="./index.html">Главная</a><img src="./assets/images/svg/gray_bread.svg" alt=""><a href="./catalog.html">Каталог</a><img src="./assets/images/svg/burg_arrow.svg" alt=""><span>${params['newer'] ? 'Новинки' : 'Поиск'}</span>`;
        }
    } catch (e) {
        console.log(e.stack);
    }
}

export default catalog;