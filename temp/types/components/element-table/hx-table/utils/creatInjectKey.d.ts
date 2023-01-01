import { TableInstance } from 'element-plus';
export interface FormDataInjectKey {
    getInstance: (instance: TableInstance) => void;
}
declare const _default: InjectionKey<FormDataInjectKey>;
export default _default;
