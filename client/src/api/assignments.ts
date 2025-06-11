import { apiCall } from "./utils";
import axiosInstance from "./axios-instance";
import type { APIResponse } from "@/types";
import type { Assignment } from "@/types";

export type GetAssignmentResponse = Assignment;
export type SubmitAssignmentResponse = {};
export type CreateAssignmentResponse = {};
export type GetSubmissionsResponse = {
  id: number;
  student: {
    id: number;
    name: string;
    email: string;
  };
  submitted_file: string;
  submitted_file_url: string;
  submitted_at: string;
  score: number | null;
  is_hand_written: boolean;
}[];
export type AutoCheckResponse = {};

export async function getAssignment(
  id: number,
  classId: number
): APIResponse<GetAssignmentResponse> {
  return apiCall<GetAssignmentResponse>(() =>
    axiosInstance.get(`assignments/${id}/class/${classId}/`)
  );
}

export async function createAssignment(
  formData: FormData
): APIResponse<CreateAssignmentResponse> {
  return apiCall<CreateAssignmentResponse>(() =>
    axiosInstance.post("assignments/create/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export async function submitAssignment(
  id: number,
  formData: FormData
): APIResponse<SubmitAssignmentResponse> {
  return apiCall<SubmitAssignmentResponse>(() =>
    axiosInstance.post(`assignments/submit/${id}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export async function getAssignmentSubmissions(
  assignmentId: number
): APIResponse<GetSubmissionsResponse> {
  return apiCall<GetSubmissionsResponse>(() =>
    axiosInstance.get(`assignments/submissions/${assignmentId}/`)
  );
}

export async function autoCheckAssignment(assignmentId: number, classId: number) : APIResponse<AutoCheckResponse> {
  return apiCall<GetSubmissionsResponse>(() =>
    axiosInstance.post(`assignments/${assignmentId}/class/${classId}/auto-check/`, {})
  );
}
