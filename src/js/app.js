// javascript goes here


import shares from './share'



[].slice.apply(document.querySelectorAll('.interactive-share')).forEach(shareEl => {
        var network = shareEl.getAttribute('data-network');
        shareEl.addEventListener('click', () => shareFn(network));
    });



let shareFn = shares('Beyond the Blade', 'https://www.theguardian.com/', '');