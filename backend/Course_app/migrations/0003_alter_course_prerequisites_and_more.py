# Generated by Django 5.1 on 2024-09-03 17:41

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course_app', '0002_alter_course_prerequisites_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='prerequisites',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(), blank=True, default=[], size=None),
        ),
        migrations.AlterField(
            model_name='course',
            name='subcategories',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(), blank=True, default=[], size=None),
        ),
    ]
