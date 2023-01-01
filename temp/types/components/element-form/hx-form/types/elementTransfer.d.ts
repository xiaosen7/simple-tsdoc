import { ElTransfer } from 'element-plus';
import { Component } from 'vue';
import { FormItemCommon } from './commonType';
declare type ElTransferProps = InstanceType<typeof ElTransfer>['$props'];
export interface HXTransfer extends ElTransferProps, FormItemCommon {
    element: 'ElementTransfer';
    events?: TransferEvents;
    slots?: TransferSlots;
}
export interface TransferEvents {
    change?: (currentValue: any, direction?: 'left' | 'right', keys?: any[]) => void;
    leftCheckChange?: (currentKeys?: any[], keys?: any[]) => void;
    rightCheckChange?: (currentKeys?: any[], keys?: any[]) => void;
}
export interface TransferSlots {
    leftFooter?: Component;
    rightFooter?: Component;
    customTransfer?: boolean;
}
export {};
