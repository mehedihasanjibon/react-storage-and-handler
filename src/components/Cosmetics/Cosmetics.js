import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);


    // const cosmetics = [
    //     // {id: 1, name: 'Alta' , price: 100},
    //     // {id: 2, name: 'palis' , price: 200},
    //     // {id: 3, name: 'malis' , price: 300},
    //     // {id: 4, name: 'balis' , price: 400},
    //     // {id: 5, name: 'nalis' , price: 500},

    //     {
    //         "id": "64973407fb9780c307da0789",
    //         "price": 88,
    //         "name": "Myra Vasquez"
    //       },
    //       {
    //         "id": "64973407c6d02283569fafd3",
    //         "price": 389,
    //         "name": "Larson Diaz"
    //       },
    //       {
    //         "id": "649734079d6124e1be9f165a",
    //         "price": 60,
    //         "name": "Patton Ochoa"
    //       },
    //       {
    //         "id": "649734079d863466b1dd3c01",
    //         "price": 568,
    //         "name": "Blanca Sharpe"
    //       },
    //       {
    //         "id": "64973407e6da61998c70ebb4",
    //         "price": 98,
    //         "name": "Weber Cross"
    //       }
    // ]

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])

    return (
        <div>
            <h1> Welcome to my Cosmetics store </h1>
            <p> Total: {total}</p>

            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;