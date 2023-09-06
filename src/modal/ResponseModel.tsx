import {BusinessProfileResponse} from "../models/BusinessProfileModels";

interface Meta {
    status: "SUCCESS" | "FAILURE";
    timestamp: string;
}

interface ErrorResponse {
    errorCode: string;
    message: string;
    detail: string | null;
    help: string | null;
}

export interface BusinessProfileFailureResponse {
    errors: ErrorResponse[];
    meta: Meta;
}

export interface BusinessProfileSuccessResponse {
    data: BusinessProfileResponse;
    meta: Meta;
}