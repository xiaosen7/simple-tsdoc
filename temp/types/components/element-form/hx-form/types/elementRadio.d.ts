import { ElRadio, ElRadioGroup } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElRadioProps = InstanceType<typeof ElRadio>['$props'];
declare type ElRadioGroupProps = InstanceType<typeof ElRadioGroup>['$props'];
export interface HXRadio extends ElRadioGroupProps, FormItemCommon {
    element: 'ElementRadio';
    events?: RadioEvents;
    radioButton?: boolean;
    radioItems?: HXRadioItem[];
    radioItem?: HXRadioItem;
}
export interface RadioEvents {
    change?: (value?: string[]) => void;
}
interface HXRadioItem extends ElRadioProps {
    text?: string;
}
export {};
