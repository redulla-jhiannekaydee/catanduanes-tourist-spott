/* activity 1 */

const guideName = 'Catanduanes Tourist Spots';
const currentYear = new Date().getFullYear();

let placeCount = 0;

const guideNameWrite = document.getElementById('guideName');
guideNameWrite.textContent = guideName;

const copyrightFooter = document.getElementById('copyrightLine');
copyrightFooter.textContent = `© ${currentYear} ${guideName}`;

const placeCards = document.querySelectorAll('.place-card');
placeCount = placeCards.length;

const placeCountPl = document.getElementById('placeCount');
placeCountPl.textContent = placeCount;

console.log('Guide Name:', guideName);
console.log('Current Year:', currentYear);
console.log('Copyright:', copyrightFooter.textContent);
console.log('Number of Places:', placeCount);