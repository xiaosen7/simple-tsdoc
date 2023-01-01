import { bilinear } from './bilinear';
interface KrigingParams {
    krigingModel: 'exponential' | 'gaussian' | 'spherical';
    krigingSigma2: any;
    krigingAlpha: any;
}
/**
 * 数组操作类
 * @author 何源
 */
declare class ArrayOperator {
    /**
     * 克里金生成矢量等值面，浏览器和node都可以使用
     * @param featureCollection 必填，已有点数据，geojson格式
     * @param weight 必填，插值所依赖的圈中字段
     * @param krigingParams 必填，克里金插值算法参数设置
     * @param breaks 必填，等值面分级区间
     * @example
     * 示例代码: 计算克里金等值面
     * ```ts
  const kriging_contours = kriging.getVectorContourr(
    dataset,
    'level',
    {
      model: 'exponential',
      sigma2: 0,
      alpha: 100,
    },
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  )
     * ```
     */
    getVectorContour(featureCollection: JSON, weight: string, krigingParams: KrigingParams, breaks: any[]): any;
    /**
     * 克里金生成栅格等值面并绘制到canvas上，仅浏览器中使用
     * @param featureCollection geojson格式的featureclass数据集，feature是图形是点，必填
     * @param weight 绑定权重字段名称，必填
     * @param krigingParams 克里金插值参数，必填
     * @param canvas  渲染的canvas对象，必填
     * @param colors 渲染颜色分级。
     * @param xlim  当前视图窗口(extent)的x轴跨度
     * @param ylim 当前视图窗口(extent)的y轴跨度
     * @example
     * 示例代码: 图片等值面
     * ```ts
  kriging.drawCanvasContour(
    dataset,
    'level',
    {
      model: 'exponential',
      sigma2: 0,
      alpha: 100,
    },
    canvas,
    [extent[0], extent[2]],
    [extent[1], extent[3]],
    params.colors,
  )
     * ```
     */
    drawCanvasContour(featureCollection: JSON, weight: string, krigingParams: KrigingParams, canvas: HTMLElement, colors: any[], xlim: any, ylim: any): any;
    /**
     * 反距离加权法（Inverse Distance Weighted）插值
     * @param datas 填充计算点的位置
     * @param result 需要插值的格点坐标
     * @returns idw计算结果
     */
    idwcomputer(datas: any, result: any): any;
    /**
     * 创建一个去重后的 `target` 数组副本
     * @param target 要检查的数组
     * @returns 返回新的去重后的数组
     * @author 何源
     * @example
     * 如果我需要对 persion 数组去重，可以这样写
     * ```ts
  import { arrOperator } from '../..'
  const persion = [2, 1, 2]
  arrOperator.uniq(persion);
  // => [2, 1]
     * ```
     */
    uniq(target: any[]): any;
    /**
     * 根据 `depth` 递归减少 `target` 的嵌套层级
     * @param target 需要减少嵌套层级的数组
     * @param depth 最多减少的嵌套层级数
     * @returns 返回减少嵌套层级后的新数组
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { arrOperator } from '../..'
  const array = [1, [2, [3, [4]], 5]];
   
  arrOperator.flattenDepth(array, 1);
  // => [1, 2, [3, [4]], 5]
   
  arrOperator.flattenDepth(array, 2);
  // => [1, 2, 3, [4], 5]
     * ```
     */
    flattenDepth(target: any[], depth?: number): any;
    /**
     * 创建一个剔除所有给定值的新数组
     * @param target 要检查的数组
     * @param value 要剔除的值
     * @returns 返回过滤值后的新数组
     * @author 何源
     * @example
     * 例子
     * ```ts
  import { arrOperator } from '../..'
  arrOperator.without([2, 1, 2, 3], 1, 2);
  // => [3]
     * ```
     */
    without(target: any[], ...value: any): any;
}
declare const arrOperator: ArrayOperator;
export { bilinear, arrOperator };
