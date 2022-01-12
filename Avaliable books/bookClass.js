class Books {
    constructor(title, author, ISBN, numCopies)
    {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
}
const inTheNameOfTheWind = new Books("In The Name of the Wind", "Patrick Rothfuss", 123456789, 50);

function getAvailability(bookParam) {
    if (bookParam.numCopies < 0) {
        console.log(`Something has gone wrong. Title "${bookParam.title}". Copies: ${bookParam.numCopies}`);
        somethingsWrong(bookParam);
    }
        if (bookParam.numCopies === 0) {
            console.log(`"${bookParam.title}" is not available`);
        }
        else if (bookParam.numCopies <= 10) {
            console.log(`"${bookParam.title}" is in low stock`);
        }
        else if (bookParam.numCopies > 10) {
            console.log(`stock of title "${bookParam.title}" is available. ${bookParam.numCopies} in stock`);
            }
    
}

function sellItem(numSold = 1, item) {
    // Man kunne ende med at have -stock, så det her blev wrapped og prøves om numSold er højere end this.numCopies
    if (numSold > item.numCopies) {
        console.log(`We dont have that amount in stock`) 
    }
    else {
        if (numSold === 1) {
            --item.numCopies;
        }
        else {
            item.numCopies = item.numCopies - numSold;
        }
    }
}
function somethingsWrong(item) { //sender info omkring at bogen/item er i minus stock, hvilket ikke burde kunne lade sig gøre
    let timeOfIncident = new Date();
    alert(timeOfIncident);
    console.log(`"${item.title}, ${timeOfIncident}"SEND ITEM TO FILE`); //send information plus date til file.
}
function checkChoice() {//skal tjekke navbar choice så sellItem() kan samle den op
    let choice = navbarchoice;
    return navbarchoice;
}
getAvailability(inTheNameOfTheWind);

sellItem(1, inTheNameOfTheWind);
getAvailability(inTheNameOfTheWind);
sellItem(38, inTheNameOfTheWind);
getAvailability(inTheNameOfTheWind);
sellItem(10, inTheNameOfTheWind);
getAvailability(inTheNameOfTheWind);
sellItem(19, inTheNameOfTheWind);
getAvailability(inTheNameOfTheWind);
sellItem(1, inTheNameOfTheWind);
getAvailability(inTheNameOfTheWind);

console.log(inTheNameOfTheWind);
