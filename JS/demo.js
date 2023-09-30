let namstebtn = document.querySelector('button');
namstebtn.addEventListener('click', showmsg);

function showmsg(){
        let name = prompt('Enter Name Of Student');
        namstebtn.textContent = 'Roll NO :-1 ' + name;
}