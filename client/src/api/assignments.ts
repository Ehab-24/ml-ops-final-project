import { apiCall } from "./utils";
import axiosInstance from "./axios-instance";
import type { APIResponse } from "@/types";
import type { Assignment } from "@/types";

export type GetAssignmentResponse = Assignment;
export type SubmitAssignmentResponse = {};
export type CreateAssignmentResponse = {};

export async function getAssignment(id: number, classId: number): APIResponse<GetAssignmentResponse> {
    return apiCall<GetAssignmentResponse>(() => axiosInstance.get(`assignments/${id}/class/${classId}/`))
}

export async function createAssignment(formData: FormData): APIResponse<CreateAssignmentResponse> {
    return apiCall<CreateAssignmentResponse>(() => axiosInstance.post("assignments/create/", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }))
}

export async function submitAssignment(id: number, formData: FormData): APIResponse<SubmitAssignmentResponse> {
    return apiCall<SubmitAssignmentResponse>(() => axiosInstance.post(`assignments/submit/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }))
}
