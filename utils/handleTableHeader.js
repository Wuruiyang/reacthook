import { resumeKeys } from '../config';

//Table 表头数据  columns
//左边固定列数  numbers
//选中的列数 ==>显示哪些列数 [1,2,3]
// return  []

export default (columns = [], selected = [], numbers = 1) => {
    return Object.values(resumeKeys)
        .filter(item => {
            return selected.includes(item.id + '');
        })
        .map((its, index) => {
            if (index + 1 <= numbers) {
                return {
                    ...its,
                    fixed: 'left',
                    title: its.name,
                    key: its.dataIndex
                };
            }
            return {
                ...its,
                title: its.name || '-',
                key: its.dataIndex
            };
        });
};
