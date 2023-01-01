import type { App, Component } from 'vue';
/**
 * 为组件添加一个install属性，可以让vue实例（app）安装这个组件
 * @param comp - vue组件
 * @returns 返回传入的组件（被附加了install属性）
 * @author 王首人
 * @public
 * @example
 * e.g. 假设现在有个叫Counter的Vue组件，要为其添加install属性，可以这样写
 * ```ts
 * const NewCounter = withInstall(Counter);
 * NewCounter.install(app);
 * ```
 */
export declare function withInstall<T extends Component>(comp: T): T & {
    install: (app: App) => any;
};
