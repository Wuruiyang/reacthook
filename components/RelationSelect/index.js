// 三个关联(联动)的select 框
import styles from './index.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { get, debounce, isFunction } from 'lodash';
import ajax from '@ifchange-core/ajax';
import Select from '@ifchange-eui/select';
import Tree from '@ifchange-eui/tree';
import renderTreeNodes from './src/renderTreeNodes';

const Option = Select.Option;

function RelationSelect(props) {
    const { selectIdObj, setSelectIdObj, getTableData } = props;
    const [departmentList, setDepartmentList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [positionData, setPositionData] = useState({
        info: [],
        pagination: { page: 1, size: 10, total: 0 }
    });

    useEffect(() => {
        ajax.post('/atsng/v2/report/getOrganization', {})
            .then(res => {
                let results = get(res, 'data.results', {});
                if (Object.keys(results).length) {
                    setDepartmentList([{ ...results }]);
                }
            })
            .catch(res => {});
    }, []);

    const onChange = debounce((value, type) => {
        if (type === 'hunter') {
            getPositionList(value);
        }
        setSelectIdObj({
            ...selectIdObj,
            user_id: type === 'hunter' ? value : selectIdObj['user_id'],
            tob_position_id:
                type === 'hunter'
                    ? ''
                    : type === 'position'
                    ? value
                    : selectIdObj['tob_position_id']
        });
        isFunction(getTableData) &&
            getTableData({
                ...selectIdObj,
                page: 1,
                size: 10,
                user_id: type === 'hunter' ? value : selectIdObj['user_id'],
                tob_position_id:
                    type === 'hunter'
                        ? ''
                        : type === 'position'
                        ? value
                        : selectIdObj['tob_position_id']
            });
    }, 300);

    const handleSelect = debounce((selectedKeys, info) => {
        setUserList([]);
        setPositionData({
            info: [],
            pagination: { page: 1, size: 10, total: 0 }
        });
        getHrAccountList(selectedKeys.join(','));
        setSelectIdObj({
            user_id: '',
            tob_position_id: '',
            organization_id: selectedKeys.join(',')
        });
        isFunction(getTableData) &&
            getTableData({
                organization_id: selectedKeys.join(','),
                page: 1,
                size: 10
            });
    }, 300);

    //获取猎手数据
    const getHrAccountList = architecture_id => {
        if (!architecture_id) {
            return null;
        }
        ajax.post('/atsng/v2/report/getHrAccount', { architecture_id })
            .then(res => {
                let results = get(res, 'data.results', []);
                if (results.length) {
                    setUserList(
                        results.map(item => {
                            return {
                                uid: item.uid,
                                name: item.name || item.customize_name
                            };
                        })
                    );
                }
            })
            .catch(res => {});
    };

    //获取职位数据
    const getPositionList = user_id => {
        if (!user_id) {
            return null;
        }
        ajax.post('/atsng/v2/report/getPositionList', { user_id })
            .then(res => {
                let results = get(res, 'data.results', {});
                if (Object.keys(results).length) {
                    setPositionData({ ...results });
                }
            })
            .catch(res => {});
    };

    //
    // const handleScroll = (e) => {
    //     const clientHeight = e.target.clientHeight;
    //     const scrollTop = e.target.scrollTop;
    //     const scrollHeight = e.target.scrollHeight;

    // };

    // console.log('userList====>', userList);
    // console.log('positionData====>', positionData);

    return (
        <div className={styles.wrap}>
            <div className={styles.tree}>
                <Tree size="small" onSelect={handleSelect}>
                    {departmentList.length && renderTreeNodes(departmentList)}
                </Tree>
            </div>
            <Select
                placeholder="请选择猎手"
                size="small"
                overlayStyle={{ width: 192 }}
                style={{ width: 192 }}
                value={selectIdObj['user_id']}
                onChange={value => {
                    onChange(value, 'hunter');
                }}>
                {userList.length &&
                    userList.map(its => (
                        <Option value={its.uid} key={its.uid}>
                            {its.name}
                        </Option>
                    ))}
            </Select>
            <Select
                placeholder="请选择职位"
                size="small"
                overlayStyle={{ width: 192 }}
                style={{ width: 192 }}
                value={selectIdObj['tob_position_id']}
                // onScroll={handleScroll}
                onChange={value => {
                    onChange(value, 'position');
                }}>
                {positionData.info.length &&
                    positionData.info.map(its => (
                        <Option
                            value={its.tob_position_id}
                            key={its.tob_position_id}>
                            {its.name}
                        </Option>
                    ))}
            </Select>
        </div>
    );
}

export default RelationSelect;
