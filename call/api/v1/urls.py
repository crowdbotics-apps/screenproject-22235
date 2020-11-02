from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CallViewSet

router = DefaultRouter()
router.register("call", CallViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
