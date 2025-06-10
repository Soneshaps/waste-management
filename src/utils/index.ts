const formatCurrency = (value: number | undefined) => {
  return `£${value ?? 0}`;
};

const totalPrice = (price: number | undefined, vat: number | undefined) => {
  return (price ?? 0) + (vat ?? 0);
};

export { totalPrice, formatCurrency };
