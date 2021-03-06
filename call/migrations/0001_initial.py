# Generated by Django 2.2.17 on 2020-11-02 22:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("home", "0002_load_initial_data"),
    ]

    operations = [
        migrations.CreateModel(
            name="Call",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "placecall",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="call_placecall",
                        to="home.CustomText",
                    ),
                ),
            ],
        ),
    ]
