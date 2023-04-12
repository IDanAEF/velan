import getAllUrlParams from "./getParams";

const catalog = () => {
    let params = getAllUrlParams();

    function getChilds(category = params['category']) {
        let out = {};

        cats.forEach((key, item) => {
            if ((Array.isArray(item['parent']) && item['parent'].indexOf(category) != -1) || item['parent'] == category) {
                out[key] = item;
            }
        });

        return out;
    }

    function getProducts(category = params['category'], newer = false) {
        let out = {};

        if (newer) {
            prods.forEach((key, item) => {
                if (item['new']) {
                    let currDop = Array.isArray(item['category']) ? cats[item['category'][0]]['dop'] : cats[item['category']]['dop'];

                    if (!out[currDop]) out[currDop] = {};

                    out[currDop][key] = item;
                }
            });
        } else {
            prods.forEach((key, item) => {
                if ((Array.isArray(item['category']) && item['category'].indexOf(category) != -1) || item['category'] == category) {
                    out[key] = item;
                }
            });
        }

        return out;
    }

    try {
        //Вывод категорий и продуктов
        const catsOutput = document.querySelectorAll('[data-out-cats]');

        catsOutput && catsOutput.forEach(output => {
            let iter = 0,
                walks = output.getAttribute('data-out-cats');
            
            for (let i = 0; i < catsKeys.length; i++) {
                let id = catsKeys[i];

                if (walks > 0 && iter >= walks) break;
                if (cats[id]['parent']) continue;

                if (cats[id]['descr'].indexOf("\n") != -1) cats[id]['descr'] = cats[id]['descr'].replace("\n", "<br>");

                output.innerHTML += output.getAttribute('data-temp') || output.getAttribute('data-temp') == 'production' ? `
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

                iter++;
            }
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default catalog;