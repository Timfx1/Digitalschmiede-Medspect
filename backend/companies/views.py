from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from .models import Company, Inspection
from .serializers import CompanySerializer, InspectionSerializer
from django.http import HttpResponse
from docx import Document  # Ensure you have python-docx installed
from io import BytesIO

class CompanyListCreate(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class InspectionViewSet(viewsets.ModelViewSet):
    queryset = Inspection.objects.all()
    serializer_class = InspectionSerializer

class GenerateInspectionDoc(generics.CreateAPIView):
    serializer_class = InspectionSerializer  # Optional: if you want to validate the input data

    def post(self, request, *args, **kwargs):
        # Extract inspection data from the request
        inspection_data = request.data
        
        # Create a new Document
        doc = Document()
        doc.add_heading('Inspection Report', level=1)

        # Add inspection data to the document
        doc.add_paragraph(f"Company: {inspection_data['company']}")
        doc.add_paragraph(f"Inspection Date: {inspection_data['inspection_date']}")
        doc.add_paragraph(f"Inspector Name: {inspection_data['inspector_name']}")
        doc.add_paragraph(f"Notes: {inspection_data['notes']}")

        # Save the document to a BytesIO object
        buffer = BytesIO()
        doc.save(buffer)
        buffer.seek(0)

        # Create a response with the DOCX file
        response = HttpResponse(
            buffer.getvalue(),
            content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        )
        response['Content-Disposition'] = 'attachment; filename="inspection_report.docx"'
        return response
