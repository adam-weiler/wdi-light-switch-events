document.addEventListener('DOMContentLoaded', function() {
    const status = document.querySelector('.status');
    status.innerText = 'The document is ready!'

    const btnSwitch = document.querySelector('.switch');

    // console.log(btnSwitch);

    btnSwitch.addEventListener('click', (e) => {
        // console.log(e);

        let lightsOn = btnSwitch.className;
        // console.log(lightsOn)

        if (lightsOn == 'switch on'){
            btnSwitch.className = 'switch off';
            // console.log('Turn it off!')
        } else if (lightsOn == 'switch off') {
            btnSwitch.className = 'switch on';
            // console.log('Turn it on!')
        }

  })

})

