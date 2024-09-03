from django.shortcuts import render
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
from .models import User
from .serializers import UserSerializer
from Course_app.models import Course
from Course_app.serializers import CourseSerializer

class Sign_up(APIView):

    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get("username", request.data.get("email"))
        new_user = User(**data)
        try:
            new_user.full_clean()
            new_user.save()
            new_user.set_password(data.get("password"))
            new_user.save()
            login(request, new_user)
            token = Token.objects.create(user = new_user)
            return Response({"User":new_user.display_name, "Email": new_user.email, "Token":token.key, "Success": "User has been successfully created"}, status=HTTP_201_CREATED)
        except ValidationError as e:
            # print(e)
            return Response(e, status=HTTP_400_BAD_REQUEST)
        
class Log_in(APIView):
    def post(self, request):
        data = request.data.copy()
        user = authenticate(username=data.get("email"), password=data.get("password"))
        # print(user)
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user = user)
            return Response({"user":user.display_name, "token":token.key}, status=HTTP_200_OK)
        return Response("No user matching credentials", status=HTTP_400_BAD_REQUEST)
    
class TokenReq(APIView):

    authentication_classes=[TokenAuthentication]
    permission_classes = [IsAuthenticated]

class Log_out(TokenReq):
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=HTTP_204_NO_CONTENT)
    
class Info(APIView):
    def get(self, request):
        user = request.user
        print(user)  # Get the currently authenticated user
        user_info = UserSerializer(user).data
        print(user_info)
        #  Get the courses the user is enrolled in
        enrolled_courses = Course.objects.filter(enrollment__student_id=user.id)
        course_serializer = CourseSerializer(enrolled_courses, many=True)

        
        
        data = {
            'user_info': user_info,
            'enrolled_courses': course_serializer.data,
            # 'lessons': lesson_serializer.data
        }

        return Response(data)


# class Info(APIView):
#     def get(self, request):
#         user = request.user  # Get the currently authenticated user

#         # Serialize the user's information
#         user_info = UserSerializer(user).data

#         # Get the courses the user is enrolled in
#         enrolled_courses = Course.objects.filter(enrollment__student_id=user.id)
#         course_serializer = CourseSerializer(enrolled_courses, many=True)

#         # Get the lessons associated with the courses the user is enrolled in
#         # lessons = Lesson_plan.objects.filter(courses__in=enrolled_courses)
#         # lesson_serializer = LessonPlanSerializer(lessons, many=True)

#         # Combine the data
#         data = {
#             'user_info': user_info,
#             'enrolled_courses': course_serializer.data,
#             # 'lessons': lesson_serializer.data
#         }

#         return Response(data)
    
''''
  "User": "eric",
  "Email": "eric@email.com",
  "Token": "e0a3c53ac71156a35d459fe847c778619937bafc",
  "Success": "User has been successfully created"
}


'''