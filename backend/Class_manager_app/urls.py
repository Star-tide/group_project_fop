from django.contrib import admin
from django.urls import path
from .views import CreatePlan

# path("signup/", Sign_up.as_view(), name="signup"),
urlpatterns = [
    path('create/', CreatePlan.as_view())
]
