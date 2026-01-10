document.addEventListener('DOMContentLoaded', function () {
    const footer = document.createElement("footer");
    footer.className = 'footer'
    footer.innerHTML = `
        <div class="footer_body">
            <div class="footer_left">
                <nav class="nav">
                    <a href="#" class="nav_link">關於比露</a>
                    <a href="#" class="nav_link">會員福利</a>
                    <a href="#" class="nav_link">使用條款</a>
                    <a href="#" class="nav_link">隱私權政策</a>
                    <a href="#" class="nav_link">門市資訊</a>
                </nav>
                <div class="about">
                    <p class="about_title">
                        <strong class="brand">BELLEU</strong>比露時尚服飾有限公司
                    </p>
                </div>
            </div>
            <div class="footer_right">
                <p class="info"><strong class="label">客服中心：</strong>(TID)102-11-8939
                </p>
                <p class="info"><strong class="label">電子郵件：</strong>service@belleu.com.tw</p>
                <p class="info"><strong class="label">平日（週一至週五）</strong>13:00-22:00
                </p>
                <p class="info"><strong class="label">例假日（週六、週日及國定假日）</strong>10:00-24:00</p>
            </div>
        </div>

        <div class="footer_bottom">
            <p class="item"><strong class="label">負責人</strong>鄭丞恩</p>
            <p class="item"><strong class="label">地址</strong>新北市板橋區歐嗨喲路102街11號</p>
            <p class="item"><strong class="label">統編</strong>102118939</p>
            <p class="item">本網站僅供網站設計學習用途 如有侵權請聯絡<strong class="label">ping355168@gmail.com</strong></p>
        </div>
    `

    document.body.appendChild(footer);
})