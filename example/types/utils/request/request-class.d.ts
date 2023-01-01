import { type AxiosInstance } from 'axios';
import type { HXRequestConfig, HXRequestInterceptors, CancelFn } from './types';
/**
 *
 * 封装一个请求类,通过传入一个config生成对应的请求实例
 * @author 何源
 */
export declare class HXRequest {
    instence: AxiosInstance;
    interceptorHooks?: HXRequestInterceptors;
    /**
     *
     * @param config 请求信息
     * @author 何源
     * @example
     * ```ts
  const requestInstace = new HXRequest({
  baseUrl:'demo/',
  timeout: 10000,
  header: { id: 'demoId' },
  interceptorHooks:{
  requestInterceptor: (config: AxiosRequestConfig) => {
    // do something...
    return config
  },
  requestInterceptorCatch: (err: any) => err,
  responseInterceptor: (res: AxiosResponse) => res,
  responseInterceptorCatch: (err: any) => err,
  ...
  })
     * ```
     */
    constructor(config: HXRequestConfig);
    /**
     * 传入的示例拦截器会在此执行
     */
    setupInterceptor(): void;
    /**
     * 封装的 request 方法
     */
    request<T = any>(config: HXRequestConfig): Promise<T>;
    /**
     * 封装的 get 方法
     */
    get(config: HXRequestConfig): Promise<any>;
    /**
     * 封装的 post 方法
     */
    post(config: HXRequestConfig): Promise<any>;
    /**
     * 封装的 delete 方法
     */
    delete(config: HXRequestConfig): Promise<any>;
    /**
     * 封装的 patch 方法
     */
    patch(config: HXRequestConfig): Promise<any>;
    /**
     * 封装的 put 方法
     */
    put(config: HXRequestConfig): Promise<any>;
    /**
     *
     * @param cancelFn 取消上一次请求
     * @returns new axios.CancelToken(cancelFn)
     * @author 何源
     * @example requestInstence.get({
          url: 'xxx,
          params,
          cancelToken: HXRequest.createCancelToken((cancel) => {
            this.needCancels.push(cancel)
          })
      */
    createCancelToken: (cancelFn: CancelFn['createFn']) => import("axios").CancelToken;
}
