/* Navbar */
window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')

    const navToggleBtn = document.querySelector('.js-nav-toggle-button');
    const navToggleBtnImg = document.querySelectorAll('.js-nav-toggle-button img');

    const smNavContainer = document.querySelector('.js-sm-nav-container');

    const smNavLinks = document.querySelector('.sm-nav-links');
    const smNavATags = document.querySelectorAll('.js-sm-nav-aTags');

    const logoImg = document.querySelector('[alt="logo"]')
    



    const openNavigation = () => {
        smNavContainer.classList.toggle('hidden')

        smNavContainer.removeAttribute('hidden')

        // switch the buttons image when the button is clicked
        navToggleBtnImg.forEach((imgTags) => {
            imgTags.toggleAttribute('hidden')
        })

        if (smNavContainer.classList.contains('hidden')) body.style.overflowY = 'visible';
        else body.style.overflowY = 'hidden'
    }


    const closeNavigation = () => {
        smNavContainer.classList.add('hidden')

        // switch the buttons image when the button is clicked
        navToggleBtnImg.forEach((imgTags) => {
            imgTags.toggleAttribute('hidden')
        })

        if (smNavContainer.classList.contains('hidden')) body.style.overflowY = 'visible';
    }


    navToggleBtn.addEventListener('click', openNavigation)
    smNavContainer.addEventListener('click', closeNavigation)  /* Close the navbar when any where outside the (sm-nav-links) div is clicked   */
 
    smNavLinks.addEventListener('click', (event) => { event.stopImmediatePropagation()}) /* when the (sm-nav-links) div its self is cliked dont close the navbar  */

    smNavATags.forEach((el) => {el.addEventListener('click', closeNavigation)}) /* Close the navbar when any of its link is clicked */

    logoImg.addEventListener('click', closeNavigation) /* Closing navbar when the log image is clicked */

})