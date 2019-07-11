from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
urlpatterns = [         
    path('',views.index, name='index' ),
    path('get', views.GetPussy.as_view())
]

