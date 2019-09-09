console.log('You are a wizard!');

const hogHouses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff']

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}


const makeFormAppear = (e) => {
    if (e.target.id === 'jumbo-button') {
        document.getElementById('form').style.display = "block";
    }
}

document.getElementById('jumbo-button').addEventListener('click', makeFormAppear)

const sortStudentAndClear = (e) => {
    if (e.target.id === 'sort') {
    let studentHouse = hogHouses[Math.floor(Math.random() * hogHouses.length)];
    let domString = '<div class="row">';
    let studentName = document.getElementById('name-input').innerText
    domString += `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${studentName}</h5>
                    <p class="card-house">${studentHouse}</p>
                    <button type="button" class="btn btn-danger">Expel</button>
                </div>
            </div>
        </div>
    </div>`;

    printToDom('students-container', domString)
    }

    document.getElementById('form').reset();
}

document.getElementById('sort').addEventListener('click', sortStudentAndClear)