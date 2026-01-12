document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: 1, name: '巴黎字母T恤',
            desc: '寬鬆休閒版型，選用柔軟親膚棉料，透氣不悶、久穿依然舒適。正面字母印花設計，簡約中帶有法式氛圍，視覺乾淨耐看。下身不論搭配牛仔褲、短裙或寬褲都能輕鬆完成造型，日常、通勤、假日外出都合適。',
            price: { original: '890元', sale: '599元' },
            imagePath: '/image/products/product-1(red).png',
            color: {
                red: {
                    id: 0,
                    name: '紅色',
                    hex: '#B20E30',
                    imagePath: '/image/products/product-1(red).png',
                    Stock: {
                        S: 2,
                        M: 5,
                        L: 0,
                    }
                },
                blue: {
                    id: 1,
                    name: '藍色',
                    hex: '#3B4A6B',
                    imagePath: '/image/products/product-1(blue).png',
                    Stock: {
                        S: 4,
                        M: 1,
                        L: 5,
                    }
                },
                green: {
                    id: 2,
                    name: '綠色',
                    hex: '#23413F',
                    imagePath: '/image/products/product-1(green).png',
                    Stock: {
                        S: 6,
                        M: 9,
                        L: 5,
                    }
                },
                oatmeal: {
                    id: 3,
                    name: '燕麥色',
                    hex: '#E3DBD8',
                    imagePath: '/image/products/product-1(oatmeal).png',
                    Stock: {
                        S: 2,
                        M: 3,
                        L: 5,
                    }
                },
                gray: {
                    id: 4,
                    name: '灰色',
                    hex: '#C1BFC0',
                    imagePath: '/image/products/product-1(gray).png',
                    Stock: {
                        S: 12,
                        M: 5,
                        L: 3,
                    }
                },
            },
            size: {
                S: { id: 0, name: 'S' },
                M: { id: 1, name: 'M' },
                L: { id: 2, name: 'L' }
            }
            ,
            discount: '67%'
        },
        {
            id: 2, name: '學院風鈕扣百褶裙',
            desc: '俐落百褶剪裁，自然修飾腿部線條並拉長比例。正面鈕扣設計增添學院感細節，穿著穩定不易跑位。布料挺度適中，行走間保有線條感，搭配襯衫、針織或短版上衣都能展現清新知性風格。',
            price: { original: '1290元', sale: '629元' },
            discount: '49%'
        },
        {
            id: 3, name: '夏季抽褶背心襯衫',
            desc: '輕薄涼爽布料，夏天穿著不黏膚、透氣舒適。抽褶設計自然修飾身形曲線，背心版型清爽俐落。單穿就有造型感，也可外搭罩衫或西外，從日常到通勤都能輕鬆駕馭。',
            price: { original: '1090元', sale: '549元' },
            discount: '50%'
        },
        {
            id: 4, name: '條紋緊身胸衣背心',
            desc: '貼身剪裁勾勒上身線條，條紋元素在視覺上更顯修身。布料帶有彈性，穿著舒適不緊繃。單穿展現率性性感風格，外搭襯衫或外套又能平衡整體造型，層次感十足。',
            price: { original: '990元', sale: '689元' },
            discount: '70%'
        },
        {
            id: 5, name: '簡約無袖節慶短上衣',
            desc: '短版設計自然拉高腰線，修飾整體比例。布料柔軟且具有彈性，活動自在不受限。簡約外型好搭不挑風格，無論節慶聚會或日常穿搭，都能展現俐落有型的穿著感。',
            price: { original: '990元', sale: '599元' },
            discount: '60%'
        },
        {
            id: 6, name: '條紋荷葉邊長連身裙',
            desc: '細緻條紋搭配荷葉邊下擺，整體線條柔和且富有女人味。長版剪裁修飾身形比例，穿著輕盈不厚重。一件即可完成造型，適合約會、出遊或日常輕鬆穿搭。',
            price: { original: '1290元', sale: '599元' },
            discount: '46%'
        },
        {
            id: 7, name: '喇叭形迷你一件式',
            desc: '喇叭剪裁自然修飾臀腿線條，迷你長度展現俏皮感。布料舒適好活動，穿著貼合卻不緊繃。單穿即可成為造型重點，搭配靴子或球鞋都能呈現不同風格。',
            price: { original: '1090元', sale: '599元' },
            discount: '55%'
        },
        {
            id: 8, name: '百褶迷你裙',
            desc: '高腰百褶設計有效修飾腰部比例，視覺顯腿長。布料輕挺不易變形，行走時保有自然垂墜感。搭配針織、T恤或襯衫皆適合，是日常穿搭的百搭單品。',
            price: { original: '890元', sale: '599元' },
            discount: '67%'
        },
        {
            id: 9, name: '五月百褶長裙',
            desc: '選用垂墜感佳的布料，百褶線條隨步伐自然擺動。長版設計修飾腿型，穿著氣質溫柔。適合搭配簡約上衣或針織單品，通勤、外出都能展現成熟優雅氛圍。',
            price: { original: '1190元', sale: '599元' },
            discount: '50%'
        },
        {
            id: 10, name: '無領金色紐帶夾克',
            desc: '無領剪裁讓整體線條更俐落，金色紐帶細節提升質感層次。布料挺度佳，穿上即有精神。可正式也可休閒，搭配洋裝或褲裝都能輕鬆轉換風格。',
            price: { original: '1590元', sale: '599元' },
            discount: '38%'
        },
        {
            id: 11, name: '舒適連帽繫帶風衣背心',
            desc: '連帽設計增添休閒感，繫帶可自由調整輪廓。風衣材質輕盈防風，背心版型適合層次穿搭。搭配長袖上衣或針織，秋冬過渡季也能實穿。',
            price: { original: '1390元', sale: '599元' },
            discount: '43%'
        },
        {
            id: 12, name: '短版針織緊身胸衣',
            desc: '針織布料柔軟親膚，貼身剪裁展現身形線條。短版設計提升整體比例，單穿或內搭都好看。適合搭配高腰褲或裙款，輕鬆打造率性造型。',
            price: { original: '790元', sale: '599元' },
            discount: '76%'
        },
        {
            id: 13, name: '短版紐帶氨綸短袖上衣',
            desc: '氨綸材質具彈性，穿著貼合卻不緊繃。短版搭配紐帶設計，細節感十足又能自由調整。日常單穿有型，搭配外套也能增加層次。',
            price: { original: '990元', sale: '599元' },
            discount: '60%'
        },
        {
            id: 14, name: '綠色修身毛毛外套',
            desc: '毛毛材質觸感柔軟，穿著保暖不厚重。修身剪裁讓外套不顯臃腫，綠色調增添造型亮點。適合秋冬外出或約會穿搭，保暖同時兼顧時尚感。',
            price: { original: '1790元', sale: '599元' },
            discount: '33%'
        },
    ];


    const id = localStorage.getItem('product_id')
    const product = products[id - 1]
    const productTitle = document.getElementsByClassName("product__title")[0]
    const productPriceSale = document.getElementsByClassName("product__price--sale")[0]
    const productPriceOriginal = document.getElementsByClassName("product__price--original")[0]
    const productDesc = document.getElementsByClassName("product__desc")[0]
    const productImage = document.getElementsByClassName("product__image")[0]
    const colorList = document.getElementsByClassName("color-list")[0]
    const colorListData = Object.values(product.color)
    const sizeList = document.getElementsByClassName("size-list")[0]
    const sizeListData = Object.values(product.size)
    const productStock = document.getElementsByClassName('product__stock')[0]
    const StockListData = Object.values(colorListData[0].Stock)

    localStorage.setItem("所選擇商品顏色", colorListData[0].id);
    localStorage.setItem("所選擇商品尺寸", sizeListData[0].id);
    localStorage.setItem("商品庫存", StockListData[0]);

    productTitle.innerHTML = product.name
    productPriceSale.innerHTML = product.price.sale
    productPriceOriginal.innerHTML = product.price.original
    productDesc.innerHTML = product.desc
    productImage.src = product.imagePath
    productStock.innerHTML = `庫存:${StockListData[0]}`
        console.log(StockListData[0])


    colorList.innerHTML = colorListData.map(p => `
    <li class="color-list__item">
    <button class="color-list__block">
        <div class="color-list__color" style="background:${p.hex}"></div>
        </button>
    </li>
    `).join('');

    sizeList.innerHTML = sizeListData.map(p => `
    <li class="size-list__item">
        <button class="size-list__block">
            <p class="size-list__size">${p.name}</p>
        </button>
    </li>
    `).join('');

    const colorListItem = document.getElementsByClassName("color-list__item")
    colorListItem[0].classList.add('color-list__item--active')
    const colorListName = document.createElement("p")
    colorListName.innerHTML = colorListData[0].name
    colorList.appendChild(colorListName)
    colorListName.classList.add('color-list__name')

    for (let i = 0; i < colorListItem.length; i++) {
        colorListItem[i].addEventListener('click', () => {
            console.log(colorListData[i].name)
            localStorage.setItem("所選擇商品顏色", colorListData[i].id);
            renewColorBtn()
        })
    };

    function renewColorBtn() {
        const colorBtnId = localStorage.getItem('所選擇商品顏色')
        const sizeBtnId = localStorage.getItem('所選擇商品尺寸')
        for (let i = 0; i < colorListItem.length; i++) {
            colorListItem[i].classList.remove('color-list__item--active')
        }
        colorListItem[colorBtnId].classList.add('color-list__item--active')
        colorListName.innerHTML = colorListData[colorBtnId].name
        productImage.src = colorListData[colorBtnId].imagePath
    }

    const sizeListItem = document.getElementsByClassName("size-list__item")
    sizeListItem[0].classList.add('size-list__item--active')
    const sizeListName = document.createElement("span")
    sizeListName.innerHTML = sizeListData[0].name
    colorListName.appendChild(sizeListName)
    sizeListName.classList.add('size-list__name')

    for (let i = 0; i < sizeListItem.length; i++) {
        sizeListItem[i].addEventListener('click', () => {
            console.log(sizeListData[i].name)
            localStorage.setItem("所選擇商品尺寸", sizeListData[i].id);
            renewSizeBtn()
        })
    };

    function renewSizeBtn() {
        const sizeBtnId = localStorage.getItem('所選擇商品尺寸')
        for (let i = 0; i < sizeListItem.length; i++) {
            sizeListItem[i].classList.remove('size-list__item--active')
        }
        sizeListItem[sizeBtnId].classList.add('size-list__item--active')
        sizeListName.innerHTML = sizeListData[sizeBtnId].name
        const colorBtnId = localStorage.getItem('所選擇商品顏色')
        const productStockData = Object.values(colorListData[colorBtnId].Stock);
        productStock.innerHTML = `庫存:${productStockData[sizeBtnId]}`;
    }

})