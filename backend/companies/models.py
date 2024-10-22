from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    aktenzeichen = models.CharField(max_length=255, null=True, blank=True)
    benutzername = models.CharField(max_length=255, null=True, blank=True)
    strasse = models.CharField(max_length=255, null=True, blank=True)
    nummer = models.CharField(max_length=255, null=True, blank=True)
    postzahl = models.CharField(max_length=255, null=True, blank=True)
    land = models.CharField(max_length=255, null=True, blank=True)
    duns_nr = models.CharField(max_length=255, null=True, blank=True)
    gps_koordinaten = models.CharField(max_length=255, null=True, blank=True)
    eudra_reference_number = models.CharField(max_length=255, null=True, blank=True)
    org_id = models.CharField(max_length=255, null=True, blank=True)
    loc_id = models.CharField(max_length=255, null=True, blank=True)
    betriebstaette = models.CharField(max_length=255, null=True, blank=True)
    kontaktperson = models.CharField(max_length=255, null=True, blank=True)
    telefon = models.CharField(max_length=255, null=True, blank=True)
    fax = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    notfallnummer = models.CharField(max_length=255, null=True, blank=True)
   

    def __str__(self):
        return self.name

# inspections/models.py


class Inspection(models.Model):
    company = models.ForeignKey(Company, related_name='inspections', on_delete=models.CASCADE)
    inspection_date = models.DateField()
    inspector_name = models.CharField(max_length=255)
    notes = models.TextField()

    def __str__(self):
        return f"Inspection for {self.company.name} on {self.inspection_date}"