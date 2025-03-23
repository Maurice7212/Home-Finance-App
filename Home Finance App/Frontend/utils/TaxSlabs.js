export const calculateTax = (income) => {
    if (income <= 600000) return 0;
    if (income <= 1200000) return income * 0.05;
    if (income <= 2400000) return income * 0.1;
    if (income <= 4800000) return income * 0.15;
    return income * 0.2;
};
