import {apiClient} from "./ApiClient";
import {BusinessProfileCreateDto, BusinessProfileUpdateDto} from "./models/BusinessProfileModels";


export const createBusinessProfile = async (profileData: BusinessProfileCreateDto) => {
    return apiClient.post('/business-profile', profileData)
};

export const getBusinessProfileByLegalName = async (legalName: string) => {
    return apiClient.get('/business-profile', { params: {"legalName": legalName} })
};

export const updateBusinessProfile = async (profileData: BusinessProfileUpdateDto) => {
    return apiClient.put('/business-profile', profileData)
};

export const updateBusinessProfileProducts = async (profileData: BusinessProfileUpdateDto) => {
    return apiClient.put('/business-profile', profileData)
};
