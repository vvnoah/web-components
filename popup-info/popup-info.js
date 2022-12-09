class PopupInfo extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});
        console.log('shadow root created')

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        console.log('wrapper created');

        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        console.log('icon created');
        
        const info = document.createElement('span');
        info.setAttribute('class', 'info');
        console.log('info created');

        const text = this.getAttribute('data-text');
        info.textContent = text;
        console.log('info text set');

        let image;
        if (this.hasAttribute('img')) {
            image = this.getAttribute('img');
        } else {
            image = 'img/default.png'
        }
        console.log('got image url')

        const img = document.createElement('img');
        img.src = image;
        icon.appendChild(img);
        console.log('created image, appended image to icon')

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                position: relative;
            }
        
            .info {
                font-size: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                opacity: 0;
                transition: 0.6s all;
                position: absolute;
                bottom: 20px;
                left: 10px;
                z-index: 3;
            }
        
            img {
                width: 1.2rem;
            }
        
            .icon:hover + .info, .icon:focus + .info {
                opacity: 1;
            }
        `;
        console.log('created and set style');

        shadow.appendChild(style);
        console.log('Is style connected?', style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define('popup-info', PopupInfo);