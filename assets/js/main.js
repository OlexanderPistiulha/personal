const select = new Select('#select', {
    placeholder: 'Background animation',
    // текст с item.value вместо preceholder
    // selectedId: '4',
    data: [{
            id: '1',
            value: 'Blur hover effect',
            link: 'select/AnimationsTricks/background/BlurHover (HTML SCSS CSS)/index.html'
        },
        {
            id: '2',
            value: 'Bubbles animation',
            link: 'select/AnimationsTricks/background/Bubble(HTML SCSS CSS)/index.html'
        },
        {
            id: '3',
            value: 'Cloud version one',
            link: 'select/AnimationsTricks/background/Cloud/index.html'
        },
        {
            id: '4',
            value: 'Cloud version two',
            link: 'select/AnimationsTricks/background/CloudVersion2/index.html'
        },
        {
            id: '5',
            value: 'Color slider',
            link: 'select/AnimationsTricks/background/ColorSlider/index.html'
        },
        {
            id: '6',
            value: 'Firs screen of landing page',
            link: 'select/AnimationsTricks/background/LandingPageFirstScreenOne/index.html'
        },
        {
            id: '7',
            value: 'Scroll background effect',
            link: 'select/AnimationsTricks/background/ScrollEffect (HTML SCSS CSS JS)/index.html'
        },
        {
            id: '8',
            value: 'Scroll background parallax',
            link: 'select/AnimationsTricks/background/ScrollParallaxBg (HTML SCSS CSS jQuery)/index.html'
        },
        {
            id: '9',
            value: 'Static spot',
            link: 'select/AnimationsTricks/background/StaticSpot/index.html'
        },
        {
            id: '10',
            value: 'Transparent block',
            link: 'select/AnimationsTricks/background/TransparentDiv (HTML SCSS CSS)/index.html'
        },
        {
            id: '11',
            value: 'Video circle',
            link: 'select/AnimationsTricks/background/VideoCircleBg (HTML SCSS CSS)/index.html'
        },
        {
            id: '12',
            value: 'Wave',
            link: 'select/AnimationsTricks/background/Wave (HTML SCSS CSS)/index.html'
        },
    ]
});

const selectTwo = new Select('#select-two', {
    placeholder: 'Button animation',   
    data: [{
            id: '1',
            value: 'Button 3D',
            link: 'select/AnimationsTricks/button/Button3D/index.html'
        },
        {
            id: '2',
            value: 'Button border change',
            link: 'select/AnimationsTricks/button/ButtonBorderChange/index.html'
        },
        {
            id: '3',
            value: 'Button border glory',
            link: 'select/AnimationsTricks/button/ButtonBorderGlory/index.html'
        },
        {
            id: '4',
            value: 'Button gradient glory',
            link: 'select/AnimationsTricks/button/ButtonGradientGlory/index.html'
        },
        {
            id: '5',
            value: 'Button simple arrow',
            link: 'select/AnimationsTricks/button/ButtonSimpleArrow/index.html'
        },
        {
            id: '6',
            value: 'Button Square hover',
            link: 'select/AnimationsTricks/button/ButtonSquareHover/index.html'
        },
        {
            id: '7',
            value: 'Button liquid',
            link: 'select/AnimationsTricks/button/LiquidButton(HTML SCSS CSS JS )/index.html'
        },       
    ]
});

const selectTree = new Select('#select-three', {
    placeholder: 'Goods card',   
    data: [
        {
            id: '1',
            value: 'Capitan Marvel',
            link: 'select/AnimationsTricks/card/CardAdaptiveCapitanMarvel/index.html'
        },
        {
            id: '2',
            value: 'Card button hover',
            link: 'select/AnimationsTricks/card/CardButtomHover(HTML SCSS CSS )/index.html'
        },
        {
            id: '3',
            value: 'Card flip image',
            link: 'select/AnimationsTricks/card/CardFlipImg/index.html'
        },
        {
            id: '4',
            value: 'Card hover gradient',
            link: 'select/AnimationsTricks/card/CardHoverLinearGradient(HTML SCSS CSS )/index.html'
        },
        {
            id: '5',
            value: 'Card rotateX',
            link: 'select/AnimationsTricks/card/CardHoverRotateX(HTML SCSS CSS )/index.html'
        },
        {
            id: '6',
            value: 'Card rotateY',
            link: 'select/AnimationsTricks/card/CardHoverRotateY(HTML SCSS CSS )/index.html'
        },
        {
            id: '7',
            value: 'Card scale',
            link: 'select/AnimationsTricks/card/CardHoverScale(HTML SCSS CSS )/index.html'
        },
        {
            id: '8',
            value: 'Card rotate',
            link: 'select/AnimationsTricks/card/CardImageHoverRotate(HTML SCSS CSS )/index.html'
        },
        {
            id: '9',
            value: 'Card',
            link: 'select/AnimationsTricks/card/CardOne/index.html'
        },
        {
            id: '10',
            value: 'Card product',
            link: 'select/AnimationsTricks/card/CardProductHover(HTML SCSS CSS )/index.html'
        },
        {
            id: '11',
            value: 'Card shadow',
            link: 'select/AnimationsTricks/card/CardShadowHover (HTML SCSS CSS )/index.html'
        },
        {
            id: '12',
            value: 'Card input',
            link: 'select/AnimationsTricks/card/CardToggleInput(HTML SCSS CSS )/index.html'
        },
        {
            id: '13',
            value: 'Card two',
            link: 'select/AnimationsTricks/card/CardTwo(HTML SCSS CSS Vanilla tilt.js)/index.html'
        },
       
       
    ]
});

const selectFour = new Select('#select-four', {
    placeholder: 'Button animation',   
    data: [{
            id: '',
            value: '',
            link: ''
        },
       
    ]
});

const selectFive = new Select('#select-five', {
    placeholder: 'Button animation',   
    data: [{
            id: '',
            value: '',
            link: ''
        },
       
    ]
});

const selectSix = new Select('#select-six', {
    placeholder: 'Button animation',   
    data: [{
            id: '',
            value: '',
            link: ''
        },
       
    ]
});

document.querySelector('.sites').addEventListener('click', (e) => {
    if (e.target.classList.contains('site__mode')) {
        window.open(`${e.target.dataset.link}`);
    } else return;
});