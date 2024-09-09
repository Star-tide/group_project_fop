from django.urls import path, include
from .views import CreateCourse, CreateQuestion


urlpatterns = [
    # CreateCourse.asview
    path('create/', CreateCourse.as_view()),
    path('question/', CreateQuestion.as_view()),
]