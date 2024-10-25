from django.urls import path, include
from .views import CompanyListCreate, CompanyDetail, GenerateInspectionDoc
from rest_framework.routers import DefaultRouter
from .views import InspectionViewSet

# Create a router and register the InspectionViewSet with it
router = DefaultRouter()
router.register(r'inspections', InspectionViewSet)

urlpatterns = [
    # Company endpoints
    path('companies/', CompanyListCreate.as_view(), name='company-list-create'),  # List and create companies
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),  # Detail view for a specific company

    # Custom endpoint for generating inspection reports
    path('generate-inspection-doc/', GenerateInspectionDoc.as_view(), name='generate-inspection-doc'),  # Generate inspection report

    # Include all other routes from the router, which includes the inspection endpoints
    path('', include(router.urls)),  
]
