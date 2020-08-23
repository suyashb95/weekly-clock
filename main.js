
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

function onDateChange(e) {
    let noOfWeeks = Math.floor(dateDiffInDays(new Date(e.target.value), new Date('2080-01-01')) / 7);
    let noOfWeeksTillNow = Math.floor(dateDiffInDays(new Date(e.target.value), new Date()) / 7);
    clearGrid();
    createGrid(noOfWeeks, noOfWeeksTillNow);
}

function clearGrid() {
    document.querySelectorAll(".grid")
        .forEach((item) => item.remove());
}

function createGrid(noOfWeeks, noOfWeeksTillNow) {
    let container = document.getElementById("container");
    for (let i = 0; i < noOfWeeks; i++) {
        let block = document.createElement("div");
        block.classList.add("grid");
        block.style.backgroundColor = (i <= noOfWeeksTillNow) ? "red" : "yellow";
        container.appendChild(block);
    }
}