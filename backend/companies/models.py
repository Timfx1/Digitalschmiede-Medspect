from django.db import models

# companies/models.py

class Company(models.Model):
    aktenzeichen = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    address = models.TextField()
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
        # Show both the company name and aktenzeichen for clear identification
        return f"{self.name} ({self.aktenzeichen})"

# inspections/models.py


# inspections/models.py

class Inspection(models.Model):
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, to_field='aktenzeichen')
    inspection_date = models.DateField()
    inspector_name = models.CharField(max_length=255)
    team_lead = models.CharField(max_length=255, null=True, blank=True)
    additional_inspectors = models.TextField(null=True, blank=True)
    authority = models.TextField(null=True, blank=True)
    reference_number = models.CharField(max_length=255, null=True, blank=True)
    introduction = models.TextField(null=True, blank=True)
    smf_info = models.TextField(null=True, blank=True)

    quality_management = models.TextField(null=True, blank=True)
    personnel = models.TextField(null=True, blank=True)
    equipment = models.TextField(null=True, blank=True)
    documentation = models.TextField(null=True, blank=True)
    production = models.TextField(null=True, blank=True)
    quality_control = models.TextField(null=True, blank=True)
    contract_testing = models.TextField(null=True, blank=True)
    complaints = models.TextField(null=True, blank=True)
    self_inspection = models.TextField(null=True, blank=True)
    storage = models.TextField(null=True, blank=True)
    other_aspects = models.TextField(null=True, blank=True)
    site_description = models.TextField(null=True, blank=True)
    samples_taken = models.TextField(null=True, blank=True)

    previous_inspection = models.TextField(null=True, blank=True)
    findings = models.TextField(null=True, blank=True)
    active_substances = models.TextField(null=True, blank=True)
    conclusions = models.TextField(null=True, blank=True)
    critical_errors = models.TextField(null=True, blank=True)
    serious_errors = models.TextField(null=True, blank=True)
    other_errors = models.TextField(null=True, blank=True)
    remarks = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Inspection for {self.company} on {self.inspection_date}"