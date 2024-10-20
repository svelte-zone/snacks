export function snackBindArguments<T>(snippet: T, ...boundArgs: unknown[]): T {
	return ((node: HTMLElement, ...args: unknown[]) => {
		for (let i = 0; i < boundArgs.length; i++) {
			if (typeof boundArgs[i] !== 'undefined') {
				args[i] = () => boundArgs[i];
			}
		}
		// @ts-expect-error svelte lies to ts, so we do it too
		snippet(node, ...args);
	}) as T;
}
