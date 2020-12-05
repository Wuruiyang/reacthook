import React from 'react';
import Table from '@ifchange-eui/table';
import Tooltip from '@ifchange-eui/tooltip';
import { isArray } from 'lodash';

const Languageskill = ({ data = [] }) => {
    return (
        <Table
            dataSource={data}
            columns={[
                {
                    title: '语种',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '熟练程度',
                    dataIndex: 'level',
                    key: 'level'
                }
            ]}
        />
    );
};

const Employment = ({ data = [] }) => {
    return (
        <Table
            dataSource={data}
            columns={[
                {
                    title: '录用报批人',
                    dataIndex: 'approval_employee',
                    key: 'approval_employee'
                },
                {
                    title: '报批结果',
                    dataIndex: 'approval_status',
                    key: 'approval_status'
                }
            ]}
        />
    );
};

const Second = ({ data = [] }) => {
    return (
        <Table
            dataSource={data}
            columns={[
                {
                    title: '复试面试官',
                    dataIndex: 'second_employee',
                    key: 'second_employee'
                },
                {
                    title: '复试评价',
                    dataIndex: 'second_overall_comment',
                    key: 'second_overall_comment'
                },
                {
                    title: '复试结果',
                    dataIndex: 'second_interview_status',
                    key: 'second_interview_status'
                }
            ]}
        />
    );
};

const First = ({ data = [] }) => {
    return (
        <Table
            dataSource={data}
            columns={[
                {
                    title: '初试面试官',
                    dataIndex: 'first_employee',
                    key: 'first_employee'
                },
                {
                    title: '初试评价',
                    dataIndex: 'first_overall_comment',
                    key: 'first_overall_comment'
                },
                {
                    title: '初试结果',
                    dataIndex: 'first_interview_status',
                    key: 'first_interview_status'
                }
            ]}
        />
    );
};

// 列表头数据
//baseType  1.基本信息  2.应聘信息 3.面试信息  4. 录用信息  5.入职跟踪状态

