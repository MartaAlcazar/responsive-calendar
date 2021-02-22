let search_block = document.querySelector('.search_block');
let search_toggle = document.querySelector('.search_toggle span');

search_toggle.addEventListener('click', () => {
    search_block.classList.toggle ('opened');
});

let menu_categories_items = document.querySelectorAll('.menu_categories_item');
menu_categories_items.forEach(f => {
    f.addEventListener('click', ev => {
        f.classList.toggle('popup_filter_unactive')
    });
});