import { Spin, Typography } from 'antd';
import AppTable from '../components/AppTable';
import { useAppSelector } from "../store";
import AppLayout from "./AppLayout";
const { Title, Paragraph, } = Typography;


export default function Home() {

    const { isLoading, users } = useAppSelector(state => state.users)

    return <>
        <AppLayout>
            <Spin spinning={isLoading}>
                <Typography>
                    <Title>Usuários</Title>
                    <Paragraph>Crie, remove e gerencie os usuários</Paragraph>
                </Typography>
                <AppTable />
            </Spin>
        </AppLayout>
    </>
}