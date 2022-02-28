import * as flsFunctions from './modules/functions.js'
import { lang } from './modules/lang.js'

flsFunctions.isWebp();

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if (sliderScollItems.length > 0) {
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


// var swiper = new Swiper(".jam-swiper", {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//     },
// });



new Swiper('.slider-gem__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.slider-gem-controls__arrows .slider-arrow__next',
        prevEl: '.slider-gem-controls__arrows .slider-arrow__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
})

new Swiper('.slider-jam__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 60,
    autoHeight: true,
    speed: 800,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.slider-jam-controls__arrows .slider-arrow__next',
        prevEl: '.slider-jam-controls__arrows .slider-arrow__prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
})

new Swiper('.slider-dainties__body', {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    spaceBetween: 35,
    autoHeight: true,
    speed: 800,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.slider-dainties-controls__arrows .slider-arrow__next',
        prevEl: '.slider-dainties-controls__arrows .slider-arrow__prev',
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //         autoHeight: true,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1475: {
    //         spaceBetween: 45,
    //     },
    // },
})

const burger = document.querySelector('.burger')
const headerNav = document.querySelector('.header-nav')
const headerItem = document.querySelectorAll('.header-nav__list li')
const headerNavList = document.querySelector('.header-nav__list')

if (burger) {
    burger.addEventListener("click", () => {
        burger.classList.toggle('active')
        headerNav.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
}

// var btns = header.getElementsByClassName("btn");
for (var i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener("click", function() {
        var current = headerNavList.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        burger.classList.remove('active')
        headerNav.classList.remove('active')
        document.body.classList.remove('lock')
    });
}

const currentLang = document.querySelector('.language-header span')
const language = document.querySelector('.language');

const languageHeader = document.querySelector('.language-header');
const languageItem = document.querySelectorAll('.language-list li')

if (language) {
    languageHeader.addEventListener('click', () => {
        language.classList.toggle("open")
    })
    languageItem.forEach(item => {
        item.addEventListener('click', () => {
            const languageText = item.textContent.toLowerCase();
            switch (languageText) {
                case 'ro':
                    currentLang.textContent = 'RO';
                    document.documentElement.setAttribute('lang', 'ro');
                    translateRO();
                    break;
                case 'ru':
                    currentLang.textContent = 'RU';
                    document.documentElement.setAttribute('lang', 'ru');
                    translate(lang);
                    break;
                default:
            }
            language.classList.remove('open')
        })
    })
}



// function scrollToTop() {
//     window.scrollTo({ top: 0 });
// }

function translate(lang) {
    lang.map(text => {
        let textKeys = Object.values(text);
        const pageTextsNl = document.querySelectorAll('[data-translate]');
        let pageTexts = Array.from(pageTextsNl);
        if (textKeys.length < pageTexts.length) {
            var newPageTexts = pageTexts.slice(0, textKeys.length);
        } else {
            newPageTexts = pageTexts;
        }
        newPageTexts.forEach((toTranslate, i) => {
            toTranslate.textContent = textKeys[i];
        });
    });
}

function translateRO() {
    lang.map(text => {
        let textKeys = Object.keys(text);
        const pageTextsNl = document.querySelectorAll('[data-translate]');
        let pageTexts = Array.from(pageTextsNl);
        if (textKeys.length < pageTexts.length) {
            var newPageTextsR = pageTexts.slice(0, textKeys.length);
        } else {
            newPageTextsR = pageTexts;
        }
        newPageTextsR.forEach((toTranslate, i) => {
            toTranslate.textContent = textKeys[i];
        });
    });
}