from rest_framework import generics, permissions, status, parsers
from rest_framework.response import Response
from django.utils import timezone
from django.shortcuts import get_object_or_404
from assignments.models import Assignment, Submission
from assignments.serializers import AssignmentSerializer, StudentSubmissionStatusSerializer, SubmissionSerializer, SubmissionCreateSerializer
from classes.models import Class
from accounts.permissions import IsTeacher, IsStudent

# 1. Teacher creates assignment in a class
class CreateAssignmentView(generics.CreateAPIView):
    serializer_class = AssignmentSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeacher]
    parser_classes = [parsers.MultiPartParser, parsers.FormParser]

    def perform_create(self, serializer):
        class_id = self.request.data.get('classroom')
        classroom = get_object_or_404(Class, id=class_id, teacher=self.request.user)
        serializer.save(classroom=classroom)

# 2. Teacher & student see all assignments in a class
class AssignmentListView(generics.ListAPIView):
    serializer_class = AssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        classroom = self.kwargs['class_id']
        user = self.request.user

        if user.role == "teacher":
            return Assignment.objects.filter(classroom__id=classroom, classroom__teacher=user)
        else:
            # student can see assignments only if member of class
            return Assignment.objects.filter(classroom__id=classroom, classroom__classmembership__student=user)

# 3. Student uploads submission if deadline not passed
class SubmitAssignmentView(generics.CreateAPIView):
    serializer_class = SubmissionCreateSerializer
    permission_classes = [permissions.IsAuthenticated, IsStudent]

    def post(self, request, assignment_id):
        assignment = Assignment.objects.get(id=assignment_id)
        if timezone.now() > assignment.deadline:
            return Response({'detail': 'Deadline passed'}, status=status.HTTP_400_BAD_REQUEST)

        # Create or update submission
        submission, created = Submission.objects.update_or_create(
            assignment=assignment,
            student=request.user,
            defaults={'submitted_files': request.data.get('submitted_files', [])}
        )
        serializer = SubmissionSerializer(submission)
        return Response(serializer.data)

# 4. Teacher views all submissions for an assignment
class SubmissionListView(generics.ListAPIView):
    serializer_class = SubmissionSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeacher]

    def get_queryset(self):
        assignment_id = self.kwargs['assignment_id']
        assignment = Assignment.objects.get(id=assignment_id, classroom__teacher=self.request.user)
        return Submission.objects.filter(assignment=assignment)

# 5. Teacher marks submissions
class MarkSubmissionView(generics.UpdateAPIView):
    serializer_class = SubmissionSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeacher]
    queryset = Submission.objects.all()
    lookup_url_kwarg = 'submission_id'

    def patch(self, request, *args, **kwargs):
        submission = self.get_object()
        if submission.assignment.classroom.teacher != request.user:
            return Response({'detail': 'Not allowed'}, status=status.HTTP_403_FORBIDDEN)
        score = request.data.get('score')
        if score is None:
            return Response({'detail': 'Score required'}, status=status.HTTP_400_BAD_REQUEST)
        submission.score = score
        submission.save()
        serializer = self.get_serializer(submission)
        return Response(serializer.data)

# 6. Student views their score in an assignment
class StudentScoreView(generics.RetrieveAPIView):
    serializer_class = StudentSubmissionStatusSerializer
    permission_classes = [permissions.IsAuthenticated, IsStudent]

    def get_object(self):
        assignment_id = self.kwargs['assignment_id']
        return Submission.objects.get(assignment_id=assignment_id, student=self.request.user)
