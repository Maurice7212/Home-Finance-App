import { createContext, useState } from 'react';

const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
    const [income, setIncome] = useState([]);

    const addIncome = (incomeEntry) => 
        setIncome([...income, incomeEntry]);

    const deleteIncome = (id) => 
        setIncome(income.filter(entry => entry.id !== id));

    return (
        <IncomeContext.Provider value={{ income, addIncome, deleteIncome }}>
            {children}
        </IncomeContext.Provider>
    );
};

export default IncomeContext;
