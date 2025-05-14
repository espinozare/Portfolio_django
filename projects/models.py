from django.db import models
from datetime import datetime
from django_ckeditor_5.fields import CKEditor5Field



# Create your models here.


class Project(models.Model):
    project_name = models.CharField(max_length=200,)
    description = CKEditor5Field(config_name='default', blank=True)
    photo=models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    category = models.CharField(max_length=100)
    created_date=models.DateTimeField(default=datetime.now,blank=True)
    website_url = models.URLField(blank=True, null=True)  # New field for the project link
    github_url = models.URLField(blank=True, null=True)  # New field for the project link



    def __str__(self):
        return self.project_name
# Create your models here.
