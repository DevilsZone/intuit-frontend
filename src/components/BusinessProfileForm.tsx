import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import {
    BusinessProfileCreateDto,
    BusinessProfileResponse,
    BusinessProfileUpdateDto
} from "../models/BusinessProfileModels";

interface BusinessProfileFormProps {
    initialData?: BusinessProfileResponse;
    onSubmit?: (data: BusinessProfileCreateDto | BusinessProfileUpdateDto, newRequest: boolean) => void;
}

export const BusinessProfileForm: React.FC<BusinessProfileFormProps> = ({ initialData, onSubmit }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (initialData) {
            form.setFieldsValue(initialData);
        }
    }, [initialData, form]);

    const handleFormSubmit = (values: any) => {
        console.log("here")
        if (onSubmit) {
            let dto: BusinessProfileCreateDto | BusinessProfileUpdateDto
            if (initialData === null) {
                dto = {
                    companyName: values.companyName,
                    legalName: values.legalName,
                    email: values.email,
                    website: values.website,
                    businessAddress: values.businessAddress,
                    legalAddress: values.legalAddress,
                    taxIdentifiers: values.taxIdentifiers,
                    createdBy: ""
                }
                onSubmit(dto, true)
            } else {
                dto = {
                    companyName: values.companyName,
                    legalName: values.legalName,
                    email: values.email,
                    website: values.website,
                    businessAddress: values.businessAddress,
                    legalAddress: values.legalAddress,
                    taxIdentifiers: values.taxIdentifiers,
                    updatedBy: ""
                }
                onSubmit(dto, false)
            }
        }
    };

    return (
        <Form form={form} onFinish={handleFormSubmit}>
            <Form.Item
                label="Company Name"
                name="companyName"
                rules={[{ required: true, message: 'Please input the company name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Name"
                name="legalName"
                rules={[{ required: true, message: 'Please input the legal name!' }]}
            >
                <Input disabled={initialData !== null}/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input the email!' }]}
            >
                <Input type="email" />
            </Form.Item>

            <Form.Item
                label="Website"
                name="website"
                rules={[{ required: true, message: 'Please input the website!' }]}
            >
                <Input type="url" />
            </Form.Item>

            {/* Legal Address */}
            <Form.Item
                label="Legal Address Street"
                name={['legalAddress', 'line1']}
                rules={[{ required: true, message: 'Please input the legal address street!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Address line 2"
                name={['legalAddress', 'line2']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Address City"
                name={['legalAddress', 'city']}
                rules={[{ required: true, message: 'Please input the legal address city!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Address State"
                name={['legalAddress', 'state']}
                rules={[{ required: true, message: 'Please input the legal address state!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Address Country"
                name={['legalAddress', 'country']}
                rules={[{ required: true, message: 'Please input the legal address country!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Legal Address Zip Code"
                name={['legalAddress', 'zip']}
                rules={[{ required: true, message: 'Please input the legal address zip code!' }]}
            >
                <Input />
            </Form.Item>

            {/* Business Address */}
            <Form.Item
                label="Business Street"
                name={['businessAddress', 'line1']}
                rules={[{ required: true, message: 'Please input the business street!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Business Line 2"
                name={['businessAddress', 'line2']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Business City"
                name={['businessAddress', 'city']}
                rules={[{ required: true, message: 'Please input the business city!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Business State"
                name={['businessAddress', 'state']}
                rules={[{ required: true, message: 'Please input the business state!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Business Country"
                name={['businessAddress', 'country']}
                rules={[{ required: true, message: 'Please input the business country!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Business Zip Code"
                name={['businessAddress', 'zip']}
                rules={[{ required: true, message: 'Please input the business zip code!' }]}
            >
                <Input />
            </Form.Item>

            {/* Tax Identifiers */}
            <Form.Item
                label="PAN Number"
                name={['taxIdentifiers', 'pan']}
                rules={[{ required: true, message: 'Please input the PAN!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="EIN Number"
                name={['taxIdentifiers', 'ein']}
                rules={[{ required: true, message: 'Please input the EIN!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
