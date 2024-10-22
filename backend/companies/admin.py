from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company, Inspection

class CompanyAdmin(admin.ModelAdmin):
    # Automatically get all fields from the Company model
    def get_list_display(self, request):
        return [field.name for field in Company._meta.fields]

admin.site.register(Company, CompanyAdmin)


@admin.register(Inspection)
class InspectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'company', 'inspection_date', 'inspector_name', 'notes')  # Display these fields in the list view
