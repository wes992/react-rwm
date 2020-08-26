import { rentalData } from '../store/data';


const fetchRentals = () => {
    return {
        type: 'fetchRentals',
        rentals: rentalData
    }
}

export default fetchRentals;