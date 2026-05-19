from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import MensajeSerializer

@api_view(['POST'])
def enviar_mensaje(request):
    serializer = MensajeSerializer(data=request.data)
    if serializer.is_valid():
        # Primero guardamos en la base de datos local
        instancia_mensaje = serializer.save()
        
        # Extraemos los datos limpios para armar el mail
        nombre = serializer.validated_data.get('nombre', 'Alguien')
        correo_cliente = serializer.validated_data.get('email', 'No especificado')
        contenido = serializer.validated_data.get('mensaje', '')
        
        # Armamos el cuerpo del correo que te va a llegar a vos
        asunto_mail = f"💼 Nuevo mensaje de contacto de {nombre} - Nexus Code"
        cuerpo_mail = f"Has recibido un nuevo mensaje desde tu portfolio:\n\n" \
                      f"Nombre: {nombre}\n" \
                      f"Email de contacto: {correo_cliente}\n\n" \
                      f"Mensaje:\n{contenido}"
        
        try:
            # Mandamos el mail a tu propia casilla
            send_mail(
                subject=asunto_mail,
                message=cuerpo_mail,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER], # Te llega a vos misma
                fail_silently=False,
            )
        except Exception as e:
            # Si el mail falla por mala config, igual avisamos que se guardó en la DB
            print(f"Error al enviar el correo: {e}")

        return Response({"status": "success"}, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)