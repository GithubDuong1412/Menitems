// mobile_navbar-active

function mobileShowNavBar() {
    const navBars = document.querySelectorAll('.header_nav-mobile--acitve');
    const navBarsUl = document.querySelectorAll('.header_nav-mobile--acitve > ul');

    // console.log(navBarsUl)

    for(var i=0; i <navBars.length; i++) {
        navBars[i].addEventListener('click', function() {
            for(var i=0; i <navBars.length; i++) {
                console.log(navBarsUl)
            }
        })
    }
}

mobileShowNavBar()

// navBars.addEventListener("toggle", mobileShowNavBar);

// function mobileShowNavBar() {
//     // let listNavBars = []
    
//     // navBars.forEach(navbars => listNavBars.push(navbars))  

//     // listNavBars.map((item, index) => item)


// }

// mobileShowNavBar()

// console.log(typeof navBars)