document.addEventListener('DOMContentLoaded', () => {
  const slides = [
    { id: 1, name: '輪播圖-1', src: './image/page/index/swiper/swiper(1).png' },
    { id: 2, name: '輪播圖-2', src: './image/page/index/swiper/swiper(2).png' },
    { id: 3, name: '輪播圖-3', src: './image/page/index/swiper/swiper(3).png' },
    { id: 4, name: '輪播圖-4', src: './image/page/index/swiper/swiper(4).png' }
  ]

  // ===== 常數 =====
  const DURATION = 400
  const INTERVAL = 5000
  const len = slides.length

  // ===== DOM 快取 =====
  const currentEl = document.querySelector('.swiper__img--current')
  const prevEl = document.querySelector('.swiper__img--prev')
  const nextEl = document.querySelector('.swiper__img--next')
  const nextBtn = document.querySelector('.swiper__btn--next')
  const prevBtn = document.querySelector('.swiper__btn--prev')
  const mask = document.querySelector('.swiper__mask')
  const pagination = document.querySelector('.swiper__pagination')

  // ===== 狀態 =====
  let index = 0
  let timer = null
  let isAnimating = false

  // ===== 初始化 dots =====
  pagination.innerHTML = slides.map((_, i) =>
    `<button class="swiper__dot" type="button" data-index="${i}"></button>`
  ).join('')
  const dots = [...pagination.querySelectorAll('.swiper__dot')]

  // ===== 初次渲染 =====
  renderImages()
  renderDots()
  startAutoPlay()

  // ===== 事件 =====
  nextBtn.addEventListener('click', () => go(1))
  prevBtn.addEventListener('click', () => go(-1))

  // dots：事件委派
  pagination.addEventListener('click', (e) => {
    const dot = e.target.closest('.swiper__dot')
    if (!dot) return
    const target = Number(dot.dataset.index)
    if (target === index) return
    jumpTo(target)
  })

  // ===== 核心動作 =====

  function go(step) {
    if (isAnimating) return
    stopAutoPlay()

    // 預載下一張/上一張
    const target = mod(index + step, len)
    animate(step, target)

    startAutoPlay()
  }

  function jumpTo(target) {
    if (isAnimating) return
    stopAutoPlay()

    // 決定方向：往前/往後最近路徑（len 小其實無所謂）
    const forward = mod(target - index, len)
    const backward = mod(index - target, len)
    const step = forward <= backward ? 1 : -1

    animate(step, target)
    startAutoPlay()
  }

  function animate(step, targetIndex) {
    isAnimating = true
    toggleLock(true)

    // 先把目標圖塞到 next 或 prev 那張上
    if (step === 1) {
      nextEl.src = slides[targetIndex].src
      nextEl.style.transition = `transform ${DURATION}ms ease`
      nextEl.style.transform = 'translateX(0)'
    } else {
      prevEl.src = slides[targetIndex].src
      prevEl.style.transition = `transform ${DURATION}ms ease`
      prevEl.style.transform = 'translateX(0)'
    }

    setTimeout(() => {
      // 動畫結束：更新 index，重置位置，重灌三張圖
      index = targetIndex
      resetSidePositions()
      renderImages()
      renderDots()
      toggleLock(false)
      isAnimating = false
    }, DURATION)
  }

  // ===== 渲染 =====

  function renderImages() {
    const prevIndex = mod(index - 1, len)
    const nextIndex = mod(index + 1, len)

    currentEl.src = slides[index].src
    prevEl.src = slides[prevIndex].src
    nextEl.src = slides[nextIndex].src
  }

  function renderDots() {
    dots.forEach((d, i) => {
      d.classList.toggle('swiper__dot--active', i === index)
      d.disabled = i === index || isAnimating
    })
  }

  function resetSidePositions() {
    nextEl.style.transition = 'none'
    prevEl.style.transition = 'none'
    nextEl.style.transform = 'translateX(100%)'
    prevEl.style.transform = 'translateX(-100%)'
  }

  // ===== autoplay =====

  function startAutoPlay() {
    timer = setTimeout(() => go(1), INTERVAL)
  }

  function stopAutoPlay() {
    clearTimeout(timer)
    timer = null
  }

  // ===== UI lock =====

  function toggleLock(lock) {
    nextBtn.disabled = lock
    prevBtn.disabled = lock
    if (mask) mask.style.display = lock ? 'block' : 'none'
    // dots 同步禁用
    dots.forEach(d => d.disabled = lock || Number(d.dataset.index) === index)
  }

  function mod(n, m) {
    return (n % m + m) % m
  }

  document.querySelectorAll('.swiper--hero .swiper__btn')
  .forEach(btn => {
    btn.addEventListener('touchend', e => {
      e.preventDefault()
    }, { passive: false })
  })
})
