from django.shortcuts import render
from .models import Project
# Create your views here.
def home(request):
    projects=Project.objects.all()
   
   
   
    data={
        'projects':projects,
        
        
    }
    return render(request,'home.html',data)