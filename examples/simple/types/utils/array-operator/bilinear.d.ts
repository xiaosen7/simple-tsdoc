/**
 * 双线性插值 双三次插值法
 */
declare class Bilinear {
    /**
     * 数据缩放并插值
     * @param w 目标矩阵宽度
     * @param h 目标矩阵高度
     * @param data 源数据矩阵（二维数组）
     * @param type 插值方式，1：双线性插值，2：三次内插法插值
     */
    scaleData(w: any, h: any, data: any, type?: number): any[];
    /**
     * 双线性插值
     * @param sw 目标矩阵的宽度
     * @param sh 目标矩阵的高度
     * @param x_ 目标矩阵中的x坐标
     * @param y_ 目标矩阵中的y坐标
     * @param data 源数据矩阵（二维数组）
     */
    interpolation(sw: any, sh: any, x_: any, y_: any, data: any): number;
    /**
     * 三次内插法插值
     * @param sw 目标矩阵的宽度
     * @param sh 目标矩阵的高度
     * @param x_ 目标矩阵中的x坐标
     * @param y_ 目标矩阵中的y坐标
     * @param data 源数据矩阵（二维数组）
     */
    cubicInterpolation(sw: any, sh: any, x_: any, y_: any, data: any): number;
    /**
     * 三次内插法插值中，基于BiCubic基函数，计算源坐标v，最近的4*4的坐标和坐标对应的权重
     * @param v 目标矩阵中坐标对应在源矩阵中坐标值
     */
    getCubicWeight(v: any): {
        weight: any[];
        coordinate: any[];
    };
}
export declare const bilinear: Bilinear;
export {};
