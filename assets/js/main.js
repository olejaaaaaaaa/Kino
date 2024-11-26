const portfolioItems = [
    {
      url: 'home-1.html',
      imgSrc: 'assets/preview/01.jpg',
      title: 'Home version - 01'
    },
    {
      url: 'home-2.html',
      imgSrc: 'assets/preview/02.jpg',
      title: 'Home version - 02'
    },
    {
      url: 'home-3.html',
      imgSrc: 'assets/preview/03.jpg',
      title: 'Home version - 03'
    },
    {
      url: 'home-4.html',
      imgSrc: 'assets/preview/04.jpg',
      title: 'Home version - 04'
    }
];

const portfolioContainer = document.getElementById('portfolio-container');

portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('col-sm-6', 'single_portfolio');

    portfolioItem.innerHTML = `
    <div class="inner">
        <a href="${item.url}" class="portfolio_img">
            <img src="${item.imgSrc}" alt="" />
        </a>
        <div class="portfolio_content">
            <a href="${item.url}" class="h3">${item.title}</a>
        </div>
    </div>
`;

    portfolioContainer.appendChild(portfolioItem);
});