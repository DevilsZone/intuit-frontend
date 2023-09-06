export interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export interface TaxIdentifiers {
    pan: string;
    ein: string;
}

// Response when fetching a BusinessProfile
export interface BusinessProfileResponse {
    companyName: string;
    legalName: string;
    email: string;
    website: string;
    businessAddress: Address;
    legalAddress: Address;
    taxIdentifiers: TaxIdentifiers;
    createdAt: Date; // Assuming there might be a creation date
    updatedAt: Date; // Assuming there might be an update timestamp
    profileProductList: BusinessProfileProduct[]
}

export interface BusinessProfileProduct {
    product: string
}

// DTO for creating a BusinessProfile
export interface BusinessProfileCreateDto {
    companyName: string;
    legalName: string;
    email: string;
    website: string;
    businessAddress: Address;
    legalAddress: Address;
    taxIdentifiers: TaxIdentifiers;
    createdBy: string
}

// DTO for updating a BusinessProfile
// Fields are optional since you might not update every field every time
export interface BusinessProfileUpdateDto {
    companyName?: string;
    legalName?: string;
    email?: string;
    website?: string;
    businessAddress?: Address;
    legalAddress?: Address;
    taxIdentifiers?: TaxIdentifiers;
    updatedBy: string;
}

export interface BusinessProfileProductUpdateDto {
    legalName?: string,

}
