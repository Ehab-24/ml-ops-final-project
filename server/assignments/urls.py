from django.urls import path
from .views import (
    CreateAssignmentView, AssignmentListView, SubmitAssignmentView,
    SubmissionListView, MarkSubmissionView, StudentScoreView, AssignmentDetailView
)

urlpatterns = [
    path('create/', CreateAssignmentView.as_view(), name='create-assignment'),
    path('class/<int:class_id>/', AssignmentListView.as_view(), name='list-assignments'),
    path('<int:assignment_id>/class/<int:class_id>/', AssignmentDetailView.as_view(), name='assignment-detail'),
    path('submit/<int:assignment_id>/', SubmitAssignmentView.as_view(), name='submit-assignment'),
    path('submissions/<int:assignment_id>/', SubmissionListView.as_view(), name='list-submissions'),
    path('mark/<int:submission_id>/', MarkSubmissionView.as_view(), name='mark-submission'),
    path('score/<int:assignment_id>/', StudentScoreView.as_view(), name='student-score'),
]

