from django.urls import path
from .views import *

urlpatterns = [
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskDetailUpdateDelete.as_view(), name='task-detail-update-delete'),
]
