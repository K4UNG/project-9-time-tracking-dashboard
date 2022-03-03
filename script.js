const buttons = document.querySelectorAll('nav li');
const containers = document.querySelectorAll('.time');
const order = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];

async function getData(containers, button) {
    let data = await fetch('./data.json');
    let times = await data.json();
    let index = 0;
    containers.forEach(container => {
        let current = times[index].timeframes[button.getAttribute('id')].current;
        let previous = times[index].timeframes[button.getAttribute('id')].previous;
        container.childNodes[5].childNodes[1].innerHTML =  current + ((current <= 1) ? 'hr' : 'hrs');
        container.childNodes[5].childNodes[3].innerHTML = button.dataset.last + ' ' + previous + ((previous <= 1) ? 'hr' : 'hrs');
        index++;
    })
}

getData(containers, buttons[1]);

buttons.forEach(button => {
    button.onclick = ()=> {
        buttons.forEach(link => {
            link.classList.remove('active')
        });

        button.classList.add('active');
        getData(containers, button);
        
    }

    button.onkeyup = ()=> {
        buttons.forEach(link => {
            link.classList.remove('active')
        });

        button.classList.add('active');
        getData(containers, button);
        
    }
});

