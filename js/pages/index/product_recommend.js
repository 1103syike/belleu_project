document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: '服飾-1', price: '599元', discount: '65%' },
        { id: 2, name: '服飾-2', price: '629元', discount: '65%' },
        { id: 3, name: '服飾-3', price: '549元', discount: '65%' },
        { id: 4, name: '服飾-4', price: '689元', discount: '65%' },
        { id: 5, name: '服飾-5', price: '599元', discount: '65%' },
        { id: 6, name: '服飾-6', price: '599元', discount: '65%' },
        { id: 7, name: '服飾-7', price: '599元', discount: '65%' },
        { id: 8, name: '服飾-8', price: '599元', discount: '65%' },
        { id: 9, name: '服飾-9', price: '599元', discount: '65%' },
        { id: 10, name: '服飾-10', price: '599元', discount: '65%' },
        { id: 11, name: '服飾-11', price: '599元', discount: '65%' },
        { id: 12, name: '服飾-12', price: '599元', discount: '65%' },
        { id: 13, name: '服飾-13', price: '599元', discount: '65%' },
        { id: 14, name: '服飾-14', price: '599元', discount: '65%' },
    ];

    const product_list = document.getElementsByClassName('product_recommend_list')[0]

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
            <li class="product_card" data-id="${p.id}">
                <a class="product_card_link" href="product.html">
                    <img class="product_card_img_original" src='../image/products/product_card_img(${p.id}-2).png'>
                    <img class="product_card_img_hover" src='../image/products/product_card_img(${p.id}-1).png'>
                    <div class="product_card_img_mask"></div>
                    <p class="product_card_decorate">現在購買</p>
                    <p class="product_card_name">${p.name}</p>
                    <p class="product_card_price">
                        <span class="product_card_price_discount">${p.discount}</span>
                        <span class="product_card_price_price">${p.price}</span>
                    </p>
                </a>
            </li>
        `).join('');

        const productCards = document.getElementsByClassName('product_card')
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
    const pagination_placer = document.getElementsByClassName('product_recommend_list_pagination_placer')[0]

    for (let i = 0; i < pageNumber; i++) {
        const pagination = document.createElement("div");
        pagination.innerHTML = i + 1;
        pagination_placer.appendChild(pagination);
        pagination.classList.add('pagination_style')
    }


    listProduct()
    const pagination = document.getElementsByClassName("pagination_style");
    pagination[page - 1].classList.add('active')

    for (let i = 0; i < pagination.length; i++) {
        pagination[i].addEventListener('click', () => {
            page = i + 1;
            renewClass()

        });
    }

    function renewClass() {
        for (let i = 0; i < pageNumber; i++) {
            pagination[i].classList.remove('active')
        }
        pagination[page - 1].classList.add('active')
        listProduct();
    }

    const prev = document.getElementsByClassName('product_recommend_list_pagination_button_prev')[0]
    prev.addEventListener('click', () => {
        if (page > 1) {
            page--;
            renewClass()
        }
    });
    const next = document.getElementsByClassName('product_recommend_list_pagination_button_next')[0]

    next.addEventListener('click', () => {
        if (page < pageNumber) {
            page++
            renewClass()
        }
    })


})