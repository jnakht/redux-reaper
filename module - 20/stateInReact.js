
const React  = ( () => {
    let state = [];
    let index = 0;
    const useState = (initialValue) => {
        let stateIndex = index;
        index++; 
        // console.log('value of state', state);
        if (!state[stateIndex]) {
            state[stateIndex] = initialValue;
        }
        const setter = (newValue) => {
            state[stateIndex] = newValue;
        }
        return [state[stateIndex], setter];
    }
    return {
        useState
    }
})();

const { useState} = React;
const component = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('Jisan');
    console.log(count);
    console.log(name);


    setCount(2);
    setName('Nadim');
}

component();
component();