from django.db import models
from django.contrib.postgres.fields import ArrayField
from user.models import User
from django.core import validators as v
#COURSE_app (Course, Question, Answer)
class Course(models.Model):
    difficulty = models.IntegerField(validators=[v.MaxValueValidator(3), v.MinValueValidator(1)])
    title = models.CharField(max_length=255)
    subcategories = ArrayField(models.CharField(), default=list, blank=True)
    prerequisites = ArrayField(models.CharField(), default=list, blank=True)
    course_description = models.TextField(max_length=500)
    #users = models.ManyToManyField(User)

class Question(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    learning_content = models.TextField()
    prompt = models.TextField()
    solution = models.TextField()
    is_correct = models.BooleanField(default = False)

class Answer(models.Model):
    user_solution = models.CharField()
    question = models.OneToOneField(Question, on_delete=models.CASCADE)
