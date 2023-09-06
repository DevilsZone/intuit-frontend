import React from 'react';
import {Card, Button, Descriptions, Divider} from 'antd';
import {BusinessProfileResponse} from "../../models/BusinessProfileModels";

export const ProfileView: React.FC<{ data: BusinessProfileResponse, onUpdate: () => void }> = ({ data, onUpdate }) => (
    <Card
        title={data.legalName}
        extra={<Button onClick={onUpdate}>Update</Button>}
        style={{ marginTop: '20px' }}
    >
        <Descriptions bordered>
            <Descriptions.Item label="Company Name">{data.companyName}</Descriptions.Item>
            <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
            <Descriptions.Item label="Website">{data.website}</Descriptions.Item>

            {/* Business Address */}
            <Descriptions.Item label="Business Address" span={3}>
                {data.businessAddress.line1}, {data.businessAddress.city}, {data.businessAddress.state}, {data.businessAddress.zip}, {data.businessAddress.country}
            </Descriptions.Item>

            {/* Legal Address */}
            <Descriptions.Item label="Legal Address" span={3}>
                {data.legalAddress.line1}, {data.legalAddress.city}, {data.legalAddress.state}, {data.legalAddress.zip}, {data.legalAddress.country}
            </Descriptions.Item>

            {/* Tax Identifiers - I'm assuming it's an array */}
            <Descriptions.Item label={'PAN'}>{data.taxIdentifiers.pan}</Descriptions.Item>
            <Descriptions.Item label={'EIN'}>{data.taxIdentifiers.ein}</Descriptions.Item>
        </Descriptions>
        <Divider />
        {data.profileProductList.map((product) => {
            return (
                <Button type="dashed" style={{'marginRight': '20px'}} danger={true} disabled={true}>
                    {product.product}
                </Button>
            )
        })}
    </Card>
);
