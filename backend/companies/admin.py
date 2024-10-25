from django.contrib import admin

# Register your models here.

from .models import Company, Inspection

class CompanyAdmin(admin.ModelAdmin):
    # Automatically get all fields from the Company model
    def get_list_display(self, request):
        return [field.name for field in Company._meta.fields]

admin.site.register(Company, CompanyAdmin)


@admin.register(Inspection)
class InspectionAdmin(admin.ModelAdmin):
    # Use '__all__' to automatically include all fields from the model
    list_display = [field.name for field in Inspection._meta.get_fields()]
