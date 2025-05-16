from django.shortcuts import render
from projects.models import Project
# Create your views here.
def home(request):
    projects=Project.objects.all()
    featured_projects = Project.objects.order_by('-created_date').filter(is_featured=True)
   
   
   
    data={
        'projects':projects,
        'featured_projects': featured_projects,
        
        
    }
    return render(request,'home.html',data)