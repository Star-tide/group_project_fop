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
from .serializers import CourseSerializer
from .models import Course


# class Course(models.Model):
#     difficulty = models.IntegerField(validators=[v.MaxValueValidator(3), v.MinValueValidator(1)])
#     title = models.CharField(max_length=20)
#     subcategories = ArrayField(models.CharField())
#     prerequisites = ArrayField(models.CharField())
#     course_description = models.TextField(max_length=500)
#     users = models.ManyToManyField(User)
class CreateCourse(APIView):
    def post(self, request):
        data = request.data.copy()
        new_course = CourseSerializer(data=data)
        if new_course.is_valid():
            new_course.save()
            return Response(new_course.data, status=HTTP_201_CREATED)
        else:
            return Response(new_course.errors, status=HTTP_400_BAD_REQUEST)



