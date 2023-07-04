from rest_framework import status, viewsets
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from utils.parser import parser_txt_to_dict

from .models import Item
from .serializers import ItemSerializer


class ItemViewSet(ListModelMixin, RetrieveModelMixin, viewsets.GenericViewSet):
    """
    A simple ViewSet for listing or retrieving items.
    """

    permission_classes = (IsAuthenticated,)
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    parser_classes = (MultiPartParser,)

    def create(self, request):
        try:
            file = request.FILES.get("file")
            file_for_dict = parser_txt_to_dict(file)
            for item in file_for_dict:
                serializer = self.serializer_class(data=item)
                serializer.is_valid(raise_exception=True)
                serializer.save()
            return Response(file_for_dict, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": e}, status=status.HTTP_400_BAD_REQUEST)
