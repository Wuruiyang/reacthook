import React, { Fragment, useState } from 'react';
import CustomFieldDialog from '@ifchange-biz/custom-field-dialog';
import ajax from '@ifchange-core/ajax';
import { useStore } from '../../store';
import { CUSTOMIZE_COLUMN } from '../../store/reduceType';

import { dataList } from '../../config';

export default ({ children, selectedColumn = [] }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [defaultValue, setDefaultValue] = useState([1, 2, 3, 4]);
    const [STORE, dispatch] = useStore();
    const { default_columns } = STORE;

    const submit = keys => {
        setLoading(true);
        ajax.get('/atsng/v2/report/candidateSaveColumns', {
            params: {
                ids: keys.join(',')
            }
        })
            .then(res => {
                // console.log('resCUSTOMIZE_COLUMN===>', res);
                dispatch({
                    type: CUSTOMIZE_COLUMN,
                    data: keys
                });
                setLoading(false);
                setVisible(false);
            })
            .catch(res => {
                setLoading(false);
                setVisible(false);
            });
    };

    return (
        <Fragment>
            <CustomFieldDialog
                title="自定义显示列"
                visible={visible}
                value={selectedColumn}
                okButtonProps={{ loading }}
                transResult={dataList => {
                    return dataList.map(item => {
                        item.data = item.data.map(it => {
                            it.value = it.id + '';
                            it.label = it.name;
                            if (it.key === 'name') {
                                it.selected = true;
                                it.disabled = true;
                            }
                            return it;
                        });
                        return item;
                    });
                }}
                onOk={submit}
                onCancel={() => {
                    setVisible(false);
                }}
                onReset={() => defaultValue}
                dataList={dataList}
            />
            {React.cloneElement(children, {
                onClick: () => {
                    setVisible(true);
                }
            })}
        </Fragment>
    );
};
