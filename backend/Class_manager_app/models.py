from django.db import models
from django.contrib.postgres.fields import ArrayField
#Class_manager_app
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