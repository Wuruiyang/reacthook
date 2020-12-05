import { isEmpty } from 'lodash';
import {
    LOADING_STATUS,
    SET_TABLE_DATA,
    SET_TABLE_HEADER,
    CUSTOMIZE_COLUMN
} from './reduceType';
import handleTableHeader from '../utils/handleTableHeader';

export const initialData = {
    //请求的loading
    loading: false,
    //选择的table 头数据
    default_columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //页码页签
    pagination: {
        page: 1,
        size: 10,
        total: 10
    },
    //table 数据
    info: [],
    //table 表头数据
    tableHeaderArr: [],
    //table原始表头数据
    columns: [],
    //固定右
    fixedNum: 1
};

export const reducer = (state = initialData, action) => {
    // console.log('action===>', action);
    switch (action.type) {
        // 更新当前选中组织信息
        case SET_TABLE_DATA:
            return {
                ...state,
                loading: action.data.loading,
                pagination: action.data.pagination,
                default_columns: action.data.default_columns,
                info: action.data.info,
                columns: action.data.columns,
                tableHeaderArr: handleTableHeader(
                    action.data.columns || [],
                    action.data.default_columns || []
                )
            };
        case LOADING_STATUS:
            return { ...state, loading: action.data };
        case SET_TABLE_HEADER:
            return {
                ...state,
                fixedNum: action.data,
                tableHeaderArr: handleTableHeader(
                    state.tableHeaderArr,
                    state.default_columns,
                    action.data
                )
            };
        case CUSTOMIZE_COLUMN:
            return {
                ...state,
                default_columns: action.data,
                tableHeaderArr: handleTableHeader(
                    state.columns,
                    action.data,
                    state.fixedNum
                )
            };
        default:
            break;
    }
};
