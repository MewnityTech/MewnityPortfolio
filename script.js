$(document).ready(function() {
    function showTab(tabId) {
        $('.tab').removeClass('active');
        $(tabId).addClass('active');
    }

    $('.navbar ul li a').click(function(event) {
        event.preventDefault();
        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
        const tabId = $(this).attr('href');
        showTab(tabId);
        
        $('html, body').animate({
            scrollTop: $(tabId).offset().top - 100
        }, 600);
    });

    // ПРОЕКТЫ БУДУ ОБНОВЛЯТЬ ЩА ФИГНЯ
    const projectData = {
        '1': {
            'title': 'Crazy Calculator',
            'description': 'УВЫ ЩА ЕГО НЕТ',
            'images': ['img/crazy_calculator1.png', 'img/crazy_calculator2.png'],
            'link': 'https://progcrafterq.github.io/CrazyCalculator/'
        },
        '2': {
            'title': 'Fake Web Messenger',
            'description': 'A web-based messenger simulation with funny characters and conversations. A creative way to show off my JavaScript and CSS skills.',
            'images': ['img/fake_messenger1.png', 'img/fake_messenger2.png'],
            'link': 'https://progcrafterq.github.io/FakeMessanger/'
        },
        '3': {
            'title': 'Epic Quest App',
            'description': 'An interactive JavaScript quest game with multiple paths and endings. Test your decision-making skills in this adventure!',
            'images': ['img/quest1.png', 'img/quest2.png'],
            'link': 'https://progcrafterq.github.io/EpicJsQuest/'
        },
        '4': {
            'title': 'P5.js Projects',
            'description': 'Creative coding experiments with the P5.js library. Includes a Snake game and various interactive graphics demonstrations.',
            'images': ['img/p5js1.png', 'img/p5js2.png'],
            'link': '#'
        },
        '5': {
            'title': 'Flappy Bird',
            'description': 'My version of the popular Flappy Bird game built with JavaScript. Test your reflexes and see how high you can score!',
            'images': ['img/flappy_bird1.png', 'img/flappy_bird2.png'],
            'link': 'https://progcrafterq.github.io/Flappy-Bird/'
        },
        '6': {
            'title': 'Portfolio for my mom',
            'description': 'Some Portfolio!',
            'images': ['img/portfm1.png', 'img/portfm2.png'],
            'link': 'https://progcrafterq.github.io/LiliiaShevchenko/'
        },
        '7': {
            'title': 'Airbus',
            'description': 'pull up pull up. ',
            'images': ['img/airbus1.png', 'img/airbus2.png'],
            'link': 'https://progcrafterq.github.io/Airbus/'
        }
    };

    $('#portfolio-list a').click(function(event) {
        event.preventDefault();
        const projectId = $(this).data('id');
        const data = projectData[projectId];
        
        $('#project-title').text(data.title);
        $('#project-description').text(data.description);
        
        $('#project-images').empty();
        data.images.forEach(function(img) {
            $('#project-images').append(`<img src="${img}" alt="${data.title}" loading="lazy">`);
        });
        
        $('#project-link').attr('href', data.link);
        if (data.link === '#') {
            $('#project-link').text('Coming Soon');
            $('#project-link').css('pointer-events', 'none');
            $('#project-link').css('background-color', '#888');
        } else {
            $('#project-link').text('Visit Project');
            $('#project-link').css('pointer-events', 'auto');
            $('#project-link').css('background-color', '#4caf50');
        }
        
    
        $('#project-modal').fadeIn(300);
    });

    $('.close').click(function() {
        $('#project-modal').fadeOut(300);
    });

    $(window).click(function(event) {
        if ($(event.target).is('#project-modal')) {
            $('#project-modal').fadeOut(300);
        }
    });

    if (window.location.hash) {
        const hash = window.location.hash;
        if ($(hash).length) {
            showTab(hash);
            $('.navbar ul li a').removeClass('active');
            $(`.navbar ul li a[href="${hash}"]`).addClass('active');
        }
    }
    
    // МИНКРИФТ КУБИКИ ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ
    function createRandomSquares() {
        const squaresContainer = $('.background-animation');
        squaresContainer.empty();
        
        for (let i = 0; i < 12; i++) {
            const leftPos = Math.floor(Math.random() * 100);
            const delay = Math.floor(Math.random() * 10);
            const size = 30 + Math.floor(Math.random() * 30);
            const opacity = 0.2 + Math.random() * 0.3;
            
            const square = $('<div>', {
                class: 'square',
                css: {
                    left: leftPos + '%',
                    width: size + 'px',
                    height: size + 'px',
                    opacity: opacity,
                    animationDelay: delay + 's'
                }
            });
            
            squaresContainer.append(square);
        }
    }
    
    createRandomSquares();
});
