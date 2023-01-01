/**
 * return abs of the number
 * @param x 传入的数值x
 */
export function abs(x: number = 3) {
  return Math.abs(x);
}

/**
 * Add类
 */
export class Add {
  /**
   * return add of the number
   * @param x 传入的数值x
   * @param z 传入的数值z
   * @param y 传入的数值y
   */
  add(x: number = 1, y: number = 2) {}
}

/**
 * 创建一个新的函数
 */
export function createFunction() {
  return () => {
    console.log(1);
  };
}

/**
 * 这是一个创建而来的函数
 * @function
 *
 * @param {string} somebody - Somebody's name.
 *
 */
export const func = createFunction();
