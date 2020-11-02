from django.conf import settings
from django.db import models


class Call(models.Model):
    "Generated Model"
    placecall = models.ForeignKey(
        "home.CustomText",
        on_delete=models.CASCADE,
        related_name="call_placecall",
    )


# Create your models here.
