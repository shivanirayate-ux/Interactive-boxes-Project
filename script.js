const boxes = document.querySelectorAll('.box');
const radios = document.querySelectorAll('.bundle-radio');
const totalPrice = document.getElementById("total-price");

function resetBoxes() {
    boxes.forEach(box => box.classList.remove("selected"));
}
radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        resetBoxes();
        const selectedBox = boxes[index];
        selectedBox.classList.add("selected");
    });
});
