
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MAX_AGE = 80

function dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

function addYears(date, yearsToAdd) {
    let newDate = new Date(date.getTime());
    newDate.setFullYear(date.getFullYear() + yearsToAdd);
    return newDate;
}

function daysToWeeks(noOfDays) {
    return Math.floor(noOfDays / 7);
}

function onDateChange(e) {
    let birthDate = new Date(e.target.value);
    let deathDate = addYears(birthDate, _MAX_AGE);

    let noOfWeeksTilLDeath = daysToWeeks(dateDiffInDays(birthDate, deathDate));
    let noOfWeeksTillNow = daysToWeeks(dateDiffInDays(birthDate, new Date()));

    clearGrid();
    createGrid(noOfWeeksTilLDeath, noOfWeeksTillNow);
}

function clearGrid() {
    document.querySelectorAll(".grid")
        .forEach((item) => item.remove());
}

function createGrid(noOfWeeksTilLDeath, noOfWeeksTillNow) {
    let container = document.getElementById("container");
    for (let i = 0; i < noOfWeeksTilLDeath; i++) {
        let block = document.createElement("div");
        block.classList.add("grid");
        block.style.backgroundColor = (i <= noOfWeeksTillNow) ? "red" : "yellow";
        container.appendChild(block);
    }
}
