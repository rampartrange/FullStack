# Generated by Django 4.0.1 on 2022-01-16 03:34

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_profile_id_alter_profile_user_id_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='id',
            field=models.UUIDField(default=uuid.UUID('279285dc-140d-4e4d-b5c4-e9a32bfec1e7'), primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default=uuid.UUID('0860ff36-7a0b-4c60-bff8-a668f394bb75'), primary_key=True, serialize=False, unique=True),
        ),
    ]
