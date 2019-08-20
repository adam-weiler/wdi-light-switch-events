document.addEventListener('DOMContentLoaded', function() {
    const status = document.querySelector('.status');
    // status.innerText = 'The document is ready!';

    const btnSwitch = document.querySelector('.switch');
    // console.log(btnSwitch);

    const bodyElement = document.querySelector('body');

    btnSwitch.addEventListener('click', (e) => {
        // console.log(e);

        let lightsOn = btnSwitch.className;
        // console.log(lightsOn);

        if (lightsOn == 'switch on'){
            btnSwitch.className = 'switch off';
            bodyElement.className = 'dark';
            status.innerText = 'Hey, who turned off the lights?';
            // console.log('Turn it off!');
        } else if (lightsOn == 'switch off') {
            btnSwitch.className = 'switch on';
            bodyElement.className = 'light';
            status.innerText = 'It\'s so bright in here!';
            // console.log('Turn it on!');
        }
  })
})
