from django.db import models
from django_extensions.db.models import TimeStampedModel
from utils.model_abstracts import Model


class QueueTypes(models.IntegerChoices):
    PRODUCTOR = 1
    AFFILIATED = 2
    PAY = 3
    SELLER = 4


class Item(TimeStampedModel, Model):
    product_type = models.IntegerField(
        choices=QueueTypes.choices, default=QueueTypes.PRODUCTOR
    )
    date = models.DateTimeField(auto_now=False, auto_now_add=False)
    product = models.CharField(max_length=30)
    value = models.IntegerField(default=0)
    seller = models.CharField(max_length=20)

    class Meta:
        verbose_name = "Item"
        verbose_name_plural = "Items"
        ordering = ["id"]

    def __str__(self):
        return self.product

    def amount(self):
        """converts value from cents to reais"""
        amount = float(self.value / 100)
        return amount
