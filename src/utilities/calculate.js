const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

// const numbers = [20, 24, 235, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer , 0);

// const item = [
//     {id: 1, name: 'Alta' , price: 100},
//     {id: 2, name: 'Alta' , price: 100},
//     {id: 3, name: 'Alta' , price: 100},
//     {id: 4, name: 'Alta' , price: 100},
//     {id: 5, name: 'Alta' , price: 100},
// ]

// const itemsSumReducer = (previous, current) => previous + current.price;
// const itemTotal = item.reduce(itemsSumReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default add;
export {add, multiply, getTotalPrice as getTotal};