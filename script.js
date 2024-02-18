//Variables
const sortButton = document.getElementById('sort');
//End of Variables

//Functions
const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName('values-dropdown')].map((dropdown) => Number(dropdown.value));

};
//End of Functions

//Listeners
sortButton.addEventListener('click', sortInputArray);
//End of Listeners