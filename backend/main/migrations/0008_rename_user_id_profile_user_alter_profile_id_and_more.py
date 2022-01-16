# Generated by Django 4.0.1 on 2022-01-16 03:35

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_profile_id_alter_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='profile',
            name='id',
            field=models.UUIDField(default=uuid.UUID('2fffe017-07a1-47d4-b826-e341765d981f'), primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default=uuid.UUID('c1d61d5a-6a09-4abe-b525-09a06a7bf704'), primary_key=True, serialize=False, unique=True),
        ),
    ]