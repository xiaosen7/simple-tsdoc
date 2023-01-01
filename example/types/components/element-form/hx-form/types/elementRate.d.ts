import { ElRate } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElRateProps = InstanceType<typeof ElRate>['$props'];
export interface HXRate extends ElRateProps, FormItemCommon {
    element: 'ElementRate';
    events?: RateEvents;
}
export interface RateEvents {
    change?: (value?: any) => void;
}
export {};
