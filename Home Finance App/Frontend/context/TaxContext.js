import { createContext, useState } from 'react';
import { calculateTax } from '../helpers';

const TaxContext = createContext();

export const TaxProvider = ({ children }) => {
    const [tax, setTax] = useState(0);

    const updateTax = (income) => setTax(calculateTax(income));

    return (
        <TaxContext.Provider value={{ tax, updateTax }}>
            {children}
        </TaxContext.Provider>
    );
};

export default TaxContext;
