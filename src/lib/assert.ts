export function assert<O, T>(
	value: T,
	fn: (v: T) => v is T & O,
	message = 'assertion failed'
): T & O {
	if (!fn(value)) {
		throw new Error(message);
	}
	return value;
}

export function isDefined<T>(value: T): value is NonNullable<T> {
	return value !== undefined && value !== null;
}

export function assertIsDefined<T>(v: T): asserts v is NonNullable<T> {
	if (v === undefined || v === null) {
		throw new Error("value wasn't defined");
	}
}
