import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useState } from 'react';

export default function AppTable() {

    const [state, setState] = useState({});


    const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = (clearFilters: any, confirm: any) => {
        clearFilters();
        confirm();
        setState({ searchText: '' });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            sorter: (a: any, b: any) => a.name.length - b.name.length,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder={"Procure por nome"}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, "name")}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, "name")}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button onClick={() => handleReset(clearFilters, confirm)} size="small" style={{ width: 90 }}>
                            Reset
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value: any, record: any) => record["name"]
                ? record["name"].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        },
        {
            title: 'Idade',
            dataIndex: 'age',
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: 'Perfil',
            dataIndex: 'role',
            onFilter: (value: any, record: any) => record.role.indexOf(value) === 0,
            filters: [
                { text: 'ADMIN', value: 'ADMIN' },
                { text: 'USER', value: 'USER' },
                { text: 'SUB_ADMIN', value: 'SUB_ADMIN' }
            ]
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];


    const data = [
        { role: "ADMIN", id: "376b3757-c9e4-4e7b-a3c7-5c5e4b2113cb", name: "Fer", age: 1, address: "asdfa", },
        { role: "ADMIN", id: "bab0ea44-64casdf4012", name: "An", age: 2, address: "asdfa", },
        { role: "ADMIN", id: "54eaf9dfasd467", name: "asdff3", age: 3, address: "asdfa", },
        { role: "USER", id: "3b8asfd4ab1-b6ff-80951909bcb2", name: "23", age: 4, address: "asdfa", },
        { role: "USER", id: "556a2a43-5d23-40e0-123r-2a3acf0ece33", name: "asv", age: 5, address: "asdfa", },
        { role: "USER", id: "9e2b7754-0783-4a86-asdfasdfasdf-8b1304071d3f", name: "asdtgtfa", age: 6, address: "asdfa", },
        { role: "USER", id: "997689c8-e388-sdf", name: "asdfa", age: 7, address: "asdfa", },
        { role: "SUB_ADMIN", id: "a16afc25-96e7-4691-12341234124134-0c87504eb6f0", name: "btbt", age: 8, address: "asdfa", },
    ]

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
            />
        </>
    )
}
