export const formatCurrency = (amount) =>
    `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
