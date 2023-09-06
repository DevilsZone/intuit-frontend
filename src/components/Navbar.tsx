import React from 'react';
import { Layout, Button } from 'antd';

const { Header } = Layout;

export const NavBar: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button>INTUIT Profile</Button>
        <Button onClick={onOpenModal}>Create</Button>
    </Header>
);
