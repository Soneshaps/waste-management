import { describe, it, expect } from 'vitest';
import { formatCurrency, totalPrice } from '../utils';

describe('formatCurrency', () => {
  it('should format a number with pound symbol', () => {
    expect(formatCurrency(100)).toBe('£100');
    expect(formatCurrency(99.99)).toBe('£99.99');
    expect(formatCurrency(0)).toBe('£0');
  });

  it('should handle undefined values', () => {
    expect(formatCurrency(undefined)).toBe('£0');
  });

  it('should handle zero values', () => {
    expect(formatCurrency(0)).toBe('£0');
  });

  it('should handle negative values', () => {
    expect(formatCurrency(-100)).toBe('£-100');
  });
});

describe('totalPrice', () => {
  it('should return the sum of price and vat', () => {
    expect(totalPrice(100, 20)).toBe(120);
  });

  it('should return the sum of price and vat', () => {
    expect(totalPrice(100, 0)).toBe(100);
  });

  it('should return the sum of price and vat', () => {
    expect(totalPrice(100, undefined)).toBe(100);
  });
});
