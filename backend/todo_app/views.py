from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

# View to list tasks
class TaskListView(generics.ListAPIView):
    queryset = Task.objects.all().order_by('order')
    serializer_class = TaskSerializer

# View to add a task
class TaskCreateView(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
    def perform_create(self, serializer):
        order = self.request.data.get("order", None)
        if order is None:
            order = Task.objects.count()
        serializer.save(order=order)

# View to edit a task
class TaskEditView(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# View to delete a task
class TaskDeleteView(generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
