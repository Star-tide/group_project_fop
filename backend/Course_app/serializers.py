from rest_framework import serializers
from .models import Course, Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True, required=False, default=list)
    class Meta:
        model = Course
        fields = '__all__'

