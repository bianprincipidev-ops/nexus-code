from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MensajeSerializer

@api_view(['POST'])
def enviar_mensaje(request):
    serializer = MensajeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)