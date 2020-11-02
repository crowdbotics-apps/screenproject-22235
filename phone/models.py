from django.conf import settings
from django.db import models


class Phone(models.Model):
    "Generated Model"
    placecall = models.ManyToManyField(
        "call.Call",
        related_name="phone_placecall",
    )


# Create your models here.
