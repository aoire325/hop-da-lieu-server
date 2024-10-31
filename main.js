// fnc bg
function gradientBg() {
    const bg = document.querySelector('body');
    const main = document.querySelector('#main');
    const bgArr = [
        './asset/image/motionbg-0.png',
        './asset/image/motionbg-1.png',
        './asset/image/motionbg-2.png',
        './asset/image/motionbg-3.png',
        './asset/image/motionbg-4.png',
        './asset/image/motionbg-5.png',
        './asset/image/motionbg-6.png',
        './asset/image/motionbg-7.png',
    ];
    let i = 0;
    bg.style.backgroundImage = `url(${bgArr[0]})`;
    const updateBackground = () => {
        main.style.transition = 'background-image 3s ease-in-out';
        main.style.backgroundImage = `url(${bgArr[i]})`;
        main.style.backgroundAttachment = 'fixed';
        main.style.backgroundSize = 'cover';
        i = (i + 1) % bgArr.length;
    };

    updateBackground();
    setInterval(updateBackground, 2500);
}
gradientBg();

// function getNavHeight() {
//     let nav = document.querySelector('nav');
//     let navHeight = nav.offsetHeight;
//     let contentHolder = document.querySelector('#contentHolder');
//     contentHolder.style.paddingTop = navHeight + 'px';
//     return navHeight;
// }

function set1PageHeight() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;

    let items = document.querySelectorAll('.ONEPAGEHEIGHT');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let battleTextHolderDiv = document.querySelector('#battle>.section-content>div:first-child');
    battleTextHolderDiv.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem)`;
    let h3inBattle = document.querySelector('#battle>.section-content>div:first-child>h3');
    let pInBattle = document.querySelector('#battle>.section-content>div:first-child>p');
    let imgInBattle = document.querySelector('#battle>.section-content>div:first-child>img');

    imgInBattle.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem - ${h3inBattle.offsetHeight + pInBattle.offsetHeight}px)`;
}

function updateLayout() {
    // getNavHeight();
    set1PageHeight();
    choreographyIframeSize();
    holaSlideImgSize();
}

// window.addEventListener('resize', updateLayout);
// updateLayout();

function addVideoNav() {
    let upBtn = document.querySelector(`#battleVideoUp`);
    let downBtn = document.querySelector(`#battleVideoDown`);
    let videoContainer = document.querySelector(`#battle .section-video-contain > div:not([id])`);
    let iframes = videoContainer.querySelectorAll('iframe');

    let i = 0;
    let max = iframes.length;
    let current = 0;
    let updateVideo = () => {
        iframes[current].style.transition = 'opacity 1s ease-in-out';
        iframes[current].style.opacity = 0;
        setTimeout(() => {
            iframes[current].style.display = 'none';
            current = (current + i + max) % max;
            iframes[current].style.display = 'block';
            iframes[current].style.opacity = 0;
            setTimeout(() => {
                iframes[current].style.opacity = 1;
            }, 100);
        }, 500);
    };

    upBtn.addEventListener('click', () => {
        i = -1;
        updateVideo();
    });

    downBtn.addEventListener('click', () => {
        i = 1;
        updateVideo();
    });
}
// addVideoNav();

function choreographyIframeSize() {
    let iframe = choreography.querySelector('#choreographyVideo');
    iframe.style.maxHeight = `calc((100dvh - ${getNavHeight()}px)*0.9)`;
    iframe.style.aspectRatio = '9/16';
    iframe.style.width = iframe.offsetHeight * 9 / 16 + 'px';
}
// choreographyIframeSize();

// function holaSlideDockMovingImg() {
//     const holaSlideDock = document.querySelector('#holaSlideDock');
//     const imgList = [
//         './asset/image/_MG_8214.jpeg',
//         './asset/image/_MG_8244.jpeg',
//         './asset/image/DA__9332.jpeg',
//         './asset/image/DSC_5325.jpeg',
//         './asset/image/DSC_5326.jpeg',
//         './asset/image/DSC_5338.jpeg',
//         './asset/image/DSC_5352.jpeg',
//         './asset/image/DSC_6219.jpeg',
//         './asset/image/DSC_6511.jpeg',
//         './asset/image/DSC_6514.jpeg',
//         './asset/image/DSC03291.jpeg',
//         './asset/image/DSC03320.jpeg',
//         './asset/image/DSCF4207.jpeg',
//         './asset/image/hola1.jpeg',
//         './asset/image/hola2.jpeg',
//         './asset/image/hola3.jpeg',
//         './asset/image/hola4.jpeg',
//         './asset/image/hola5.jpeg',
//         './asset/image/hola6.jpeg',
//         './asset/image/hola7.jpeg',
//         './asset/image/hola8.jpeg',
//         './asset/image/WAACKING HBDC.jpeg',
//     ];

//     imgList.forEach((src, index) => {
//         const img = document.createElement('img');
//         img.src = src;
//         img.classList.add('holaSlideDock-img');
//         img.id = `holaSlideDock-img-${index}`;
//         holaSlideDock.appendChild(img);
//         img.addEventListener('click', () => holaSlideImgChangImg(src));
//     });

