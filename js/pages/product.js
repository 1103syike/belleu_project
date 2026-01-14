document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: 1,
            name: '巴黎字母T恤',
            price: { original: 890, sale: 599, discount: 67 },
            desc: '寬鬆休閒版型，選用柔軟親膚棉料，透氣不悶、久穿依然舒適。正面字母印花設計，簡約中帶有法式氛圍，視覺乾淨耐看。下身不論搭配牛仔褲、短裙或寬褲都能輕鬆完成造型，日常、通勤、假日外出都合適。',
            variants: [
                {
                    id: 0,
                    key: 'red',
                    name: '紅色',
                    hex: '#B20E30',
                    stock: { S: 2, M: 5, L: 6 },
                    images: [
                        '../image/products/product-1(red).png',
                        '../image/products/product-1(red-2).png'
                    ]
                },
                {
                    id: 1,
                    key: 'blue',
                    name: '藍色',
                    hex: '#3B4A6B',
                    stock: { S: 5, M: 3, L: 5 },
                    images: [
                        '../image/products/product-1(blue).png',
                        '../image/products/product-1(blue-2).png',
                    ]
                },
                {
                    id: 2,
                    key: 'green',
                    name: '綠色',
                    hex: '#23413F',
                    stock: { S: 3, M: 4, L: 3 },
                    images: [
                        '../image/products/product-1(green).png',
                        '../image/products/product-1(green-2).png',
                    ]
                },
                {
                    id: 3,
                    key: 'oatmeal',
                    name: '燕麥色',
                    hex: '#E3DBD8',
                    stock: { S: 4, M: 1, L: 2 },
                    images: [
                        '../image/products/product-1(oatmeal).png',
                        '../image/products/product-1(oatmeal-2).png'
                    ]
                },
                {
                    id: 4,
                    key: 'gray',
                    name: '灰色',
                    hex: '#C1BFC0',
                    stock: { S: 8, M: 0, L: 0 },
                    images: [
                        '../image/products/product-1(gray).png',
                        '../image/products/product-1(gray-2).png'
                    ]
                }
            ]
        },
        {
            id: 2, name: '學院風鈕扣百褶裙', price: { original: '1290元', sale: '629元', discount: '49%' },
            desc: '俐落百褶剪裁，自然修飾腿部線條並拉長比例。正面鈕扣設計增添學院感細節，穿著穩定不易跑位。布料挺度適中，行走間保有線條感，搭配襯衫、針織或短版上衣都能展現清新知性風格。',
            color: {
                beige: { id: 0, name: '米色', hex: '#EFEAE6', stock: { S: { id: 0, name: 'S', number: 3 }, M: { id: 1, name: 'M', number: 5 }, L: { id: 2, name: 'L', number: 7, } } },
            },
            images: [
                '../image/products/product-2(beige).png',
            ]
        },
        {
            id: 3, name: '夏季抽褶背心襯衫', price: { original: '1090元', sale: '549元', discount: '50%', },
            desc: '輕薄涼爽布料，夏天穿著不黏膚、透氣舒適。抽褶設計自然修飾身形曲線，背心版型清爽俐落。單穿就有造型感，也可外搭罩衫或西外，從日常到通勤都能輕鬆駕馭。',
            color: {
                white: { id: 0, name: '白色', hex: '#EFEFEF', stock: { S: { id: 0, name: 'S', number: 2 }, M: { id: 1, name: 'M', number: 5 }, L: { id: 2, name: 'L', number: 6, } } },
            },
            images: [
                '../image/products/product-3(white).png',
            ]
        },
        {
            id: 4, name: '條紋緊身胸衣背心', price: { original: '990元', sale: '689元', discount: '70%' },
            desc: '貼身剪裁勾勒上身線條，條紋元素在視覺上更顯修身。布料帶有彈性，穿著舒適不緊繃。單穿展現率性性感風格，外搭襯衫或外套又能平衡整體造型，層次感十足。',
        },
        {
            id: 5, name: '簡約無袖節慶短上衣', price: { original: '990元', sale: '599元', discount: '60%' },
            desc: '短版設計自然拉高腰線，修飾整體比例。布料柔軟且具有彈性，活動自在不受限。簡約外型好搭不挑風格，無論節慶聚會或日常穿搭，都能展現俐落有型的穿著感。',

        },
        {
            id: 6, name: '條紋荷葉邊長連身裙', price: { original: '1290元', sale: '599元', discount: '46%' },
            desc: '細緻條紋搭配荷葉邊下擺，整體線條柔和且富有女人味。長版剪裁修飾身形比例，穿著輕盈不厚重。一件即可完成造型，適合約會、出遊或日常輕鬆穿搭。',

        },
        {
            id: 7, name: '喇叭形迷你一件式', price: { original: '1090元', sale: '599元', discount: '55%' },
            desc: '喇叭剪裁自然修飾臀腿線條，迷你長度展現俏皮感。布料舒適好活動，穿著貼合卻不緊繃。單穿即可成為造型重點，搭配靴子或球鞋都能呈現不同風格。',

        },
        {
            id: 8, name: '百褶迷你裙', price: { original: '890元', sale: '599元', discount: '67%' },
            desc: '高腰百褶設計有效修飾腰部比例，視覺顯腿長。布料輕挺不易變形，行走時保有自然垂墜感。搭配針織、T恤或襯衫皆適合，是日常穿搭的百搭單品。',

        },
        {
            id: 9, name: '五月百褶長裙', price: { original: '1190元', sale: '599元', discount: '50%' },
            desc: '選用垂墜感佳的布料，百褶線條隨步伐自然擺動。長版設計修飾腿型，穿著氣質溫柔。適合搭配簡約上衣或針織單品，通勤、外出都能展現成熟優雅氛圍。',

        },
        {
            id: 10, name: '無領金色紐帶夾克', price: { original: '1590元', sale: '599元', discount: '38%' },
            desc: '無領剪裁讓整體線條更俐落，金色紐帶細節提升質感層次。布料挺度佳，穿上即有精神。可正式也可休閒，搭配洋裝或褲裝都能輕鬆轉換風格。',

        },
        {
            id: 11, name: '舒適連帽繫帶風衣背心', price: { original: '1390元', sale: '599元', discount: '43%' },
            desc: '連帽設計增添休閒感，繫帶可自由調整輪廓。風衣材質輕盈防風，背心版型適合層次穿搭。搭配長袖上衣或針織，秋冬過渡季也能實穿。',

        },
        {
            id: 12, name: '短版針織緊身胸衣', price: { original: '790元', sale: '599元', discount: '76%' },
            desc: '針織布料柔軟親膚，貼身剪裁展現身形線條。短版設計提升整體比例，單穿或內搭都好看。適合搭配高腰褲或裙款，輕鬆打造率性造型。',

        },
        {
            id: 13, name: '短版紐帶氨綸短袖上衣', price: { original: '990元', sale: '599元', discount: '60%' },
            desc: '氨綸材質具彈性，穿著貼合卻不緊繃。短版搭配紐帶設計，細節感十足又能自由調整。日常單穿有型，搭配外套也能增加層次。',

        },
        {
            id: 14, name: '綠色修身毛毛外套', price: { original: '1790元', sale: '599元', discount: '33%' },
            desc: '毛毛材質觸感柔軟，穿著保暖不厚重。修身剪裁讓外套不顯臃腫，綠色調增添造型亮點。適合秋冬外出或約會穿搭，保暖同時兼顧時尚感。',

        },
    ];

    // ===== 0) 取商品 =====
    const productId = Number(localStorage.getItem('product_id')) || 1
    const product = products.find(p => p.id === productId) || products[0]

    // ===== 1) DOM 快取 =====
    const $ = (sel) => document.querySelector(sel)
    const productTitle = $('.product__title')
    const productPriceSale = $('.product__price--sale')
    const productPriceOriginal = $('.product__price--original')
    const productDesc = $('.product__desc')
    const colorList = $('.color-list')
    const sizeList = $('.size-list')
    const productImage = $('.product__image')
    const productStock = $('.product__stock')
    const quantityBtnMinus = $('.quantity__btn--minus')
    const quantityBtnPlus = $('.quantity__btn--plus')
    const quantityInput = $('.quantity__input')

    // ===== 2) 狀態（只用 key，不用 index）=====
    let selectedColorKey = product.variants[0].key
    let selectedSizeKey = Object.keys(product.variants[0].stock)[0]

    // ===== 3) 基本資料渲染 =====
    productTitle.textContent = product.name
    productPriceSale.textContent = `${product.price.sale}元`
    productPriceOriginal.textContent = `${product.price.original}元`
    productDesc.textContent = product.desc

    // ===== 4) UI 生成（顏色、尺寸）=====
    renderColorList()
    renderSizeList()
    renderSelectedTags()
    syncUI()

    // ===== 5) 事件（委派：不用 for 迴圈綁一堆）=====
    colorList.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-color]')
        if (!btn) return
        selectedColorKey = btn.dataset.color
        // 換色後尺寸預設選第一個可用（你也可改成保留原尺寸）
        selectedSizeKey = firstSizeKey(getVariant(selectedColorKey).stock)
        syncUI()
    })

    sizeList.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-size]')
        if (!btn || btn.disabled) return
        selectedSizeKey = btn.dataset.size
        syncUI()
    })

    quantityBtnMinus.addEventListener('click', () => {
        quantityInput.value = Math.max(1, Number(quantityInput.value) - 1)
    })

    quantityBtnPlus.addEventListener('click', () => {
        const stock = getStock()
        const cur = Number(quantityInput.value)
        if (stock <= 0) return (quantityInput.value = 0)
        quantityInput.value = Math.min(stock, Math.max(1, cur + 1))
    })

    // ===== functions =====

    function getVariant(colorKey) {
        return product.variants.find(v => v.key === colorKey)
    }

    function firstSizeKey(stockObj) {
        return Object.keys(stockObj)[0]
    }

    function getStock() {
        const v = getVariant(selectedColorKey)
        return v.stock[selectedSizeKey] ?? 0
    }

    function renderColorList() {
        colorList.innerHTML = product.variants.map(v => `
      <li class="color-list__item">
        <button class="color-list__block" data-color="${v.key}" type="button">
          <div class="color-list__color" style="background:${v.hex}"></div>
        </button>
      </li>
    `).join('')
    }

    function renderSizeList() {
        const v = getVariant(selectedColorKey)
        sizeList.innerHTML = Object.entries(v.stock).map(([size, qty]) => `
      <li class="size-list__item">
        <button class="size-list__block" data-size="${size}" type="button" ${qty === 0 ? 'disabled' : ''}>
          <p class="size-list__size">${size}</p>
        </button>
      </li>
    `).join('')
    }

    function renderSelectedTags() {
        // 避免每次 append 重複
        let selected = colorList.querySelector('.product__selected')
        if (!selected) {
            selected = document.createElement('div')
            selected.className = 'product__selected'
            selected.innerHTML = `
        <p class="color-list__name"></p>
        <p class="size-list__name"></p>
      `
            colorList.appendChild(selected)
        }
    }

    function syncUI() {
        const v = getVariant(selectedColorKey)

        // 1) active 樣式
        colorList.querySelectorAll('[data-color]').forEach(btn => {
            btn.closest('.color-list__item')
                .classList.toggle('color-list__item--active', btn.dataset.color === selectedColorKey)
        })

        // 尺寸要依顏色重畫（因為不同顏色庫存不同）
        renderSizeList()
        sizeList.querySelectorAll('[data-size]').forEach(btn => {
            btn.closest('.size-list__item')
                .classList.toggle('size-list__item--active', btn.dataset.size === selectedSizeKey)
        })

        // 2) 顯示文字
        colorList.querySelector('.color-list__name').textContent = v.name
        colorList.querySelector('.size-list__name').textContent = selectedSizeKey

        // 3) 圖片：用該色第一張（多角度在 v.images）
        productImage.src = v.images[0]

        // 4) 庫存/數量
        const stock = getStock()
        productStock.textContent = `庫存:${stock}`
        quantityInput.value = stock > 0 ? 1 : 0

        // 5) 存起來（你原本就有在存）
        localStorage.setItem('所選擇商品顏色', selectedColorKey)
        localStorage.setItem('所選擇商品尺寸', selectedSizeKey)
        localStorage.setItem('商品庫存', stock)
    }

    // 1號用 variants，其它用 images
    const images = product.variants
        ? product.variants.flatMap(v => v.images)
        : (product.images || [])

    const carousel = document.querySelector('.product__carousel')
    carousel.innerHTML = images.map(src =>
        `<img class="product__item" src="${src}" alt="">`
    ).join('')

    const thumbs = [...document.querySelectorAll('.product__item')]
    const mainImg = document.querySelector('.product__image')
    const next = document.querySelector('.gallery__button--next')
    const prev = document.querySelector('.gallery__button--prev')

    const mq = window.matchMedia('(max-width: 1320px)');
    let GROUP_SIZE = mq.matches ? 4 : 6;
    let current = 0
    let group = 0

    mq.addEventListener('change', e => {
        GROUP_SIZE = e.matches ? 4 : 6;
        render()
    });

    function render() {
        mainImg.src = thumbs[current].src
        thumbs.forEach((img, i) => {
            img.classList.toggle('is-active', i === current)
            img.style.display = Math.floor(i / GROUP_SIZE) === group ? 'block' : 'none'
        })
    }

    thumbs.forEach((img, i) => {
        img.addEventListener('click', () => {
            current = i
            group = Math.floor(i / GROUP_SIZE)
            render()
        })
    })

    next.addEventListener('click', () => {
        current = (current + 1) % thumbs.length
        group = Math.floor(current / GROUP_SIZE)
        render()
    })

    prev.addEventListener('click', () => {
        current = (current - 1 + thumbs.length) % thumbs.length
        group = Math.floor(current / GROUP_SIZE)
        render()
    })

    render()
})