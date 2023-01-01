/**
 * 对象操作类
 * @author 何源
 */
declare class ObjectOperator {
    /**
     * 对象深拷贝
     * @param target 需要深拷贝的对象
     * @returns 深拷贝的对象
     * @author 何源
     * @example
     * 如果我需要拷贝一个新的 persion 对象，可以这样写
     * ```ts
  import { objOperator } from '../..'
  const newPersion = objOperator.cloneDeep(persion);
     * ```
     */
    cloneDeep(target: any): any;
    /**
     * 对象合并
     * @param target 合并的目标对象
     * @param sources 被合并的对象
     * @note 注意,该方法会改变 target 目标对象
     * @returns 合并之后的 target 对象
     * @author 何源
     * @example
     * 如果我需要将 teacher 对象合并到 persion 对象中，可以这样写
     * ```ts
  import { objOperator } from '../..'
  const persion = {
    a: [{ b: 2 }, { d: 4 }],
  }
  const teacher = {
    a: [{ c: 3 }, { e: 5 }],
  }
  objOperator.merge(persion, teacher)
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     * ```
     */
    merge(target: any, sources: any): any;
    /**
     * 删除 target 对象的属性
     * @param target 目标对象
     * @param props 需要删除的属性所组成的数组
     * @returns 删除指定属性之后的 target 对象
     * @author 何源
     * 如果我需要删除 obj上的a和c属性，可以这样写
     * ```ts
  import { objOperator } from '../..'
  const obj = { a: 1, b: '2', c: 3 }
  objOperator.omit(obj, ['a', 'c'])
  // => { 'b': '2' }
     * ```
     */
    omit(target: any, props: any[]): any;
    /**
     * 创建一个从 target 中选中的属性的对象
     * @param target 目标对象
     * @param props 选中的属性所组成的数组
     * @returns 从 target 对象中指定改的属性所组成的一个新对象
     * @author 何源
     * @example
     * 如果我需要选中 object 上的 a 和 c 属性，可以这样写
     * ```ts
  import { objOperator } from '../..'
  const object = { a: 1, b: '2', c: 3 }
  objOperator.pick(object, ['a', 'c'])
  // => { 'a': 1, 'c': 3 }
     * ```
     */
    pick(target: any, props: any[]): any;
    /**
     * 获取一个对象,该对象是由两个对象的并集组成,如果两个对象包含相同的属性,则取 target 对象的属性值
     * @param target 第一个并集对象
     * @param source 第二个并集对象
     * @returns 由两个对象属性的并集组成的一个新对象
     * @author 何源
     * @example
     * 如果我需要一个 target 对象和 source 对象的并集对象，可以这样写
     * ```ts
  import { objOperator } from '../..'
  const target = { a: 1, b: '2', c: 3 }
  const source = { a: 1, d: 4 }
  objOperator.union(target, source)
  // => { "a": 1, "b": "2", "c": 3, "d": 4 }
     * ```
     */
    union(target: any, source: any): any;
    /**
     * 判断传入的 target 是不是一个对象
     * @param target 要检查的值
     * @returns boolean 如果 target 为一个对象，那么返回 true，否则返回 false
     * @author 何源
     * @example
     * ```ts
  import { objOperator } from '../..'
  objOperator.isObject({});
  // => true
  
  objOperator.isObject([1, 2, 3]);
  // => true
   
  objOperator.isObject(null);
  // => false
     * ```
     */
    isObject(target: any): any;
    /**
     * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"
     * @param target 要检查的值
     * @returns boolean 如果 target 为一个类对象，那么返回 true，否则返回 false
     * @author 何源
     * @example
     * ```ts
  import { objOperator } from '../..'
  objOperator.isObjectLike({});
  // => true
   
  objOperator.isObjectLike([1, 2, 3]);
  // => true
   
  objOperator.isObjectLike(null);
  // => false
     * ```
     */
    isObjectLike(target: any): any;
    /**
     * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null
     * @param target 要检查的值
     * @returns boolean 如果 value 为一个普通对象，那么返回 true，否则返回 false
     * @author 何源
     * @example
     * ```ts
  import { objOperator } from '../..'
  function Foo() {
    this.a = 1;
  }
   
  objOperator.isPlainObject(new Foo);
  // => false
   
  objOperator.isPlainObject([1, 2, 3]);
  // => false
   
  objOperator.isPlainObject({ 'x': 0, 'y': 0 });
  // => true
   
  objOperator.isPlainObject(Object.create(null));
  // => true
     * ```
     */
    isPlainObject(target: any): any;
    /**
     * 对象排序 返回一个由对象的 key 所组成的数组
     * @param target 需要排序的对象
     * @param prop 需要排序的属性,不传该值的默认按照对象的key值进行排序
     * @param order 排序的顺序,默认为 升序排序
     * @returns 排序之后的 target 对象所对应的 key 值数组
     * @author 何源
     * @example
     * ```ts
  import { objOperator } from '../..'
  const demo = {
    a: { id: 10 },
    c: { id: 6 },
    5: { id: 12 },
    b: { id: 3 },
  };
  
  objOperator.sort(demo);
  // => ['5', 'a', 'b', 'c'];
  
  objOperator.sort(demo, 'id');
  // => ['b', 'c', 'a', '5'];
  
  objOperator.sort(demo, 'id', 'descending');
  // => ['5', 'a', 'c', 'b'];
     * ```
     */
    sort(target: any, prop?: any, order?: 'ascending' | 'descending'): any[];
}
export declare const objOperator: ObjectOperator;
export {};
