from rest_framework import serializers
from .models import Assignment, Submission

class AssignmentSerializer(serializers.ModelSerializer):
    submitted = serializers.SerializerMethodField()
    solution_file = serializers.SerializerMethodField()
    submission_count = serializers.SerializerMethodField()

    class Meta:
        model = Assignment
        fields = [
            'id', 'classroom', 'name', 'description', 'deadline',
            'task_file', 'solution_file', 'submitted', 'submission_count'
        ]

    def get_submitted(self, obj):
        user = self.context['request'].user
        if user.role == 'student':
            return Submission.objects.filter(assignment=obj, student=user).exists()
        return None

    def get_solution_file(self, obj):
        user = self.context['request'].user
        if user.role == 'teacher':
            request = self.context['request']
            return request.build_absolute_uri(obj.solution_file.url) if obj.solution_file else None
        return None

    def get_submission_count(self, obj):
        user = self.context['request'].user
        if user.role == 'teacher':
            return obj.submissions.count()
        return None


class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['id', 'student', 'submitted_files', 'submitted_at', 'score']


class SubmissionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['submitted_files']


class StudentSubmissionStatusSerializer(serializers.ModelSerializer):
    submitted = serializers.SerializerMethodField()

    class Meta:
        model = Submission
        fields = ['submitted_files', 'submitted_at', 'score', 'submitted']

    def get_submitted(self, obj):
        return True if obj.submitted_at else False
