from django.core.exceptions import ValidationError
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .serializers import CourseSerializer, QuestionSerializer
from .models import Course


# class Question(models.Model):
#     course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
#     learning_content = models.TextField()
#     prompt = models.TextField()
#     solution = models.TextField()
#     is_correct = models.BooleanField(default = False)

class CreateQuestion(APIView):

    def post(self, request):
            # Parse the incoming data
            data = request.data.copy()
            
            # Get the course ID and fetch the course
            course_id = data.get('id')
            course = get_object_or_404(Course, id=course_id)
            
            # Add course to the data before validation
            data['course'] = course.id
            
            # Initialize the QuestionSerializer with the data
            serializer = QuestionSerializer(data=data)
            
            if serializer.is_valid():
                # Save the validated data, which creates a new Question
                serializer.save()
                
                # Return the newly created question data as a response
                return Response(serializer.data, status=HTTP_201_CREATED)
            
            # Return a 400 response if validation fails
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

# {
#     "id": 1,
#     "prompt": "lalala",
#     "solution": 5,
#     "learning_content": "alalalal"
# }



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

    def delete(self, request):
        pk = request.data.get("pk")
        try:
            course = Course.objects.get(pk=pk)
            title = course.title
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=HTTP_404_NOT_FOUND)
        course.delete()
        return Response(f"Course: {title}, Deleted", status=HTTP_204_NO_CONTENT)

    def put(self, request):
        data = request.data.copy()
        course_id = data.get("id")
        if not course_id:
            return Response(
                {"error": "Course ID not provided"}, status=HTTP_400_BAD_REQUEST
            )
        try:
            course = Course.objects.get(pk=course_id)
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=HTTP_404_NOT_FOUND)

        serializer = CourseSerializer(course, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response({"Invalid Data Types"}, status=HTTP_400_BAD_REQUEST)


"""
{
  "difficulty": "1",
  "title": "FoP",
  "subcatagories": [],
  "prerequisites": [],
  "course_description": "Learning to code"
}

{
  "id": 1,
  "questions": [],
  "difficulty": 1,
  "title": "FoP",
  "subcategories": [],
  "prerequisites": [],
  "course_description": "Learning to code"
}
"""

class GetAllCourses(APIView):
    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class DeleteCourse(APIView):
    def delete(self, request, course_id):
        try:
            course = Course.objects.get(id=course_id)
            course.delete()
            return Response({"message": "Course deleted successfully"}, status=HTTP_204_NO_CONTENT)
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=HTTP_404_NOT_FOUND)

