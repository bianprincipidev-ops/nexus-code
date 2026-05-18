from django.urls import path
from .views import enviar_mensaje

urlpatterns = [
    path('enviar/', enviar_mensaje, name='enviar_mensaje'),
]