from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from .models import Task
from rest_framework.decorators import api_view
from .serializers import TaskSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save()
        
        # Notify connected clients of the new task creation
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'task_updates',
            {
                'type': 'task_update',
                'message': 'Task created'
            }
        )
    
class TaskDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
    def perform_update(self, serializer):
        serializer.save()

        # Notify connected clients of the task update
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'task_updates',
            {
                'type': 'task_update',
                'message': 'Task updated'
            }
        )
    
    def perform_destroy(self, instance):
        instance.delete()

        # Notify connected clients of the task deletion
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'task_updates',
            {
                'type': 'task_update',
                'message': 'Task deleted'
            }
        )
