const formatCurrency = (value: number | undefined) => {
  return `£${value ?? 0}`;
};

export { formatCurrency };
