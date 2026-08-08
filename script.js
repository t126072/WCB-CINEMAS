//  ローディング
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 200,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  loadingText.animate(
    [
      { opacity: 1, offset: 0.8 },
      { opacity: 0, offset: 1 },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards'
    }
  );
});

//  スライドメニュー
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards'
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({ translate: ['100vw', 0] }, menuOptions);
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({ translate: [0, '100vw'] }, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({ opacity: [1, 0] }, menuOptions);
  });
});

//  スクロールで要素を表示
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);
const fadeElements = document.querySelectorAll('.fadein');

fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

// 作品一覧ページ
// 上映中作品のデータ配列
const nowShowingList = [
  { title: '作品A', img: 'img/poster1.jpg' },
  { title: '作品B', img: 'img/poster2.jpg' },
  { title: '作品C', img: 'img/poster3.jpg' },
  { title: '作品D', img: 'img/poster4.jpg' },
  { title: '作品E', img: 'img/poster5.jpg' },
  { title: '作品F', img: 'img/poster6.jpg' },
  { title: '作品G', img: 'img/poster7.jpg' },
  { title: '作品H', img: 'img/poster8.jpg' },
  { title: '作品I', img: 'img/poster9.jpg' },
  { title: '作品J', img: 'img/poster10.jpg' }
];

// 要素の取得
const nowShowingGrid = document.querySelector('#now-showing-grid');

// works.html が開かれている時のみ
if (nowShowingGrid) {
  nowShowingList.forEach((movie) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('work-card');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('work-item');

    const imgEl = document.createElement('img');
    imgEl.src = movie.img;
    imgEl.alt = movie.title;

    itemDiv.appendChild(imgEl);

    const titleP = document.createElement('p');
    titleP.classList.add('work-title');
    titleP.textContent = movie.title;

    cardDiv.appendChild(itemDiv);
    cardDiv.appendChild(titleP);

    nowShowingGrid.appendChild(cardDiv);
  });
}

// 上映予定作品のデータ配列
const comingSoonList = [
  { title: '作品K', img: 'img/poster11.jpg' },
  { title: '作品L', img: 'img/poster12.jpg' },
  { title: '作品M', img: 'img/poster13.jpg' },
  { title: '作品N', img: 'img/poster14.jpg' },
  { title: '作品O', img: 'img/poster15.jpg' }
];

// 要素の取得
const comingSoonGrid = document.querySelector('#coming-soon-grid');

// works.html が開かれている時のみ
if (comingSoonGrid) {
  comingSoonList.forEach((movie) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('work-card');

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('work-item');

    const imgEl = document.createElement('img');
    imgEl.src = movie.img;
    imgEl.alt = movie.title;

    itemDiv.appendChild(imgEl);

    const titleP = document.createElement('p');
    titleP.classList.add('work-title');
    titleP.textContent = movie.title;

    cardDiv.appendChild(itemDiv);
    cardDiv.appendChild(titleP);

    comingSoonGrid.appendChild(cardDiv);
  });
}
// フード・ドリンクページ
// 画像切り替え
const foodThumbs = document.querySelectorAll('.food-thumb');
const mainImg = document.querySelector('#main-food-img');
const mainTitle = document.querySelector('#main-food-title');
const mainPrice = document.querySelector('#main-food-price');

if (foodThumbs.length > 0 && mainImg) {
  foodThumbs.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      // クラスの付け替え
      foodThumbs.forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');

      // データ属性から値取得
      const newImgSrc = thumb.getAttribute('data-img');
      const newTitle = thumb.getAttribute('data-title');
      const newPrice = thumb.getAttribute('data-price');

      // 情報書き換え
      mainImg.src = newImgSrc;
      mainImg.alt = newTitle;
      mainTitle.innerHTML = newTitle;
      mainPrice.innerHTML = newPrice;
    });
  });
}