const resumeKeys = {
    name: {
        id: 1,
        dataIndex: 'name',
        name: '姓名',
        title: '姓名',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 120,
        key: 'name',
        columnConfig: {
            type: 'name'
        }
    },
    sex: {
        id: 2,
        dataIndex: 'sex',
        name: '性别',
        title: '性别',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 76,
        key: 'sex',
        columnConfig: {
            type: 'sex'
        }
    },
    phone: {
        id: 3,
        dataIndex: 'phone',
        name: '手机号',
        title: '手机号',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 186,
        key: 'phone',
        columnConfig: {
            type: 'phone'
        }
    },
    email: {
        id: 4,
        dataIndex: 'email',
        name: '邮箱',
        title: '邮箱',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 200,
        key: 'email',
        columnConfig: {
            type: 'email'
        }
    },
    school_status: {
        id: 40,
        dataIndex: 'school_status',
        name: '学校类别',
        title: '学校类别',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 230,
        key: 'school_status',
        columnConfig: {
            type: 'school_status'
        }
    },
    certificate_number: {
        id: 5,
        dataIndex: 'certificate_number',
        name: '身份证',
        title: '身份证',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 230,
        key: 'certificate_number',
        columnConfig: {
            type: 'certificate_number'
        }
    },
    highest_school: {
        id: 6,
        dataIndex: 'highest_school',
        name: '最高学历毕业院校',
        title: '最高学历毕业院校',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 260,
        key: 'highest_school',
        columnConfig: {
            type: 'highest_school'
        }
    },
    speciality: {
        id: 7,
        dataIndex: 'speciality',
        name: '专业',
        title: '专业',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 150,
        key: 'speciality',
        columnConfig: {
            type: 'speciality'
        }
    },
    degree: {
        id: 8,
        dataIndex: 'degree',
        name: '学历',
        title: '学历',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 80,
        key: 'degree',
        columnConfig: {
            type: 'degree'
        }
    },
    language_skill: {
        id: 9,
        dataIndex: 'language_skill',
        name: '语言能力',
        title: '语言能力',
        header_type: '',
        type: 1,
        typeName: '基本信息',
        width: 80,
        key: 'language_skill',
        columnConfig: {
            type: 'language_skill'
        },
        render: ({ index, data: { language_skill } }) => {
            if (isArray(language_skill)) {
                return (
                    <Tooltip
                        placement="bottom"
                        title={<Languageskill data={language_skill} />}>
                        <span>语言信息</span>
                    </Tooltip>
                );
            }
            return <span>-</span>;
        }
    },
    position_name: {
        id: 10,
        dataIndex: 'position_name',
        name: '应聘职位',
        title: '应聘职位',
        header_type: '',
        type: 2,
        typeName: '应聘信息',
        width: 180,
        key: 'position_name',
        columnConfig: {
            type: 'position_name'
        }
    },
    architecture_name: {
        id: 11,
        dataIndex: 'architecture_name',
        name: '应聘部门',
        title: '应聘部门',
        header_type: '',
        type: 2,
        typeName: '应聘信息',
        width: 200,
        key: 'architecture_name',
        columnConfig: {
            type: 'architecture_name'
        }
    },
    accept_time: {
        id: 12,
        dataIndex: 'accept_time',
        name: '应聘时间',
        title: '应聘时间',
        header_type: '',
        type: 2,
        typeName: '应聘信息',
        width: 200,
        key: 'accept_time',
        columnConfig: {
            type: 'accept_time'
        }
    },
    except_city: {
        id: 13,
        dataIndex: 'except_city',
        name: '意向驻地',
        title: '意向驻地',
        header_type: '',
        type: 2,
        typeName: '应聘信息',
        width: 300,
        key: 'except_city',
        columnConfig: {
            type: 'except_city'
        }
    },
    deliver_source: {
        id: 14,
        dataIndex: 'deliver_source',
        name: '渠道来源',
        title: '渠道来源',
        header_type: '',
        type: 2,
        typeName: '应聘信息',
        width: 300,
        key: 'deliver_source',
        columnConfig: {
            type: 'deliver_source'
        }
    },
    written_type: {
        id: 15,
        dataIndex: 'written_type',
        name: '笔试试卷类型',
        title: '笔试试卷类型',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'written_type',
        columnConfig: {
            type: 'written_type'
        }
    },
    written_send_time: {
        id: 16,
        dataIndex: 'written_send_time',
        name: '笔试时间',
        title: '笔试时间',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 200,
        key: 'written_send_time',
        columnConfig: {
            type: 'written_send_time'
        }
    },
    written_paper_score: {
        id: 17,
        dataIndex: 'written_paper_score',
        name: '笔试得分',
        title: '笔试得分',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 80,
        key: 'written_paper_score',
        columnConfig: {
            type: 'written_paper_score'
        }
    },
    written_result: {
        id: 18,
        dataIndex: 'written_result',
        name: '笔试结果',
        title: '笔试结果',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 80,
        key: 'written_result',
        columnConfig: {
            type: 'written_result'
        }
    },
    first_started_time: {
        id: 19,
        dataIndex: 'first_started_time',
        name: '初试时间',
        title: '初试时间',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'first_started_time',
        columnConfig: {
            type: 'first_started_time'
        }
    },
    launch_score: {
        id: 41,
        dataIndex: 'launch_score',
        name: '测评成绩',
        title: '测评成绩',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'launch_score',
        columnConfig: {
            type: 'launch_score'
        }
    },
    launch_status: {
        id: 42,
        dataIndex: 'launch_status',
        name: '测评状态',
        title: '测评状态',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'launch_status',
        columnConfig: {
            type: 'launch_status'
        },
        render: ({ index, data: { launch_status } }) => {
            return <span>{['待发起', '已发起', '进行中', '已完成', '失败'][launch_status] || '-'}</span>;
        }
    },
    conclusion_body: {
        id: 43,
        dataIndex: 'conclusion_body',
        name: '测评建议',
        title: '测评建议',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'conclusion_body',
        columnConfig: {
            type: 'conclusion_body'
        },
        render: ({ index, data: { conclusion_body } }) => {
            return <span> {conclusion_body || '-'}</span>;
        }
    },
    first_interview: {
        id: 20,
        dataIndex: 'first_interview',
        name: '初试面试信息',
        title: '初试面试信息',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'first_interview',
        columnConfig: {
            type: 'first_interview'
        },
        render: ({ index, data: { first_interview } }) => {
            if (isArray(first_interview)) {
                return (
                    <Tooltip
                        placement="bottom"
                        title={<First data={first_interview} />}>
                        <span>初试信息</span>
                    </Tooltip>
                );
            }
            return <span>-</span>;
        }
    },
    second_started_time: {
        id: 21,
        dataIndex: 'second_started_time',
        name: '复试时间',
        title: '复试时间',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 300,
        key: 'second_started_time',
        columnConfig: {
            type: 'second_started_time'
        }
    },
    second_interview: {
        id: 22,
        dataIndex: 'second_interview',
        name: '复试面试信息',
        title: '复试面试信息',
        header_type: '',
        type: 3,
        typeName: '面试信息',
        width: 180,
        key: 'second_interview',
        columnConfig: {
            type: 'second_interview'
        },
        render: ({ index, data: { second_interview } }) => {
            if (isArray(second_interview)) {
                return (
                    <Tooltip
                        placement="bottom"
                        title={<Second data={second_interview} />}>
                        <span>复试信息</span>
                    </Tooltip>
                );
            }
            return <span>-</span>;
        }
    },
    department_name: {
        id: 23,
        dataIndex: 'department_name',
        name: '录用部门',
        title: '录用部门',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 180,
        key: 'department_name',
        columnConfig: {
            type: 'department_name'
        }
    },
    approval_position_name: {
        id: 24,
        dataIndex: 'approval_position_name',
        name: '录用岗位',
        title: '录用岗位',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 180,
        key: 'approval_position_name',
        columnConfig: {
            type: 'approval_position_name'
        }
    },
    salary: {
        id: 25,
        dataIndex: 'salary',
        name: '定薪',
        title: '定薪',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 300,
        key: 'salary',
        columnConfig: {
            type: 'salary'
        }
    },
    rank_name: {
        id: 26,
        dataIndex: 'rank_name',
        name: '职级',
        title: '职级',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 80,
        key: 'rank_name',
        columnConfig: {
            type: 'rank_name'
        }
    },
    employment_approval: {
        id: 27,
        dataIndex: 'employment_approval',
        name: '录用报批信息',
        title: '录用报批信息',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 120,
        key: 'employment_approval',
        columnConfig: {
            type: 'employment_approval'
        },
        render: ({ index, data: { employment_approval } }) => {
            if (isArray(employment_approval)) {
                return (
                    <Tooltip
                        placement="bottom"
                        title={<Employment data={employment_approval} />}>
                        <span>录用信息</span>
                    </Tooltip>
                );
            }
            return <span>-</span>;
        }
    },
    hiring_status: {
        id: 28,
        dataIndex: 'hiring_status',
        name: '录用审批结果',
        title: '录用审批结果',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 120,
        key: 'hiring_status',
        columnConfig: {
            type: 'hiring_status'
        }
    },
    grant_offer_name: {
        id: 29,
        dataIndex: 'grant_offer_name',
        name: 'offer发放人',
        title: 'offer发放人',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 100,
        key: 'grant_offer_name',
        columnConfig: {
            type: 'grant_offer_name'
        }
    },
    grant_time: {
        id: 30,
        dataIndex: 'grant_time',
        name: '发放时间',
        title: '发放时间',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 120,
        key: 'grant_time',
        columnConfig: {
            type: 'grant_time'
        }
    },
    mismatch: {
        id: 31,
        dataIndex: 'mismatch',
        name: '候选人offer反馈结果',
        title: '候选人offer反馈结果',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 180,
        key: 'mismatch',
        columnConfig: {
            type: 'mismatch'
        }
    },
    refuse_reason_type: {
        id: 32,
        dataIndex: 'refuse_reason_type',
        name: '拒绝offer原因',
        title: '拒绝offer原因',
        header_type: '',
        type: 4,
        typeName: '录用信息',
        width: 180,
        key: 'refuse_reason_type',
        columnConfig: {
            type: 'refuse_reason_type'
        }
    },
    entry_status: {
        id: 33,
        dataIndex: 'entry_status',
        name: '入职跟踪状态',
        title: '入职跟踪状态',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 80,
        key: 'entry_status',
        columnConfig: {
            type: 'entry_status'
        }
    },
    plan_entry_time: {
        id: 34,
        dataIndex: 'plan_entry_time',
        name: '预入职时间',
        title: '预入职时间',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 180,
        key: 'plan_entry_time',
        columnConfig: {
            type: 'plan_entry_time'
        }
    },
    entry_organization: {
        id: 35,
        dataIndex: 'entry_organization',
        name: '入职部门',
        title: '入职部门',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 200,
        key: 'entry_organization',
        columnConfig: {
            type: 'entry_organization'
        }
    },
    entry_position_name: {
        id: 36,
        dataIndex: 'entry_position_name',
        name: '入职岗位',
        title: '入职岗位',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 300,
        key: 'entry_position_name',
        columnConfig: {
            type: 'entry_position_name'
        }
    },
    entry_time: {
        id: 37,
        dataIndex: 'entry_time',
        name: '入职时间',
        title: '入职时间',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 180,
        key: 'entry_time',
        columnConfig: {
            type: 'entry_time'
        }
    },
    leave_office_time: {
        id: 38,
        dataIndex: 'leave_office_time',
        name: '离职时间',
        title: '离职时间',
        header_type: '',
        type: 5,
        typeName: '入职跟踪状态',
        width: 180,
        key: 'leave_office_time',
        columnConfig: {
            type: 'leave_office_time'
        }
    }
};

