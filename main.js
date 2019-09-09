console.log('You are a wizard!');


const makeFormAppear = (e) => {
    if (e.target.id === 'jumbo-button') {
        document.getElementById('form').style.display = "block";
    }
}

document.getElementById('jumbo-button').addEventListener('click', makeFormAppear)