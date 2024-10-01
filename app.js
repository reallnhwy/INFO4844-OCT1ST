const switcher = document.querySelector(".btn")

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const classname = document.body.className;
    classname == "light-theme" ? this.textContent = "Dark" : this.textContent = "Light"; 
});



const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', function() {
     
        const buttonClass = button.className;

        document.body.classList.remove('red', 'orange', 'blue', 'black', 'pink');

        switch (true) {
            case button.classList.contains('red'):
                document.body.classList.add('red');
                break;
            case button.classList.contains('orange'):
                document.body.classList.add('orange');
                break;
            case button.classList.contains('blue'):
                document.body.classList.add('blue');
                break;
            case button.classList.contains('black'):
                document.body.classList.add('black');
                break;
            case button.classList.contains('pink'):
                document.body.classList.add('pink');
                break;
            default:
                console.log('No matching color class found');
        }
    });
});

