from django.urls import path, include
from .views import CreateCourse


urlpatterns = [
    # CreateCourse.asview
    path('create/', CreateCourse.as_view()),
]