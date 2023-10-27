from django.urls import path
from .views import *

urlpatterns = [
    path('tasks/', TaskListView.as_view(), name='task-list'),
    path('tasks/<int:pk>/', TaskDetailUpdateDelete.as_view(), name='task-detail-update-delete'),
    path('api/tasks/add/', TaskCreateView.as_view(), name='task-add'),
    path('api/tasks/edit/<int:pk>/', TaskEditView.as_view(), name='task-edit'),
    path('api/tasks/delete/<int:pk>/', TaskDeleteView.as_view(), name='task-delete'),
]
