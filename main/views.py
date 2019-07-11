from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from utils.exec import Executor
import json

class GetPussy(generics.ListAPIView):
    def get(self, request):
        int_name = Executor.exec("ls /sys/class/net").split('\n')
        result_dict = {}
        for interface in int_name:
            result_dict.__setitem__(interface, [info for info in json.loads(Executor.exec("ip -j link list dev {}".format(interface)))[0].values()])
        return Response(result_dict)

def index(request):
    return render(request, 'main/index.html')

