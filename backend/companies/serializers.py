from rest_framework import serializers
from .models import Company, Inspection


class CompanySerializer(serializers.ModelSerializer):
    address = serializers.SerializerMethodField()  # Create a custom field for address

    class Meta:
        model = Company
        fields = '__all__'  # This will include all fields of the model

    def get_address(self, obj):
        """Return the formatted address string for the company."""
        address_parts = [
            f"{obj.strasse} {obj.nummer}".strip(),
            obj.postzahl,
            obj.land
        ]
        return ", ".join(filter(None, address_parts))  # Combines non-empty parts


class InspectionSerializer(serializers.ModelSerializer):
    company = serializers.SlugRelatedField(slug_field='aktenzeichen', queryset=Company.objects.all())
    class Meta:
        model = Inspection
        fields = [
           # 'company',  # Include this if you want to return it in responses
            'inspection_date',
            'inspector_name',
            'team_lead',
            'authority',
            'reference_number',
            'introduction',
            'smf_info',
            'critical_errors',
            'serious_errors',
            'other_errors',
            'remarks',
            'findings',
            'active_substances',  # New field
            'conclusions',        # New field
            'previous_inspection',# New field
            'quality_management',  # New field (if included in model)
            'personnel',          # New field (if included in model)
            'equipment',          # New field (if included in model)
            'documentation',      # New field (if included in model)
            'production',         # New field (if included in model)
            'quality_control',    # New field (if included in model)
            'contract_testing',    # New field (if included in model)
            'complaints',         # New field (if included in model)
            'self_inspection',    # New field (if included in model)
            'storage',            # New field (if included in model)
            'other_aspects',      # New field (if included in model)
            'site_description',    # New field (if included in model)
            'samples_taken',       # New field (if included in model)
        ]
