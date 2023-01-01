import { Component } from 'vue';
import { PaginationConfig } from './paginationType';
import { ElTable, ElTableColumn } from 'element-plus';
export interface HXTableConfig {
    tableConfig: TableConfig;
    paginationConfig?: PaginationConfig;
}
declare type ElTableProps = InstanceType<typeof ElTable>['$props'];
declare type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
export interface TableConfig extends ElTableProps {
    slots?: TableSlots;
    events?: TableEvents;
    propList: HXTableItem[];
}
export interface HXTableItem extends ElTableColumnProps {
    otherOptions?: {
        hidden?: boolean;
        slotName?: string;
        headerSlot?: string;
    };
}
export interface TableEvents {
    select?: (selection?: any[], row?: any) => any;
    selectAll?: (selection?: any[]) => any;
    selectionChange?: (selection: any[]) => any;
    cellMouseEnter?: (row?: any, column?: any, cell?: any, event?: any) => any;
    cellMouseLeave?: (row?: any, column?: any, cell?: any, event?: any) => any;
    cellClick?: (row?: any, column?: any, cell?: any, event?: any) => any;
    cellDblclick?: (row?: any, column?: any, cell?: any, event?: any) => any;
    cellContextmenu?: (row?: any, column?: any, cell?: any, event?: any) => any;
    rowClick?: (row?: any, column?: any, event?: any) => any;
    rowContextmenu?: (row?: any, column?: any, event?: any) => any;
    rowDblclick?: (row?: any, column?: any, event?: any) => any;
    headerClick?: (column?: any, event?: any) => any;
    headerContextmenu?: (column?: any, event?: any) => any;
    sortChange?: (sort?: any) => any;
    filterChange?: (filters?: any) => any;
    currentChange?: (currentRow?: any, oldCurrentRow?: any) => any;
    headerDragend?: (newWidth?: any, oldWidth?: any, column?: any, event?: any) => any;
    expandChange?: (row?: any, expanded?: any) => any;
}
export interface TableSlots {
    append?: string | Component;
    empty?: string | Component;
}
export {};
