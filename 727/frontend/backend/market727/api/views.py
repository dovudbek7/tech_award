from .models import Product, Company, Category, Carousel, OTP, Order, OrderItem, Excursion
from .serializers import (ProductSerializer, CompanySerializer, CategorySerializer, CarouselSerializer,
                          OTPCreateSerializer, OTPVerifySerializer, UserSignUpSerializer, OrderSerializer,
                          OrderCreateSerializer, ExcursionSerializer)
from rest_framework.permissions import IsAuthenticated

import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ProductFilter


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CarouselViewSet(viewsets.ModelViewSet):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    # permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action in ['create', 'update']:
            return OrderCreateSerializer
        return OrderSerializer


class OTPCreateView(APIView):
    def post(self, request, *args, **kwargs):
        phone_number = request.data.get('user_phone_number')  # Assuming the input is 'phone_number'

        # Find user by phone number (assuming UserProfile or similar contains phone_number field)
        try:
            user = User.objects.get(userprofile__phone_number=phone_number)
        except User.DoesNotExist:
            return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Create OTP instance for the user
        otp_instance = OTP.objects.create(user=user)
        serializer = OTPCreateSerializer(otp_instance)

        # Send OTP via SMS using Eskiz service
        sms_response = self.send_sms(phone_number, otp_instance.otp)
        print(sms_response)
        if sms_response and sms_response.status_code == 200:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"detail": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get_token(self):
        email = "kholikulovelyor@gmail.com"
        password = "lWMS8DpghTyKoxHalY8Rvi8OocKFLxYx4pWBSL9f"

        response = requests.post("https://notify.eskiz.uz/api/auth/login", json={
            "email": email,
            "password": password
        })

        if response.status_code == 200:
            token = response.json()["data"]["token"]
            return token
        else:
            return None

    def send_sms(self, phone_number, otp):
        url = 'https://notify.eskiz.uz/api/message/sms/send'
        token = self.get_token()

        print(phone_number, otp)

        if token:
            headers = {'Authorization': f'Bearer {token}'}
            data = {
                'mobile_phone': phone_number,
                'message': f'Kaizen Books sayti orqali ro\'yxatdan o\'tish uchun tasdiqlash kodingiz: {otp}',
                'from': '4546'
            }
            response = requests.post(url, headers=headers, data=data)

            print(1, response.json())

            if response.status_code == 200:
                return response  # Return the full response object
            else:
                return None  # Handle the case where SMS sending failed
        else:
            return None  # Handle the case where token retrieval failed


class OTPVerifyView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = OTPVerifySerializer(data=request.data)
        if serializer.is_valid():
            phone_number = serializer.validated_data.get('phone_number')
            otp = serializer.validated_data.get('otp')

            try:
                user = User.objects.get(userprofile__phone_number=phone_number)
                otp_instance = OTP.objects.get(user=user, otp=otp, is_verified=False)
                otp_instance.is_verified = True
                otp_instance.save()
                return Response({"detail": "OTP verified successfully"}, status=status.HTTP_200_OK)
            except (User.DoesNotExist, OTP.DoesNotExist):
                return Response({"detail": "Invalid OTP or Phone Number"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSignUpView(APIView):
    def post(self, request, *args, **kwargs):
        phone_number = request.data.get('phone_number')
        serializer = UserSignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print(self.otp_create(phone_number))
            return Response({"detail": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def otp_create(self, phone_number):
            try:
                user = User.objects.get(userprofile__phone_number=phone_number)
            except User.DoesNotExist:
                return Response({"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND)

            # Create OTP instance for the user
            otp_instance = OTP.objects.create(user=user)
            serializer = OTPCreateSerializer(otp_instance)

            # Send OTP via SMS using Eskiz service
            sms_response = OTPCreateView().send_sms(phone_number, otp_instance.otp)
            print(sms_response)
            if sms_response and sms_response.status_code == 200:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({"detail": "Failed to send OTP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ExcursionViewSet(viewsets.ModelViewSet):
    queryset = Excursion.objects.all()
    serializer_class = ExcursionSerializer
