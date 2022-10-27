let on = false;

function hamburger() {
    if (on === true) { //when the menu disappears 
    console.log('not displayed');
    document.getElementById('hamburger-background').style.display = 'none';
    document.getElementById('item1').style.backgroundColor = 'black';
    document.getElementById('item2').style.backgroundColor = 'black';
    document.getElementById('item3').style.backgroundColor = 'black';
    document.getElementById('hamburger-menu').style.display = 'none';
    on = false;
    return
    } else {
        console.log('displayed'); //making the menu appear
        document.getElementById('hamburger-background').style.display = 'inline-block';
        document.getElementById('hamburger-menu').style.display = 'inline-block';
        document.getElementById('nav-hamburger').style.zIndex = '4';
        on = true;
        return
    }
}