//     let currentIndex = 0;
//     const backBtn = document.querySelector(`#holaSlide img[src="./asset/svg/left.svg"]`);
//     const nextBtn = document.querySelector(`#holaSlide img[src="./asset/svg/right.svg"]`);

//     const updateCurrentImage = (increment) => {
//         currentIndex = (currentIndex + increment + imgList.length) % imgList.length;
//         holaSlideImgChangImg(imgList[currentIndex]);
//     };

//     backBtn.addEventListener('click', () => updateCurrentImage(-1));
//     nextBtn.addEventListener('click', () => updateCurrentImage(1));

//     holaSlideImgChangImg(imgList[0]);

//     setInterval(() => updateCurrentImage(1), 8000);

//     const certScroller = () => {
//         const landingPageCert = document.getElementById('holaSlideDock');
//         const scrollSpeed = 2;

//         const autoScroll = () => {
//             landingPageCert.scrollLeft += scrollSpeed;
//             if (landingPageCert.scrollLeft >= landingPageCert.scrollWidth - landingPageCert.clientWidth) {
//                 landingPageCert.scrollLeft = 0;
//             }
//         };

//         let scrollInterval = setInterval(autoScroll, 50);

//         window.addEventListener('focus', () => {
//             clearInterval(scrollInterval);
//             scrollInterval = setInterval(autoScroll, 50);
//         });
//     };

//     certScroller();
// }
// holaSlideDockMovingImg();

// function holaSlideImgChangImg(path) {
//     let img = document.querySelector('#holaSlideImg>img');
//     img.style.transition = 'opacity 1s ease-in-out';
//     img.style.opacity = 0;
//     setTimeout(() => {
//         img.src = path;
//         img.style.opacity = 1;
//     }, 500);
// }

// function holaSlideImgSize() {
//     let iframe = choreography.querySelector('#holaSlideImg > img');
//     iframe.style.height = `calc((100dvh - ${getNavHeight()}px)*0.9 - 16rem)`;
//     if (iframe.height < window.innerHeight * 0.4) {
//         iframe.style.height = window.innerHeight * 0.5 + 'px';
//         let slider = document.querySelectorAll('.holaSlideDock-img');
//         slider.forEach(slide => {
//             // slide.style.height = window.innerHeight * 0.1 + 'px';
//             slide.classList.add('holaSlideDock-img-small');
//         });
//     } else {
//         let slider = document.querySelectorAll('.holaSlideDock-img');
//         slider.forEach(slide => {
//             slide.classList.remove('holaSlideDock-img-small');
//         });
//     }
// }
// holaSlideImgSize();

// NEW FNC

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('myAudio');
    const playIcon = document.getElementById('onboard_play');
    const pauseIcon = document.getElementById('onboard_pause');
    const sectionOnboard = document.querySelector('#onboard');

    audio.autoplay = true;
    audio.load();
    pauseIcon.style.display = 'none';

    const playAudio = () => {
        audio.play().then(() => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }).catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    };

    const pauseAudio = () => {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    };

    playIcon.addEventListener('click', playAudio);
    pauseIcon.addEventListener('click', pauseAudio);
    const handleOnboardClick = () => {
        playAudio();
        sectionOnboard.removeEventListener('click', handleOnboardClick);
    };

    sectionOnboard.addEventListener('click', handleOnboardClick);

    setTimeout(playAudio, 1000);
});

function addSliderAndAutoSlide(containerID, imgList, nextID, prevID, autoScroll) {
    const container = document.querySelector(`#${containerID}`);
    const imgContainer = container.querySelector('div');
    const nextBtn = document.getElementById(nextID);
    const prevBtn = document.getElementById(prevID);

    container.parentElement.style.position = 'relative';
    nextBtn.style.position = 'absolute';
    nextBtn.style.right = '0';
    nextBtn.style.top = '50%';
    prevBtn.style.position = 'absolute';
    prevBtn.style.left = '0';
    prevBtn.style.top = '50%';
    nextBtn.style.cursor = 'pointer';
    prevBtn.style.cursor = 'pointer';
    nextBtn.style.zIndex = '100';
    prevBtn.style.zIndex = '100';
    nextBtn.style.borderRadius = '50%';
    prevBtn.style.borderRadius = '50%';
    nextBtn.style.backgroundColor = 'rgba(255,255,255, 0.5)';
    prevBtn.style.backgroundColor = 'rgba(255,255,255, 0.5)';

    let currentIndex = 0;
    const updateCurrentImage = (increment) => {
        currentIndex = (currentIndex + increment + imgList.length) % imgList.length;
        imgContainer.style.transition = 'transform 1s ease-in-out';
        imgContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        imgContainer.classList.add('slider-transition');
    };

    nextBtn.addEventListener('click', () => updateCurrentImage(1));
    prevBtn.addEventListener('click', () => updateCurrentImage(-1));

    updateCurrentImage(0);

    if (autoScroll) {
        setInterval(() => updateCurrentImage(1), 8000);
    }
}

