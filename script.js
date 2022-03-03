// const daily = document.getElementById('daily');
// const weekly = document.getElementById('weekly');
// const monthly = document.getElementById('monthly');
const buttons = document.querySelectorAll('nav li');
const containers = document.querySelectorAll('.time');
const order = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];

async function getData(containers, button) {
    var data = await fetch('./data.json');
    var times = await data.json();
    let index = 0;
    containers.forEach(container => {
        container.childNodes[5].innerHTML = times[index].timeframes[button.getAttribute('id')].current + 'hr';
        container.childNodes[7].innerHTML = button.dataset.last + ' ' + times[index].timeframes[button.getAttribute('id')].previous + 'hr';
        index++;
    })
}

buttons.forEach(button => {
    button.onclick = ()=> {
        buttons.forEach(link => {
            link.classList.remove('active')
        });

        button.classList.add('active');
        getData(containers, button);
        
    }
});

