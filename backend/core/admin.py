from django.contrib import admin

from . import models


@admin.register(models.Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'product')
