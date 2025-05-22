import { apiCall } from "./utils";
import axiosInstance from "./axios-instance";
import type { APIResponse } from "@/types";
import type { Assignment } from "@/types";

export type GetAssignment = { assignment: Assignment }
export type GetAssignments = Assignment[];
export type CreateAssignmentResponse = {};

export async function getAssignment(id: number): APIResponse<GetAssignment> {
    return apiCall<GetAssignment>(() => axiosInstance.post(`assignments/${id}/`))
}

export async function getAssignments(classId: number): APIResponse<GetAssignments> {
    return apiCall<GetAssignments>(() => axiosInstance.post(`assignments/class/${classId}/`))
}

export async function createAssignment(formData: FormData): APIResponse<CreateAssignmentResponse> {
    return apiCall<CreateAssignmentResponse>(() => axiosInstance.post("assignments/create/", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }))
}
