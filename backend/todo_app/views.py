from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all().order_by('order')
    serializer_class = TaskSerializer
    
    def perform_create(self, serializer):
        # Set the order to the next available integer if not provided
        order = self.request.data.get("order", None)
        if order is None:
            order = Task.objects.count()
        serializer.save(order=order)


class TaskDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
