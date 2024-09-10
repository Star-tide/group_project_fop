from django.urls import path, include
from .views import CreateCourse, CreateQuestion, GetAllCourses, DeleteCourse


urlpatterns = [
    # CreateCourse.asview
    path('create/', CreateCourse.as_view()),
    path('question/', CreateQuestion.as_view()),
    path('getall/', GetAllCourses.as_view()),
    path('deletecourse/<int:course_id>/', DeleteCourse.as_view()),

]