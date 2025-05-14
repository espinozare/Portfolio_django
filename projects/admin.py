from django.contrib import admin
from .models import Project
from django.utils.html import format_html

# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    def thumbnail(self, object):
        if object.photo:  # Check if the photo field has an associated file
            return format_html('<img src="{}" width="40" style="border-radius: 50px;" />'.format(object.photo.url))
        return format_html('<span style="color: red;">No Photo</span>')  # Mensaje si no hay foto

    thumbnail.short_description = 'Photo'

    list_display = ('id', 'thumbnail', 'project_name', 'created_date')
    list_display_links = ('id', 'thumbnail', 'project_name')

admin.site.register(Project, ProjectAdmin)