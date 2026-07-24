const openButton =
    document.getElementById(
        "openLetter"
    );

const openingScreen =
    document.getElementById(
        "openingScreen"
    );

const letterPage =
    document.getElementById(
        "letterPage"
    );

const envelope =
    document.querySelector(
        ".envelope"
    );

const music =
    document.getElementById(
        "backgroundMusic"
    );


openButton.addEventListener(
    "click",

    function () {


        /* ========================= */
        /* OPEN ENVELOPE */
        /* ========================= */


        envelope.classList.add(
            "open"
        );


        /* ========================= */
        /* START MUSIC */
        /* ========================= */


        if (music) {

            music.currentTime = 0;

            const playPromise = music.play();

            if (playPromise && typeof playPromise.catch === "function") {

                playPromise.catch(() => {
                    // Ignore browser autoplay restrictions.
                });

            }

        }


        /* ========================= */
        /* WAIT FOR ENVELOPE */
        /* ========================= */


        setTimeout(

            function () {


                /* Hide opening */

                openingScreen.style.display =
                    "none";


                /* Show letter */

                letterPage.classList.add(
                    "show"
                );


                /* Scroll */

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });


            },

            1200

        );

    }

);