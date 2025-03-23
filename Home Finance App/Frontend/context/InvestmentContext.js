import { createContext, useState } from 'react';

const InvestmentContext = createContext();

export const InvestmentProvider = ({ children }) => {
    const [investments, setInvestments] = useState([]);

    const addInvestment = (investment) => 
        setInvestments([...investments, investment]);

    const removeInvestment = (id) => 
        setInvestments(investments.filter(inv => inv.id !== id));

    return (
        <InvestmentContext.Provider value={{ investments, addInvestment, removeInvestment }}>
            {children}
        </InvestmentContext.Provider>
    );
};

export default InvestmentContext;
