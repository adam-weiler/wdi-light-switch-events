document.addEventListener('DOMContentLoaded', function() {
    const status = document.querySelector('.status');
    status.innerText = 'The document is ready!'

    const btnSwitch = document.querySelector('.switch');

    const bodyElement = document.querySelector('body');

    // console.log(btnSwitch);

    btnSwitch.addEventListener('click', (e) => {
        // console.log(e);

        let lightsOn = btnSwitch.className;
        // console.log(lightsOn)

        if (lightsOn == 'switch on'){
            btnSwitch.className = 'switch off';
            bodyElement.className = 'dark';
            // console.log('Turn it off!')
        } else if (lightsOn == 'switch off') {
            btnSwitch.className = 'switch on';
            bodyElement.className = 'light';
            // console.log('Turn it on!')
        }

  })

})

