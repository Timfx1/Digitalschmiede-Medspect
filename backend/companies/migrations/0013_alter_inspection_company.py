# Generated by Django 4.2.16 on 2024-10-25 11:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0012_alter_company_aktenzeichen_alter_inspection_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inspection',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='companies.company', to_field='aktenzeichen'),
        ),
    ]
