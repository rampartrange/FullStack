from django.urls import path
from .views import *

urlpatterns = [
    path("profile/by-user-id/<uuid:user_id>/", ProfileByUserIdListAPIView.as_view())
]
