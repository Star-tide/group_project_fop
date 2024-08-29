from django.db import models
from django.contrib.postgres.fields import ArrayField
from user.models import User
from Course_app.models import Course
#Class_manager_app
class Enrollment(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    student_id = models.ForeignKey(User, on_delete= models.CASCADE)

class Certificate_completion(models.Model):
    name = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField()

class Lesson_plan(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField()
    subcategories = ArrayField(models.CharField())
    programming_language = models.CharField()
    certificate_completion = models.OneToOneField(Certificate_completion, on_delete=models.CASCADE)
    courses = models.ForeignKey(Course, on_delete=models.CASCADE)

class Curriculum(models.Model):
    name = models.CharField()
    description = models.TextField()
    lesson_plan = models.ForeignKey(Lesson_plan, on_delete=models.CASCADE)


