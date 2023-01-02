import { CSSProperties } from 'vue';
import { ElPagination } from 'element-plus';
declare type ElPaginationProps = InstanceType<typeof ElPagination>['$props'];
export interface PaginationConfig extends ElPaginationProps {
    events?: PaginationEvent;
    otherOptions?: {
        style?: Partial<CSSProperties>;
    };
}
export interface PaginationEvent {
    sizeChange?: (pageSize: number) => any;
    currentChange?: (currentPage: number) => any;
    prevClick?: (currentPage: number) => any;
    nextClick?: (currentPage: number) => any;
}
export {};
