function showMenu() {
    const list = document.querySelector('.list');

    list.classList.toggle('open');
    document.querySelector('.open-close').src = list.classList.contains('open') ? "assets/images/close_white_36dp.svg" : "assets/images/menu_white_36dp.svg";
}