const dataList = [
    {
        label: '基本信息',
        data: [
            {
                id: '1',
                key: 'name',
                name: '姓名',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '2',
                key: 'sex',
                name: '性别',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '3',
                key: 'phone',
                name: '手机号',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '4',
                key: 'email',
                name: '邮箱',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '5',
                key: 'certificate_number',
                name: '身份证',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '6',
                key: 'highest_school',
                name: '最高学历毕业院校',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '40',
                key: 'school_status',
                name: '学校类别',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '7',
                key: 'speciality',
                name: '专业',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '8',
                key: 'degree',
                name: '学历',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            },
            {
                id: '9',
                key: 'language_skill',
                name: '语言能力',
                parent_type: '1',
                type: 1,
                typeName: '基本信息',
                width: 20
            }
        ]
    },
    {
        label: '应聘信息',
        data: [
            {
                id: '10',
                key: 'position_name',
                name: '应聘职位',
                parent_type: '2',
                type: 2,
                typeName: '应聘信息',
                width: 20
            },
            {
                id: '11',
                key: 'architecture_name',
                name: '应聘部门',
                parent_type: '2',
                type: 2,
                typeName: '应聘信息',
                width: 20
            },
            {
                id: '12',
                key: 'accept_time',
                name: '应聘时间',
                parent_type: '2',
                type: 2,
                typeName: '应聘信息',
                width: 20
            },
            {
                id: '13',
                key: 'except_city',
                name: '意向驻地',
                parent_type: '2',
                type: 2,
                typeName: '应聘信息',
                width: 20
            },
            {
                id: '14',
                key: 'deliver_source',
                name: '渠道来源',
                parent_type: '2',
                type: 2,
                typeName: '应聘信息',
                width: 20
            }
        ]
    },
    {
        label: '面试信息',
        data: [
            {
                id: '15',
                key: 'written_type',
                name: '笔试试卷类型',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: '16',
                key: 'written_send_time',
                name: '笔试时间',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: '17',
                key: 'written_paper_score',
                name: '笔试得分',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: '18',
                key: 'written_result',
                name: '笔试结果',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: '19',
                key: 'first_started_time',
                name: '初试时间',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: '20',
                key: 'first_employee',
                name: '初试面试官',
                parent_type: '3',
                type: 3,
                typeName: '面试信息',
                width: 20
            },
            {
                id: 21,
                dataIndex: 'second_started_time',
                name: '复试时间',
                header_type: '',
                type: 3,
                typeName: '面试信息',
                width: 300
            },
            {
                id: 22,
                dataIndex: 'second_interview',
                name: '复试面试信息',
                header_type: '',
                type: 3,
                typeName: '面试信息',
                width: 80
            },
            {
                id: 41,
                dataIndex: 'launch_score',
                name: '测评成绩',
                header_type: '',
                type: 3,
                typeName: '面试信息',
                width: 80
            },
            {
                id: 42,
                dataIndex: 'launch_score',
                name: '测评状态',
                header_type: '',
                type: 3,
                typeName: '面试信息',
                width: 80
            },
            {
                id: 43,
                dataIndex: 'conclusion_body',
                name: '测评建议',
                header_type: '',
                type: 3,
                typeName: '面试信息',
                width: 80
            }
        ]
    },
    {
        label: '录用信息',
        data: [
            {
                id: 23,
                dataIndex: 'department_name',
                name: '录用部门',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 180
            },
            {
                id: 24,
                dataIndex: 'approval_position_name',
                name: '录用岗位',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 180
            },
            {
                id: 25,
                dataIndex: 'salary',
                name: '定薪',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 300
            },
            {
                id: 26,
                dataIndex: 'rank_name',
                name: '职级',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 80
            },
            {
                id: 27,
                dataIndex: 'employment_approval',
                name: '录用报批信息',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 120
            },
            {
                id: 28,
                dataIndex: 'hiring_status',
                name: '录用审批结果',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 120
            },
            {
                id: 29,
                dataIndex: 'grant_offer_name',
                name: 'offer发放人',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 100
            },
            {
                id: 30,
                dataIndex: 'grant_time',
                name: '发放时间',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 120
            },
            {
                id: 31,
                dataIndex: 'mismatch',
                name: '候选人offer反馈结果',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 80
            },
            {
                id: 32,
                dataIndex: 'refuse_reason_type',
                name: '拒绝offer原因',
                header_type: '',
                type: 4,
                typeName: '录用信息',
                width: 120
            }
        ]
    },
    {
        label: '入职跟踪状态',
        data: [
            {
                id: 33,
                dataIndex: 'entry_status',
                name: '入职跟踪状态',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 80
            },
            {
                id: 34,
                dataIndex: 'plan_entry_time',
                name: '预入职时间',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 80
            },
            {
                id: 35,
                dataIndex: 'entry_organization',
                name: '入职部门',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 200
            },
            {
                id: 36,
                dataIndex: 'entry_position_name',
                name: '入职岗位',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 300
            },
            {
                id: 37,
                dataIndex: 'entry_time',
                name: '入职时间',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 80
            },
            {
                id: 38,
                dataIndex: 'leave_office_time',
                name: '离职时间',
                header_type: '',
                type: 5,
                typeName: '入职跟踪状态',
                width: 180
            }
        ]
    }
];

export { resumeKeys, dataList };
