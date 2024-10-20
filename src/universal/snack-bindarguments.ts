export function snackBindArguments<T>(snippet: T, ...boundArgs: any[]): T {
    return ((node: HTMLElement, ...args: any[]) => {
        for(let i = 0; i < boundArgs.length; i++) {
            if(typeof boundArgs[i] !== 'undefined') {
                args[i] = () => boundArgs[i]
            }
        }
        // @ts-ignore --- svelte lies to ts/ide
        snippet(node, ...args);
    }) as T
}