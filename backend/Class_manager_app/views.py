from django.core.exceptions import ValidationError
from django.contrib.auth import login, logout, authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .serializers import Lesson_planSerializer 

class CreatePlan(APIView):
    def post (self, request):
        data = request.data.copy()
        new_plan = Lesson_planSerializer(data=data)
        if new_plan.is_valid():
            new_plan.save()
            return Response(new_plan.data, status=HTTP_201_CREATED)
        else:
            return Response(new_plan.errors, status=HTTP_400_BAD_REQUEST)

'''
LESSON PLAN MODEL 
-----------------------------
class Lesson_plan(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField()
    subcategories = ArrayField(models.CharField())
    programming_language = models.CharField()
    certificate_completion = models.OneToOneField(Certificate_completion, on_delete=models.CASCADE)
    courses = models.ForeignKey(Course, on_delete=models.CASCADE)'''