from rest_framework.routers import SimpleRouter
from .views import *
from .viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet


routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')

# USER
routes.register(r'user', UserViewSet, basename='user')

# PROFILE
routes.register(r'profile', ProfileViewSet, basename='profile')


urlpatterns = [
    *routes.urls
]