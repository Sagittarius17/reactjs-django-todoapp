from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'completed')
        
    def validate_title(self, value):
        if not value.strip():  # Check if the title is an empty string or just whitespace
            raise serializers.ValidationError("Title cannot be empty.")
        return value