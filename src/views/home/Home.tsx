import React, {useState} from 'react';
import {Layout} from 'antd';
import {NavBar} from "../../components/Navbar";
import {SearchBar} from "../../components/SearchBar";
import {ProfileView} from "../profile/ProfileView";
import {ProfileFormModal} from "../../modal/ProfileFormModal";
import {
    BusinessProfileCreateDto,
    BusinessProfileResponse,
    BusinessProfileUpdateDto
} from "../../models/BusinessProfileModels";
import {createBusinessProfile, getBusinessProfileByLegalName, updateBusinessProfile} from "../../api";

const { Content } = Layout;

export const Home: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [profileData, setProfileData] = useState<BusinessProfileResponse | null>(null);

    const handleSearch = (value: string) => {
        // Fetch data here and set it using setProfileData
        getBusinessProfileByLegalName(value).then(r => {
            console.log(r.data.data)
            setProfileData(r.data.data)
        }).catch(e => {
            window.alert("Failed to fetch Profile")
            console.log(e)
        })
    };

    const handleCreateBusinessProfile = (
        date: BusinessProfileCreateDto | BusinessProfileUpdateDto,
        newRequest: boolean
    ) => {
        if (newRequest) {
            createBusinessProfile(date as BusinessProfileCreateDto).then((r) => {
                setProfileData(r.data.data)
                setModalOpen(false)
                window.alert("Profile Created Successfully for "+date.legalName)
            }).catch((e) => {
                setModalOpen(false)
                window.alert(e.message)
            })
        } else {
            updateBusinessProfile(date as BusinessProfileUpdateDto).then(r => {
                setProfileData(r.data.data)
                setModalOpen(false)
                window.alert("Profile Updated Successfully for "+date.legalName)
            }).catch((e) => {
                setModalOpen(false)
                window.alert(e.message)
            })
        }
    }


    return (
        <Layout>
            <NavBar onOpenModal={() => setModalOpen(true)} />
            <Content style={{ padding: '20px 50px' }}>
                <SearchBar onSearch={handleSearch} />
                {profileData && <ProfileView data={profileData} onUpdate={() => setModalOpen(true)} />}
                <ProfileFormModal visible={isModalOpen} onClose={() => setModalOpen(false)} data={profileData} submitRequest={handleCreateBusinessProfile} />
            </Content>
        </Layout>
    );
};
