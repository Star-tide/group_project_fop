from django.db import models
from django.contrib.postgres.fields import ArrayField

#USER_app (User)
class User(models.Model):
    pass
# Create your models here.

#COURSE_app (Course, Question, Answer)
class Course(models.Model):
    question_id = models.CharField()
    difficulty = models.CharField()
    title = models.CharField()
    subcategories = ArrayField(models.CharField())
    prerequisites = ArrayField(models.CharField())
    course_description = models.TextField()
    users = models.ManyToManyField(User)

class Question(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    learning_content = models.TextField()
    prompt = models.TextField()
    solution = models.TextField()
    is_correct = models.BooleanField(default = False)

class Answer(models.Model):
    user_solution = models.CharField()
    question = models.OneToOneField(Question)
