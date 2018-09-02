var app = {
    initialize: function()
    {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function()
    {
		var slink = document.getElementById('Schoolkijker');
		window.cordova.InAppBrowser.open(slink.getAttribute('href'), slink.getAttribute('target'), 'location=no,toolbar=no,zoom=no');
    }
};
app.initialize();
