import React, {useRef} from 'react';
import {Space, Tag, Image} from 'antd';
import type {ActionType, ProColumns} from '@ant-design/pro-table';
import ProTable, {TableDropdown} from '@ant-design/pro-table';
import {searchUsers} from "@/services/ant-design-pro/api";

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户ID',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: '用户头像',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={100}></Image>
      </div>
    ),
  },{
    title: '用户性别',
    dataIndex: 'gender',
    copyable: true,
    valueEnum: {
      0: { text: '女', status: 'Default' },
      1: {
        text: '男',
        status: 'Success',
      },
    },
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    copyable: true,
  },
  {
    title: '用户角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '普通用户', status: 'Default' },
      1: {
        text: '管理员',
        status: 'Success',
      },
    },
  },
  {
    title: '星球编号',
    dataIndex: 'planetCode',
  },
  /*
 {
   disable: true,
   title: '状态',
   dataIndex: 'state',
   filters: true,
   onFilter: true,
   valueType: 'select',
   valueEnum: {
     all: { text: '全部', status: 'Default' },
     open: {
       text: '未解决',
       status: 'Error',
     },
     closed: {
       text: '已解决',
       status: 'Success',
       disabled: true,
     },
     processing: {
       text: '解决中',
       status: 'Processing',
     },
   },
 },
 {
   disable: true,
   title: '标签',
   dataIndex: 'labels',
   search: false,
   renderFormItem: (_, { defaultRender }) => {
     return defaultRender(_);
   },
   render: (_, record) => (
     <Space>
       {record.labels.map(({ name, color }) => (
         <Tag color={color} key={name}>
           {name}
         </Tag>
       ))}
     </Space>
   ),
 },
 {
   title: '创建时间',
   key: 'showTime',
   dataIndex: 'created_at',
   valueType: 'dateTime',
   sorter: true,
   hideInSearch: true,
 },
 {
   title: '创建时间',
   dataIndex: 'created_at',
   valueType: 'dateRange',
   hideInTable: true,
   search: {
     transform: (value) => {
       return {
         startTime: value[0],
         endTime: value[1],
       };
     },
   },
 },
 {
   title: '操作',
   valueType: 'option',
   key: 'option',
   render: (text, record, _, action) => [
     <a
       key="editable"
       onClick={() => {
         action?.startEditable?.(record.id);
       }}
     >
       编辑
     </a>,
     <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
       查看
     </a>,
     <TableDropdown
       key="actionGroup"
       onSelect={() => action?.reload()}
       menus={[
         { key: 'copy', name: '复制' },
         { key: 'delete', name: '删除' },
       ]}
     />,
   ],
 },
 */
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await searchUsers();
        return {
          data:userList
        }
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"

    />
  );
};
