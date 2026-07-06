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
    }

    set(get());

    if (toggle) {
        toggle.addEventListener('click', function () {
            set(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    // easter egg for the curious
    if (window.console && !window.__jpGreeted) {
        window.__jpGreeted = true;
        console.log(
            '%chey, you found the console.',
            'font-family:monospace;font-size:14px;color:#f5a524;'
        );
        console.log(
            "%cif you're reading this we should probably talk → hello@janpfrenger.com",
            'font-family:monospace;font-size:12px;'
        );
    }
})();
