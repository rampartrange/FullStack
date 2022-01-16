from .serializers import *
from .models import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['username']
    ordering = ['-username']

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()

    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)

        return obj

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    http_method_names = ['post', 'get']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        profile = serializer.save()
        serializer = ProfileResponseSerializer(profile)
        return Response({
            "profile": serializer.data
        }, status=status.HTTP_201_CREATED)
    

    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = Profile.objects.get(lookup_field_value)
        # self.check_object_permissions(self.request, obj)

        return obj