from django.db import models
from django.contrib.auth import get_user_model
from classes.models import Class

User = get_user_model()

class Assignment(models.Model):
    classroom = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='assignments')
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    deadline = models.DateTimeField()
    task_file = models.FileField(max_length=1024)
    solution_file  = models.FileField(max_length=1024)

    class Meta:
        unique_together = ('classroom', 'name')

class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, related_name='submissions')
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submissions')
    submitted_files = models.JSONField(default=list)  # list of solution file URLs/paths
    submitted_at = models.DateTimeField(auto_now_add=True)
    score = models.FloatField(null=True, blank=True)

    class Meta:
        unique_together = ('assignment', 'student')

