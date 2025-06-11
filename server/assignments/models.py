from django.db import models
from django.contrib.auth import get_user_model
from classes.models import Class
from random import random

User = get_user_model()

class Assignment(models.Model):
    classroom = models.ForeignKey(Class, on_delete=models.CASCADE, related_name='assignments')
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    deadline = models.DateTimeField()
    task_file = models.FileField(max_length=1024)
    solution_file  = models.FileField(max_length=1024)
    max_score = models.IntegerField(null=False, blank=False)

    class Meta:
        unique_together = ('classroom', 'name')

    @staticmethod
    def auto_check(task_file: str, solution_file: str, submission_file: str) -> float:
        return random()

class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, related_name='submissions')
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submissions')
    submitted_file = models.FileField(max_length=1024)
    submitted_at = models.DateTimeField(auto_now_add=True)
    score = models.FloatField(null=True, blank=True)
    is_hand_written = models.BooleanField(null=False, blank=False)

    class Meta:
        unique_together = ('assignment', 'student')
