define(['dojo/_base/declare', 'dojo/dom-construct', 'dojo/domReady!'], function(declare, domConstruct) {

    const App = declare(null, {
        startup() {
            domConstruct.create('div', { innerHTML: 'Hello Dojo' }, document.getElementById('dojo-app'));
        },
    });

    return new App();
});