const addImagesToContainer = (containerID, mediaList) => {
    const container = document.querySelector(`#${containerID} div`);
    mediaList.forEach(src => {
        const element = document.createElement(src.endsWith('.jpeg') ? 'img' : 'div');
        if (src.endsWith('.jpeg')) {
            element.src = src;
            container.appendChild(element);
        } else {
            element.innerHTML = `<iframe src="${src}" style="" frameborder="0" allowfullscreen></iframe>`;
            container.appendChild(element);
        }
    });
};

const initializeSlider = (containerID, imgList, nextID, prevID, autoScroll = true) => {
    addImagesToContainer(containerID, imgList);
    addSliderAndAutoSlide(containerID, imgList, nextID, prevID, autoScroll);
};

const holaImgList = [
    './asset/image/_MG_8214.jpeg',
    './asset/image/_MG_8244.jpeg',
    './asset/image/DA__9332.jpeg',
    './asset/image/DSC_5325.jpeg',
    './asset/image/DSC_5326.jpeg',
    './asset/image/DSC_5338.jpeg',
    './asset/image/DSC_5352.jpeg',
    './asset/image/DSC_6219.jpeg',
    './asset/image/DSC_6511.jpeg',
    './asset/image/DSC_6514.jpeg',
    './asset/image/DSC03291.jpeg',
    './asset/image/DSC03320.jpeg',
    './asset/image/DSCF4207.jpeg',
    './asset/image/hola1.jpeg',
    './asset/image/hola2.jpeg',
    './asset/image/hola3.jpeg',
    './asset/image/hola4.jpeg',
    './asset/image/hola5.jpeg',
    './asset/image/hola6.jpeg',
    './asset/image/hola7.jpeg',
    './asset/image/hola8.jpeg',
    './asset/image/WAACKING HBDC.jpeg',
];

const waackingImgList = [
    './asset/image/DSC_5338.jpeg',
    './asset/image/DSCF4207.jpeg',
    './asset/image/DSC_5352.jpeg',
];

initializeSlider('waacking_slider_contain', waackingImgList, 'waacking_next', 'waacking_prev');

function smoothScrollToItem() {
    let main = document.querySelector('#main');
    let smoothScrollToTargets = document.querySelectorAll('.smoothScrollTo');
    let smoothScrollToTargetsYaxis = [];
    smoothScrollToTargets.forEach(target => {
        let targetYaxis = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollToTargetsYaxis.push(targetYaxis);
    });

    let isScrolling;
    let preY = 0;
    const handleScroll = () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            let currentY = main.scrollTop;
            console.log(smoothScrollToTargetsYaxis);

            let targetIndex = 0;
            for (let i = 0; i < smoothScrollToTargetsYaxis.length; i++) {
                if (currentY >= smoothScrollToTargetsYaxis[i] - window.innerHeight / 2) {
                    targetIndex = i;
                }
            }

            if (preY < currentY && currentY > smoothScrollToTargetsYaxis[targetIndex] / 3 * 2) {
                preY = currentY;
                if (targetIndex < smoothScrollToTargets.length) {
                    if (currentY >= smoothScrollToTargetsYaxis[targetIndex] - 200 &&
                        currentY < smoothScrollToTargetsYaxis[targetIndex] + 200) {
                        main.scrollTo({
                            top: smoothScrollToTargetsYaxis[targetIndex],
                            behavior: 'smooth'
                        });
                        console.log('scroll to', targetIndex);
                    }
                }
            }
        }, 100);
    };

    main.addEventListener('scroll', handleScroll);
}
smoothScrollToItem();

const konnectSlideList = [
    './asset/image/DSC_5325.jpeg',
    './asset/image/_MG_8214.jpeg',
    './asset/image/DSC_5326.jpeg',
    './asset/image/WAACKING HBDC.jpeg',
    './asset/image/DSC03320.jpeg',
    './asset/image/DSC03291.jpeg',
    './asset/image/DSC_6219.jpeg',
    './asset/image/DSC_6514.jpeg',
    'https://drive.google.com/file/d/1G_yJ8ReEZfxwfoHu23gOwBmKh1mXR4oK/preview',
    "https://drive.google.com/file/d/13gbUYcl3gUuRhJLqdXOR5RrfJ8zHu8lY/preview",
]

initializeSlider('battle_itemIframeLand', konnectSlideList, 'battle_next', 'battle_prev', false);

function battle_itemIframeLand_Iframe_sizeChange() {
    let iframe = document.querySelectorAll('#battle_itemIframeLand iframe');
    let containner = document.querySelector('#battle_itemIframeLand');
    let containnerWidth = containner.getBoundingClientRect().width;
    console.log(containnerWidth);


    let battle_itemIframeLand_Width = document.querySelectorAll('.battle_itemIframeLand_Width');
    battle_itemIframeLand_Width.forEach(item => {
        item.style.width = `${containnerWidth}px`;
    });
    iframe.forEach(item => {
        console.log(item.offsetWidth);
    })
}
battle_itemIframeLand_Iframe_sizeChange();