
let count = 0;
const increment = () => {
    count++;
    document.getElementById('count').innerHTML = count;
    console.log(count);
}

const decrement = () => {
    count--;
    document.getElementById('count').innerHTML = count;
    console.log(count);
}

document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

