# Generated by Django 5.1 on 2024-09-03 17:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='prerequisites',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(), default=[], size=None),
        ),
        migrations.AlterField(
            model_name='course',
            name='subcategories',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(), default=[], size=None),
        ),
        migrations.AlterField(
            model_name='course',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
