import { ViewPage } from './ViewPages/viewPage.js';

main_menu.addEventListener('click', function() {
    main_menu.style.gridRow = "1 / span 2";
    upgrade_menu.style.gridRow = "2";
    resource_store_menu.style.gridRow = "2";
    tasks_menu.style.gridRow = "2";
    wallet_menu.style.gridRow = "2";
    var arr_section = ViewPage();
    arr_section[0].style.display = "block"
})

upgrade_menu.addEventListener('click', function() {
    main_menu.style.gridRow = "2";
    upgrade_menu.style.gridRow = "1 / span 2";
    resource_store_menu.style.gridRow = "2";
    tasks_menu.style.gridRow = "2";
    wallet_menu.style.gridRow = "2";
    var arr_section = ViewPage();
    arr_section[1].style.display = "block"
})

resource_store_menu.addEventListener('click', function() {
    main_menu.style.gridRow = "2";
    upgrade_menu.style.gridRow = "2";
    resource_store_menu.style.gridRow = "1 / span 2";
    tasks_menu.style.gridRow = "2";
    wallet_menu.style.gridRow = "2";
    var arr_section = ViewPage();
    arr_section[2].style.display = "block"

})

tasks_menu.addEventListener('click', function() {
    main_menu.style.gridRow = "2";
    upgrade_menu.style.gridRow = "2";
    resource_store_menu.style.gridRow = "2";
    tasks_menu.style.gridRow = "1 / span 2";
    wallet_menu.style.gridRow = "2";
    var arr_section = ViewPage();
    arr_section[3].style.display = "block"
})

wallet_menu.addEventListener('click', function() {
    main_menu.style.gridRow = "2";
    upgrade_menu.style.gridRow = "2";
    resource_store_menu.style.gridRow = "2";
    tasks_menu.style.gridRow = "2";
    wallet_menu.style.gridRow = "1 / span 2";
    var arr_section = ViewPage();
    arr_section[4].style.display = "block"
})