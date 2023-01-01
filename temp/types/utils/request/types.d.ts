import type { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
/**
 * 为了向传入的config类型扩展一个自定义类型 interceptorHooks
 * @author 何源
 */
export interface HXRequestConfig extends AxiosRequestConfig {
    interceptorHooks?: HXRequestInterceptors;
}
/**
 * 实例拦截器对象类型
 * @author 何源
 */
export interface HXRequestInterceptors {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (error: any) => any;
}
/**
 * 取消请求的相关类型
 * @author 何源
 */
export interface CancelFn {
    createFn: (cancenl: Canceler) => void;
    canceler: Canceler;
}
