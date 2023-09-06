import React from 'react';
import { Modal } from 'antd';
import {BusinessProfileForm} from "../components/BusinessProfileForm";
import {BusinessProfileCreateDto, BusinessProfileUpdateDto} from "../models/BusinessProfileModels";

export const ProfileFormModal: React.FC<{
    visible: boolean,
    onClose: () => void,
    submitRequest: (data: BusinessProfileCreateDto | BusinessProfileUpdateDto, newRequest: boolean) => void,
    data?: any
}> = ({ visible, onClose, submitRequest, data }) => (
    <Modal
        title={data ? 'Update Profile' : 'Create Profile'}
        open={visible}
        onCancel={onClose}
        footer={null}
    >
        <BusinessProfileForm onSubmit={submitRequest} initialData={data} />
    </Modal>
);
