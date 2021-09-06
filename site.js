//Hero Slider
    function slider1() {

        let splides = $('.heroslider');
        for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
            new Splide(splides[i], {
                // Desktop on down
                perPage: 1,
                perMove: 1,
                focus: 0, // 0 = left and 'center' = center
                type: 'loop', // 'loop' or 'slide'
                gap: '0em', // space between slides
                arrows: false, // 'slider' or false
                pagination: false, // 'slider' or false
                speed: 800, // transition speed in miliseconds
                dragAngleThreshold: 30, // default is 30
                autoWidth: false, // for cards with differing widths
                rewind: false, // go back to beginning when reach end
                autoplay: true,
                interval: 3000,
                rewindSpeed: 400,
                waitForTransition: false,
                updateOnMove: true,
                trimSpace: false, // true removes empty space from end of list
                breakpoints: {
                    991: {
                        // Tablet
                    },
                    767: {
                        // Mobile Landscape
                    },
                    479: {
                        // Mobile Portrait
                    }
                }
            }).mount();
        }

    }
    slider1();
    //Match Slider
    function slider2() {

        let splides = $('.matchesslider');
        for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
            new Splide(splides[i], {
                // Desktop on down
                perPage: 3,
                perMove: 3,
                focus: 0, // 0 = left and 'center' = center
                type: 'loop', // 'loop' or 'slide'
                padding: {
                    left: 0,
                    right: '3rem',
                },
                gap: '6em', // space between slides
                arrows: false, // 'slider' or false
                pagination: false, // 'slider' or false
                speed: 800, // transition speed in miliseconds
                dragAngleThreshold: 30, // default is 30
                autoWidth: false, // for cards with differing widths
                rewind: false, // go back to beginning when reach end
                rewindSpeed: 400,
                autoplay: true,
                interval: 3000,
                waitForTransition: false,
                updateOnMove: true,
                trimSpace: false, // true removes empty space from end of list
                breakpoints: {
                    991: {
                        perPage: 2,
                        perMove: 2,
                        padding: {
                            left: '1em',
                            right: '1em',
                        },
                        speed: 900,
                        gap: '1em', // space between slides
                    },
                    767: {
                        perPage: 2,
                        perMove: 2,
                        padding: {
                            left: '1em',
                            right: '1em',
                        },
                        speed: 900,
                        gap: '1em', // space between slides
                    },
                    568: {
                        perPage: 1,
                        perMove: 1,
                        padding: {
                            left: '1em',
                            right: '1em',
                        },
                        speed: 900,
                    }
                }
            }).mount();
        }

    }
    slider2();

    //Products Slider
    function slider3() {

        let splides = $('.product-slider');
        for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
            new Splide(splides[i], {
                // Desktop on down
                perPage: 3,
                perMove: 3,
                focus: 'center', // 0 = left and 'center' = center
                type: 'loop', // 'loop' or 'slide'
                gap: '2em', // space between slides
                arrows: true, // 'slider' or false
                pagination: false, // 'slider' or false
                speed: 2000, // transition speed in miliseconds
                dragAngleThreshold: 30, // default is 30
                autoWidth: false, // for cards with differing widths
                rewind: false, // go back to beginning when reach end
                rewindSpeed: 400,
                autoplay: true,
                interval: 2000,
                waitForTransition: false,
                updateOnMove: true,
                trimSpace: false, // true removes empty space from end of list
                breakpoints: {
                    1920: {
                        perPage: 4,
                        perMove: 2,
                        focus: 0,
                    },
                    1440: {
                        perPage: 4,
                        perMove: 2,
                        focus: 0,
                    },
                    1366: {
                        perPage: 3,
                        perMove: 3,
                        focus: 'center',
                    },
                    991: {
                        perPage: 2,
                        perMove: 2,
                        padding: {
                            left: '1em',
                            right: '1em',
                        },
                        speed: 900,
                        gap: '1em', // space between slides
                    },
                    768: {
                        perPage: 1,
                        perMove: 1,
                        padding: {
                            left: '1em',
                            right: '1em',
                        },
                        speed: 900,
                    }
                }
            }).mount();
        }

    }
    slider3();

    //Our team Slider
    function slider4() {

        let splides = $('.team-slider');
        for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
            new Splide(splides[i], {
                // Desktop on down
                perPage: 3,
                perMove: 3,
                focus: 'center', // 0 = left and 'center' = center
                type: 'loop', // 'loop' or 'slide'
                gap: '2em', // space between slides
                arrows: true, // 'slider' or false
                pagination: false, // 'slider' or false
                speed: 2000, // transition speed in miliseconds
                dragAngleThreshold: 30, // default is 30
                autoWidth: false, // for cards with differing widths
                rewind: false, // go back to beginning when reach end
                rewindSpeed: 400,
                autoplay: true,
                interval: 3500,
                waitForTransition: false,
                updateOnMove: true,
                trimSpace: false, // true removes empty space from end of list
                breakpoints: {
                    1920: {
                        perPage: 3,
                        perMove: 2,
                        focus: 0,
                    },
                    1440: {
                        perPage: 3,
                        perMove: 2,
                        focus: 0,
                    },
                    1366: {
                        perPage: 3,
                        perMove: 3,
                        focus: 'center',
                    },
                    768: {
                        perPage: 2,
                        perMove: 2,
                    }
                }
            }).mount();
        }

    }
    slider4();


    //News/Blog Slider
    function slider5() {

        let splides = $('.news-slider');
        for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
            new Splide(splides[i], {
                // Desktop on down
                perPage: 3,
                perMove: 3,
                focus: 0, // 0 = left and 'center' = center
                type: 'slide', // 'loop' or 'slide'
                gap: '0', // space between slides
                arrows: false, // 'slider' or false
                pagination: false, // 'slider' or false
                speed: 1500, // transition speed in miliseconds
                autoWidth: false, // for cards with differing widths
                rewind: false, // go back to beginning when reach end
                rewindSpeed: 400,
                autoplay: true,
                trimSpace: true, // true removes empty space from end of list
                breakpoints: {
                    1920: {
                        perPage: 4,
                        perMove: 2,
                        focus: 0,
                    },
                    1440: {
                        perPage: 4,
                        perMove: 2,
                        focus: 0,
                    },
                    1366: {
                        perPage: 3,
                        perMove: 3,
                        focus: 0,
                    },
                    768: {
                        perPage: 2,
                        perMove: 2,
                    },
                    568: {
                        perPage: 1,
                        perMove: 1,
                    }
                }
            }).mount();
        }

    }
    slider5();
