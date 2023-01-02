export interface Type1 {
}
export interface Type2 {
}
export interface Type3 {
}
/**
 * This is **invalid** code link {@link Type1 Type2 Type3}.
 *
 * This is **invalid** code link {@link Type1 Type3}.
 *
 * This is **invalid** code link {@link `Type1`}.
 *
 * This is **invalid** url link {@link https://react.docschina.org/ https://react.docschina.org/docs/getting-started.html}.
 */
export declare function func1(): void;
/**
 * This is code link {@link Type1}.
 *
 * This is url link {@link https://react.docschina.org/}.
 */
export declare function func2(): void;