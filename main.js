console.log('You are a wizard!');

const hogHouses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff']

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}


const makeFormAppear = (e) => {
    if (e.target.id === 'jumbo-button') {
        document.getElementById('form').style.display = 'block';
    }
}

document.getElementById('jumbo-button').addEventListener('click', makeFormAppear)

let domString = '';

const sortStudentAndClear = (e) => {
    if (e.target.id === 'sort') {
    let studentHouse = hogHouses[Math.floor(Math.random() * hogHouses.length)];
    let studentName = document.getElementById('name-input').value
    domString += `
            <div id="${studentName}-card" class="card">
                <div class="card-body">
                    <h5 class="card-title">${studentName}</h5>
                    <p class="card-house">${studentHouse}</p>
                    <button type="button" id="expel" class="btn btn-danger">Expel</button>
                </div>
            </div>`

    printToDom('students-container', domString)
    }

    document.getElementById('form').reset();
}

document.getElementById('sort').addEventListener('click', sortStudentAndClear)


const expelStudent = (e) => {
    if (e.target.id === 'expel') {
        let studentToExpel = e.target.parentNode
        studentToExpel.style.display = 'none';
        console.log('hi')
    }
}
document.getElementById('expel').addEventListener('click', expelStudent)