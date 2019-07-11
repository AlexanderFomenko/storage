from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .utils import ls
from utils.exec import Executor
import json

class GetPussy(generics.ListAPIView):
    def get(self, request):
        # ans = Executor.exec('ip -j a').split('\n')
        return Response({'eth1':['12','10','3'],'eth2':['11','4','8']})

def index(request):
    return render(request, 'main/index.html')

