from rest_framework import serializers
from .models import Lesson_plan, Curriculum

class Lesson_planSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Lesson_plan
        fields = '__all__'



class CurriculumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        fields = '__all__'