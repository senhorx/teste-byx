from rest_framework_json_api import serializers

from .models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("product", "date", "value", "seller", "product_type")
