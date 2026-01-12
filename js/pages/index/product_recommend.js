document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: '巴黎字母T恤', price: '599元', discount: '69%' },
        { id: 2, name: '學院風鈕扣百褶裙', price: '629元', discount: '49%' },
        { id: 3, name: '夏季抽褶背心襯衫', price: '549元', discount: '49%' },
        { id: 4, name: '條紋緊身胸衣背心', price: '689元', discount: '69%' },
        { id: 5, name: '簡約無袖節慶短上衣', price: '599元', discount: '59%' },
        { id: 6, name: '條紋荷葉邊長連身裙', price: '599元', discount: '69%' },
        { id: 7, name: '喇叭形迷你一件式', price: '599元', discount: '59%' },
        { id: 8, name: '百褶迷你裙', price: '599元', discount: '79%' },
        { id: 9, name: '五月百褶長裙', price: '599元', discount: '69%' },
        { id: 10, name: '無領金色紐帶夾克', price: '599元', discount: '69%' },
        { id: 11, name: '舒適連帽繫帶風衣背心', price: '599元', discount: '59%' },
        { id: 12, name: '短版針織緊身胸衣', price: '599元', discount: '79%' },
        { id: 13, name: '短版紐帶氨綸短袖上衣', price: '599元', discount: '69%' },
        { id: 14, name: '綠色修身毛毛外套', price: '599元', discount: '49%' },
    ];

    const product_list = document.getElementsByClassName('recommend__list')[0]

    // 一頁最多12筆
    const per = 12;

    //預設第一頁
    let page = 1

    let start = (page - 1) * per;

    let pageData = products.slice(start, start + per);

    // 顯示全部資料
    function listProduct() {
        start = (page - 1) * per;
        pageData = products.slice(start, start + per);
        product_list.innerHTML = pageData.map(p => `
            <li class="product-card " data-id="${p.id}">
                <a class="product-card__link" href="html/product.html">
                    <img class="product-card__img product-card__img--front" src='./image/products/product_card_img(${p.id}-2).png'>
                    <img class="product-card__img product-card__img--back" src='./image/products/product_card_img(${p.id}-1).png'>

                    <div class="product-card__mask"></div>
                    <p class="product-card__cta">現在購買</p>
                    <p class="product-card__name">${p.name}</p>
                    <p class="product-card__price">
                        <span class="product-card__discount">${p.discount}</span>
                        <span class="product-card__amount">${p.price}</span>
                    </p>
                </a>
            </li>
        `).join('');

        const productCards = document.getElementsByClassName('product-card')
        for (let i = 0; i < productCards.length; i++) {
            productCards[i].addEventListener('click', () => {
                localStorage.setItem("product_id", productCards[i].dataset.id);
            })
        }

        if (pageData.length < 12) {
            console.log('僅有', pageData.length, '筆')
            for (let i = 0; i < 12 - pageData.length; i++) {
                const empty = document.createElement("li");
                product_list.appendChild(empty);
                empty.style.width = '230px';
                empty.style.height = '292px';
                empty.style.userSelect = 'none';

            }
        }
    }


    const pageNumber = Math.ceil(products.length / per)
    const pagination_placer = document.getElementsByClassName('recommend__dots')[0]

    for (let i = 0; i < pageNumber; i++) {
        const pagination = document.createElement("div");
        pagination.innerHTML = i + 1;
        pagination_placer.appendChild(pagination);
        pagination.classList.add('recommend__dot')
    }


    listProduct()
    const pagination = document.getElementsByClassName("recommend__dot");
    pagination[page - 1].classList.add('recommend__dot--active')

    for (let i = 0; i < pagination.length; i++) {
        pagination[i].addEventListener('click', () => {
            page = i + 1;
            renewClass()

        });
    }

    function renewClass() {
        for (let i = 0; i < pageNumber; i++) {
            pagination[i].classList.remove('recommend__dot--active')
        }
        pagination[page - 1].classList.add('recommend__dot--active')
        listProduct();
    }

    const prev = document.getElementsByClassName('recommend__btn--prev')[0]
    prev.addEventListener('click', () => {
        if (page > 1) {
            page--;
            renewClass()
        }
    });
    const next = document.getElementsByClassName('recommend__btn--next')[0]

    next.addEventListener('click', () => {
        if (page < pageNumber) {
            page++
            renewClass()
        }
    })


})