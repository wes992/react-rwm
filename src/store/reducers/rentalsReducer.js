
const rentals = (state=[], action) => {
        if(action.type === 'fetchRentals'){
            return action.rentals;
        } else {
            return state;
        }
    }

    export default rentals;