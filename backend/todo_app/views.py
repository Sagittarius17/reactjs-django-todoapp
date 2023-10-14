from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
