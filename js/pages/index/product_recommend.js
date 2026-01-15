document.addEventListener('DOMContentLoaded', () => {
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
    ]

    const $ = (s) => document.querySelector(s)
    const recommend = $('.recommend')
    const listEl = $('.recommend__list')
    const dotsEl = $('.recommend__dots')
    const header = $('header')
    const prevBtn = $('.recommend__btn--prev')
    const nextBtn = $('.recommend__btn--next')

    // ===== 分頁狀態 =====
    const PER = 12
    const pageCount = Math.ceil(products.length / PER)
    let page = 1

    // ===== 產 dots（一次）=====
    dotsEl.innerHTML = Array.from({ length: pageCount }, (_, i) =>
        `<div class="recommend__dot" data-page="${i + 1}">${i + 1}</div>`
    ).join('')

    // ===== 事件委派：dots / 商品卡片 =====
    dotsEl.addEventListener('pointerup', (e) => {
        const dot = e.target.closest('.recommend__dot')
        if (!dot) return
        e.preventDefault()

        page = Number(dot.dataset.page)
        render()

        window.scrollTo({
            top: recommend.offsetTop - (header?.offsetHeight || 0),
            behavior: 'smooth'
        })
    }, { passive: false })

    listEl.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card')
        if (!card) return
        localStorage.setItem('product_id', card.dataset.id)
    })

    // ===== prev/next =====
    prevBtn?.addEventListener('click', () => {
        if (page <= 1) return
        page--
        render()
    })

    nextBtn?.addEventListener('click', () => {
        if (page >= pageCount) return
        page++
        render()
    })

    // ===== render =====
    function render() {
        renderList()
        renderDots()
    }

    function renderList() {
        const start = (page - 1) * PER
        const pageData = products.slice(start, start + PER)

        listEl.innerHTML = pageData.map(p => `
      <li class="product-card" data-id="${p.id}">
        <a class="product-card__link" href="./product.html">
          <img class="product-card__img product-card__img--front" src="./image/products/product_card_img(${p.id}-2).png" alt="">
          <img class="product-card__img product-card__img--back"  src="./image/products/product_card_img(${p.id}-1).png" alt="">
          <div class="product-card__mask"></div>
          <p class="product-card__cta">現在購買</p>
          <p class="product-card__name">${p.name}</p>
          <p class="product-card__price">
            <span class="product-card__discount">${p.discount}</span>
            <span class="product-card__amount">${p.price}</span>
          </p>
        </a>
      </li>
    `).join('')

        const emptyCount = PER - pageData.length
        if (emptyCount > 0) {
            listEl.insertAdjacentHTML(
                'beforeend',
                Array.from({ length: emptyCount }, () => `<li class="product-card--empty"></li>`).join('')
            )
        }
    }

    function renderDots() {
        dotsEl.querySelectorAll('.recommend__dot').forEach(dot => {
            dot.classList.toggle('recommend__dot--active', Number(dot.dataset.page) === page)
        })
    }

    render()
})
