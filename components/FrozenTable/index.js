import './index.scss';
import React, { useState, useCallback, useEffect } from 'react';
import qs from 'querystring';
import Iconfont from '@ifchange-eui/iconfont';
import Button from '@ifchange-eui/button';
import Tooltip from '@ifchange-eui/tooltip';
import Select from '@ifchange-eui/select';
import CustomizeColumn from '../CustomizeColumn';
import { useStore } from '../../store';
import { SET_TABLE_HEADER } from '../../store/reduceType';
import ajax from '@ifchange-core/ajax';
import notification from '@ifchange-eui/notification';

const Option = Select.Option;

function FrozenTable({ ...props }) {
    const [STORE, dispatch] = useStore();
    const { default_columns } = STORE;
    const [fixedNum, setFixedNum] = useState(1);
    const { styles, selectIdObj } = props;
    let timer = null

    useEffect(() => {
        return destory
    }, [])
    function destory() {
        notification.destroy()
    }

    const changeNumber = num => {
        setFixedNum(num);
        dispatch({
            type: SET_TABLE_HEADER,
            data: num
        });
    };

    const poll_fetch = (results) => {
        ajax.post('/atsng/export/getExportSchedules',
            { report_id: results.report_id }
        ).then(({ data: { results } }) => {
            const { export_id, filename, status } = results
            if (+status === 1) {
                clearInterval(timer)
                notification.close(`open${results.report_id}`)
                notification.open({
                    message: '数据导出完毕',
                    description: <span>
                        <p>{filename} 数据准备完成了,请点击下载链接</p>
                        <Button type='link' onClick={() => handelDownload(export_id)}>点击下载</Button>
                    </span>,
                    duration: 0
                })
            }
        }).catch(err => console.log('/atsng/export/getExportSchedules', err))
    }
    const download = () => {
        ajax.get('/atsng/v2/report/candidateExport', {
            params: {
                ...selectIdObj,
                is_export: 1
            }
        }).then(({ data: { results } }) => {
            notification.open({
                key: `open${results.report_id}`,
                message: '正在准备数据',
                description: '当数据准备完成后，你可以在下载列表中进行下载',
                duration: 0
            });
            // 轮询调用
            timer = setInterval(() => { poll_fetch(results) }, 2000)
        }).catch(err => console.log('/atsng/v2/report/candidateExport', err))
    };
    const handelDownload = (id) => {
        window.open(`/atsng/export/downloadExportData?export_id=${id}`)
    }

    const autoSet = (
        <div>
            <div className="autoSet">
                <span>冻结</span>
                <Select
                    size="small"
                    value={fixedNum}
                    onChange={changeNumber}
                    style={{ width: '60px', margin: '0 8px' }}>
                    <Option value="1" key={'@1'}>
                        1
                    </Option>
                    <Option value="2" key={'@2'}>
                        2
                    </Option>
                    <Option value="3" key={'@3'}>
                        3
                    </Option>
                    <Option value="4" key={'@4'}>
                        4
                    </Option>
                </Select>
                <span>列</span>
            </div>
            <CustomizeColumn selectedColumn={default_columns}>
                <p className="autoColums">自定义显示列</p>
            </CustomizeColumn>
        </div>
    );

    return (
        <div style={styles} className="contentNone">
            <div className="boxTitle">
                <span>
                    <Tooltip placement="bottom" title={autoSet}>
                        <Iconfont
                            className="setting-font-frozen"
                            type="Settings"
                        />
                    </Tooltip>
                    <Tooltip placement="bottom" onClick={download}>
                        <Iconfont
                            className="download-font-frozen"
                            type="stick"
                        />
                    </Tooltip>
                </span>
            </div>
        </div>
    );
}
export default FrozenTable;
