document.querySelector('span#next').addEventListener('click', function() {
    var pages = document.querySelectorAll('div.page');
    pages.forEach(page => {
        if (page.firstElementChild.matches('include')) {
            var title = page.firstElementChild.firstElementChild.textContent.trim();
            var heading = document.createElement('h1');
            heading.innerText = title;
            heading.hidden = true;
            page.prepend(heading);
        }
    });

    if (document.querySelector('div#page0').classList.contains('selected')){
        var page1Title = document.querySelector('#instructionsrequirement-1-title > div > p' ).innerText;
        document.querySelector('#next').innerText = 'Next: ' + page1Title;
    }
});