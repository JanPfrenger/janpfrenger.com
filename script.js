(function () {
    var toggle = document.getElementById('themeToggle');
    var html = document.documentElement;

    function get() {
        return localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    }

    function set(t) {
        html.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
        toggle.textContent = t === 'dark' ? '○' : '●';
    }

    set(get());

    toggle.addEventListener('click', function () {
        set(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
})();
