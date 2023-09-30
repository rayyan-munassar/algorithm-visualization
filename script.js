const form = document.querySelector('form');
const input = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');

const addStyle = (state, index) => {
    if (state == 'fail') {
        let current = document.querySelector(`.box${index + 1}`);
        current.style.backgroundColor = 'red';
    } else {
        current = document.querySelector(`.box${index + 1}`)
        current.style.backgroundColor = 'green';
    }

}

const displayMessage = (found, number) => {
    const message = document.querySelector('.message');
    if (found) {

        message.innerText = `the number: ${number} is exist`;
        message.style.color = 'green';

    } else {
        message.innerText = `the number ${number} is not exist!`;
        message.style.color = 'red';
    }
}


const binarySearch = async (array, value) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let median = Math.floor((low + high) / 2)
        addStyle('fail', median)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (array[median] == value) {
            addStyle('success', median)
            return median;
        }
        if (median < value) {
            low = median + 1;
        } else {
            high = median - 1;
        }
    }
    return null;
}



form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'rgb(54, 54, 54)';
    })



    const value = parseInt(input.value);

    const isFound = await binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], value) != null ? displayMessage(true, value) : displayMessage(false, value)

});



