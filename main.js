console.log('You are a wizard!');

const init = () => {

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
                    <h5 class="card-title">${studentName}</h5>
                    <p class="card-house">${studentHouse}</p>
                    <button type="button" class="btn btn-danger expel">Expel</button>
            </div>`
    printToDom('students-container', domString)

    document.getElementById('form').reset();

    expelButtons = document.getElementsByClassName('expel');
    for (var i = 0; i < expelButtons.length; i++) {
        expelButtons[i].addEventListener('click', expelStudent);}
}
}

document.getElementById('sort').addEventListener('click', sortStudentAndClear)



const expelStudent = (e) => {
  studentToExpel = e.target.parentElement.id
document.getElementById(studentToExpel).style.display = 'none';
}
}
//document.getElementById('expel').addEventListener('click', expelStudent);
//document.getElementById(`expel-${studentName}`).addEventListener('click', expelStudent)

init();