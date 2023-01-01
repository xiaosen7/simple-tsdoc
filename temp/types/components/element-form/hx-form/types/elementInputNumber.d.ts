import { ElInputNumber } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElInputNumberProps = InstanceType<typeof ElInputNumber>['$props'];
export interface HXInputNumber extends ElInputNumberProps, FormItemCommon {
    element: 'ElementInputNumber';
    events?: InputNumberEvents;
}
export interface InputNumberEvents {
    change?: (currentValue?: any, oldValue?: any) => void;
    blur?: (event?: Event) => void;
    focus?: (event?: Event) => void;
}
export {};
