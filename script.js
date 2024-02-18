//Variables
const sortButton = document.getElementById('sort');
//End of Variables

//Functions
const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));

    updateUI(inputValues);
};

const updateUI = (array = []) => {

    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
}
//End of Functions

//Listeners
sortButton.addEventListener('click', sortInputArray);
//End of Listeners