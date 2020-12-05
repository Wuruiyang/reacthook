import STYLES from './index.module.scss';
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { setProvider, useStore } from './store';
import { LOADING_STATUS, SET_TABLE_DATA } from './store/reduceType';
import ajax from '@ifchange-core/ajax';
import Loading from '@ifchange-eui/loading';
import Table from '@ifchange-eui/table';
import Empty from '@ifchange-eui/empty';
import Pagination from '@ifchange-eui/pagination';
import RelationSelect from './components/RelationSelect';
import FrozenTable from './components/FrozenTable';

function LifeCycles(props) {
    const [STORE, dispatch] = useStore();
    const [selectIdObj, setSelectIdObj] = useState({
        organization_id: '',
        user_id: '',
        tob_position_id: ''
    });
    const {
        info = [],
        pagination = {},
        loading = false,
        tableHeaderArr = []
    } = STORE;
    useEffect(() => {
        getTableData({});
    }, []);

    const getTableData = (
        { page, size, organization_id, user_id, tob_position_id },
        type
    ) => {
        dispatch({
            type: LOADING_STATUS,
            data: true
        });
        ajax.post('/atsng/v2/report/candidateReport', {
            page: page || pagination.page,
            size: size || pagination.size,
            organization_id: !type
                ? organization_id
                : selectIdObj.organization_id,
            user_id: !type ? user_id : selectIdObj.user_id,
            tob_position_id: !type
                ? tob_position_id
                : selectIdObj.tob_position_id
        })
            .then(res => {
                dispatch({
                    type: SET_TABLE_DATA,
                    data: { ...get(res, 'data.results', {}), loading: false }
                });
            })
            .catch(res => {
                dispatch({
                    type: LOADING_STATUS,
                    data: false
                });
            });
    };

    //pagination
    const onJumpPage = (page, size) => {
        getTableData({ page, size }, 'pagination');
    };

    return (
        <div className={STYLES.wrap}>
            <div className={STYLES.header}>候选人全生命周期报表</div>
            <div className={STYLES.selectWrap}>
                <RelationSelect
                    selectIdObj={selectIdObj}
                    setSelectIdObj={setSelectIdObj}
                    getTableData={getTableData}
                />
                <FrozenTable selectIdObj={selectIdObj} />
            </div>
            {loading ? (
                <Loading type="page" style={{ height: 300 }}>
                    加载中...
                </Loading>
            ) : (
                <div className={STYLES.table}>
                    <Table
                        // height={600}
                        empty={
                            <Empty
                                className={STYLES.empty}
                                type="record"
                                desc="哦欧，暂时没有数据哦~~"
                            />
                        }
                        columns={tableHeaderArr}
                        dataSource={info}
                    />
                    {info.length ? (
                        <Pagination
                            showSelectPage
                            total={+pagination.total}
                            pageSize={+pagination.size}
                            current={+pagination.page}
                            onChange={onJumpPage}
                            className={STYLES.pagination}
                        />
                    ) : null}
                </div>
            )}
        </div>
    );
}

export default setProvider(LifeCycles);
