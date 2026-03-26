(function () {
    'use strict';

    // Theme
    var toggle = document.getElementById('themeToggle');
    var html = document.documentElement;

    function getTheme() {
        var saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function setTheme(t) {
        html.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
    }

    setTheme(getTheme());

    toggle.addEventListener('click', function () {
        setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    // Nav shrink on scroll
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Reveal on scroll
    var els = document.querySelectorAll(
        '.section-label, .about-layout, .text-large, .project-row, ' +
        '.exp-item, .contact-block, .hero-intro, .hero-name, .hero-sub, ' +
        '.hero-actions, .hero-photo, .essays-header, .essay-card, .essay-placeholder'
    );

    els.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el, i) {
        el.style.transitionDelay = (i % 6) * 0.06 + 's';
        observer.observe(el);
    });

    // Trigger hero elements on load
    setTimeout(function () {
        document.querySelectorAll('.hero .reveal').forEach(function (el) {
            el.classList.add('visible');
        });
    }, 80);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
})();
