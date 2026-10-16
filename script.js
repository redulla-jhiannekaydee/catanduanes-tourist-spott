/* activity 1 */

const guideName = 'Catanduanes Tourist Spots';
const currentYear = new Date().getFullYear();

let placeCount = 0;

const guideNameGl = document.getElementById("guideName");
if (guideNameGl) {
    guideNameGl.textContent = guideName;
}

const copyrightFooter = document.getElementById("copyrightLine");
if (copyrightFooter) {
    copyrightFooter.textContent = `© ${currentYear} ${guideName}`;
}

const placeCountPl = document.getElementById("placeCount");
if (placeCountPl) {
    const placeCards = document.querySelectorAll(".place-card");
    placeCount = placeCards.length;
}


/* activity 2
1. rating */

const placeRating = 4.7;

let ratingLabel;
if (placeRating >= 4) {
    ratingLabel = "Highly recommended!";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you are nearby";
}

const ratingLabelRl = document.getElementById("ratingLabel");
if (ratingLabelRl) {
    ratingLabelRl.textContent = ratingLabel;
}



/* 2. budget */

const priceLevel = 1; /* 1 - cheap 2 - between cheap and pricey 3 - pricey */
const isOpenNow = true;

const isGoodBudgetMatch = priceLevel <= 1 && isOpenNow === true;
const budgetMessage = isGoodBudgetMatch ? "Good option right now" : "Maybe another time";

const budgetLabelBl = document.getElementById("budgetLabel");
if (budgetLabelBl) {
    budgetLabelBl.textContent = budgetMessage;
}

/* 3. distance */
const isWalkingDistance = false;
const distanceMessage =  isWalkingDistance ? "Walking distance" : "Better to commute";

const distanceLabelDl = document.getElementById("distanceLabel");
if (distanceLabelDl) {
    distanceLabelDl.textContent = distanceMessage;
}

console.log('Guide Name:', guideName);
console.log('Current Year:', currentYear);
console.log('Copyright:', copyrightFooter.textContent);
console.log('Number of Places:', placeCount);
console.log('Rating:', ratingLabel);
console.log('Budget:', budgetMessage);
console.log('Distance:', distanceMessage);
