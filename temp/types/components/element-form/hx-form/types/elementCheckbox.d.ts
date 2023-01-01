import { ElCheckbox, ElCheckboxGroup } from 'element-plus';
import { FormItemCommon } from './commonType';
declare type ElCheckboxProps = InstanceType<typeof ElCheckbox>['$props'];
declare type ElCheckGroup = InstanceType<typeof ElCheckboxGroup>['$props'];
export interface HXCheckbox extends ElCheckGroup, FormItemCommon {
    element: 'ElementCheckbox';
    events?: CheckboxEvents;
    checkboxButton?: boolean;
    checkboxItems?: ElCheckboxProps[];
    checkboxItem?: ElCheckboxProps;
}
export interface CheckboxEvents {
    change?: (value?: string[]) => void;
}
export {};
