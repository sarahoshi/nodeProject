let initializeState = [
    {
        id: 1,
        name: 'Iphone X',
        img: '',
        price: 500,
        description: 'Good product',
        inventory: 15,
        rate:2
    },
    {
        id: 2,
        name: 'Iphone 8',
        img: '',
        description: 'Good product',
        price: 400,
        inventory: 15,
        rate: 3
    },
    {
        id: 3,
        name: 'Iphone XS',
        img: '',
        description: 'Good product',
        price: 800,
        inventory: 15,
        rate:5
    }
]

const products = (state = initializeState, action) => {
    switch(action.type) {
        case 1:
            return
        default: 
            return [...initializeState]
    }
}

export default products