"use strict"


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

var activePage = "";

init();

function init() {

    activatingPage("page-1", "page-btn-1");
}

function activatingPage(pageId, btnId) {

    if(pageId === activePage) return;

    activePage = pageId;

    console.log("activate-page");
    
    let btns = document.getElementsByName("page-btn");

    btns.forEach(b => {
        if(b.id === btnId) {
            b.classList.add("active-menu-btn");
        } else {
            b.classList.remove("active-menu-btn");
        }
        console.log("activate-buttons");
    });

    let pages = document.getElementsByName("page");

    pages.forEach(p => {
        if(p.id == pageId) {
            p.classList.toggle("active-page");
        } else {
            p.classList.remove("active-page");
        }
    });
}

