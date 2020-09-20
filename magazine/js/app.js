// show menu when hamburger icon is clicked
function showMenu() {
    let menu = document.getElementById('navigation');
    let openIcon = document.getElementById('icon-open').style.display = 'none';
    menu.classList.add('show-menu');

}

// hide menu when hamburger icon is clicked
function hideMenu() {
    let menu = document.getElementById('navigation');
    let openIcon = document.getElementById('icon-open');


    openIcon.style.display = 'block';
    menu.classList.remove('show-menu')
    menu.classList.add('hide-menu')
}

// show message popup
function showMessageBox() {
    let messageBox = document.getElementById('message-box');

    messageBox.classList.remove('hide-message-box');
    messageBox.classList.add('show-message-box');
}

// hide message popup
function hideMessageBox() {
    let messageBox = document.getElementById('message-box');

    messageBox.classList.remove('show-message-box');
    messageBox.classList.add('hide-message-box');

}

// gets and displays team member's information
function getMember(el) {
    let display = document.getElementById('team-member-display').style.display = 'block',
        picture = document.getElementById('member-picture').src = el.children[0].src,
        name = document.getElementById('member-name').innerText = el.children[1].innerText,
        memberInfo = document.getElementById('member-info');
    var data = el.querySelectorAll('p');

    var arr = [];

    for (let i = 0; i < data.length; i++) {
        let p = document.createElement('p');

        arr.push(data[i].innerText)
        p.innerText = arr[i];
        document.getElementById('member-info').appendChild(p);
    }
}

// close team member display
let closeMemberDisplay = document.getElementById('team-member-display-close-icon').addEventListener('click', function() {
    let display = document.getElementById('team-member-display').style.display = 'none';
    let info = document.getElementById("member-info").children;

    for (let i = 0; i < info.length; i++) {
        info[i].innerText = '';
        info[i].style.display = 'none';
    }

});