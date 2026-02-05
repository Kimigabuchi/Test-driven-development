import { Dollar } from './Dollar';

test('multiplication', () => {
	const five = new Dollar(5);
	let product = five.times(2);
	expect(product.amount).toBe(10);
	product = five.times(3);
	expect(product.amount).toBe(15);
	const a = new Dollar(5);
	const b = new Dollar(5);
	const c = new Dollar(6);
	expect(a.equals(b)).toBe(true);
	expect(a.equals(c)).toBe(false);
});