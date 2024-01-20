const checkButton = document.getElementById("check");
const filenameElement = document.getElementById("filename");
checkButton.addEventListener("click", check);

function check() {
    const filename = filenameElement.value;
    console.log(filename);
}