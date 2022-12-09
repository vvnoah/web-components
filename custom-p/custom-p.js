customElements.define(
    'custom-p',
    class CustomP extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('custom-p').content;
            this.attachShadow({ mode: 'open'}).appendChild(template.cloneNode(true));
        }
    }
);