var clock = document.getElementById('clock')
setInterval(function() {
    var date = new Date();
    var html = '';
    html += '<h1>' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</h1>'
    clock.innerHTML = html;
}, 100)
