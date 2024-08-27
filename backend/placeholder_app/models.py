from django.db import models
from django.contrib.postgres.fields import ArrayField


class User(models.Model):
    pass
# Create your models here.

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

class Answer(models.Model):
    user_solution = models.CharField()
    question = models.OneToOneField(Question)

class Enrollment(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    student_id = models.ForeignKey(User, on_delete= models.CASCADE)


class Certificate_completion(models.Model):
    name = models.OneToOneField(User)
    title = models.CharField()

class Lesson_plan(models.Model):
    title = models.CharField()
    subcategories = ArrayField(models.CharField())
    programming_language = models.CharField()
    certificate_completion = models.OneToOneField(Certificate_completion)

class Curriculum(models.Model):
    name = models.CharField()
    description = models.TextField()
    lesson_plan = models.ForeignKey(Lesson_plan, on_delete=models.CASCADE)