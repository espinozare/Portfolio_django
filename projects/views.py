from django.shortcuts import render
from projects.models import Project
from django.http import FileResponse, Http404
import os   
from django.conf import settings
# Create your views here.
def home(request):
    projects=Project.objects.all()
    featured_projects = Project.objects.order_by('-created_date').filter(is_featured=True)
   
   
   
    data={
        'projects':projects,
        'featured_projects': featured_projects,
        
        
    }
    return render(request,'home.html',data)

def cv(request):
 return render (request, 'cv.html')
    
  