from rest_framework import serializers
from .models import Company
from .models import Inspection


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'  # This will include all fields of the model


class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspection
        fields = '__all__'  # Include 'id' if you want to return it in responses
