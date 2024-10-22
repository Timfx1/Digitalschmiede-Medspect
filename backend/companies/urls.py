from django.urls import path, include
from .views import CompanyListCreate, CompanyDetail, GenerateInspectionDoc
from rest_framework.routers import DefaultRouter
from .views import InspectionViewSet

router = DefaultRouter()
router.register(r'inspections', InspectionViewSet)

urlpatterns = [
    path('companies/', CompanyListCreate.as_view(), name='company-list-create'),  # List and create companies
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),  # Detail view for a specific company
    path('generate-inspection-doc/', GenerateInspectionDoc.as_view(), name='generate-inspection-doc'),  # New endpoint for generating inspection report
    path('', include(router.urls)),  # Include all other routes from the router
]
