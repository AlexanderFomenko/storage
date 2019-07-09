from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .utils import ls
class GetPussy(generics.ListAPIView):
    def get(self, request):
        ans = str(ls()).split()
        return Response({'kek': ans})

def index(request):
    return render(request, 'main/index.html')

