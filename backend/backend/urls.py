from core import views as core_views
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()

urlpatterns = router.urls
router.register(r"item", core_views.ItemViewSet, basename="item")

urlpatterns = router.urls

urlpatterns += [
    path("admin/", admin.site.urls),
    path("auth/", obtain_auth_token),
]
