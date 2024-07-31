# Generated by Django 4.2.13 on 2024-07-25 11:39

import api.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Carousel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_en', models.ImageField(blank=True, null=True, upload_to='carousel_images/en/')),
                ('image_ru', models.ImageField(blank=True, null=True, upload_to='carousel_images/ru/')),
                ('image_uz', models.ImageField(blank=True, null=True, upload_to='carousel_images/uz/')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('name_ru', models.CharField(blank=True, default='', max_length=255, null=True)),
                ('name_en', models.CharField(blank=True, default='', max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('name_ru', models.CharField(blank=True, default='', max_length=255, null=True)),
                ('name_en', models.CharField(blank=True, default='', max_length=255, null=True)),
                ('product_cover', models.ImageField(blank=True, null=True, upload_to='company/')),
                ('info', models.TextField()),
                ('info_ru', models.TextField()),
                ('info_en', models.TextField()),
                ('address', models.CharField(max_length=255)),
                ('contact', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Pending', 'Kutilmoqda'), ('Accepted', 'Qabul qilindi'), ('Shipped', "Yo'lda"), ('Cancelled', 'Bekor qilindi'), ('Delivered', 'Yetkazib berildi')], default='Pending', max_length=20)),
                ('status_ru', models.CharField(blank=True, choices=[('Pending', 'В ожидании'), ('Accepted', 'Принял'), ('Shipped', 'Отправленный'), ('Cancelled', 'Отменено'), ('Delivered', 'Доставленный')], default='Pending', max_length=20, null=True)),
                ('status_en', models.CharField(blank=True, choices=[('Pending', 'Pending'), ('Accepted', 'Processing'), ('Shipped', 'Shipped'), ('Cancelled', 'Cancelled'), ('Delivered', 'Delivered')], default='Pending', max_length=20, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('address', models.TextField(default=None)),
                ('delivery_type', models.CharField(choices=[('delivery', 'Yetkazib berish'), ('mail', 'Pochta'), ('takeaway', 'Olib ketish')], default='takeaway', max_length=100)),
                ('payment_method', models.CharField(choices=[('click', 'Click'), ('payme', 'Payme'), ('naqd', 'Naqd')], default='naqd', max_length=100)),
                ('promokod', models.CharField(blank=True, max_length=50)),
                ('comment', models.TextField(blank=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=15)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(default=None, max_length=255)),
                ('product_name_ru', models.CharField(default='', max_length=255, null=True)),
                ('product_name_en', models.CharField(default='', max_length=255, null=True)),
                ('product_price_10', models.IntegerField(default=0)),
                ('product_price_100', models.IntegerField(default=0)),
                ('product_price_1000', models.IntegerField(default=0)),
                ('product_year', models.IntegerField(default=0)),
                ('product_description', models.TextField(blank=True, null=True)),
                ('product_count', models.IntegerField(default=0)),
                ('product_rating', models.FloatField(default=0)),
                ('product_cover', models.ImageField(blank=True, null=True, upload_to='covers/')),
                ('product_category', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.category')),
                ('product_company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.company')),
            ],
        ),
        migrations.CreateModel(
            name='OTP',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('otp', models.CharField(default=api.models.generate_otp, max_length=4)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField()),
                ('total_price', models.IntegerField(default=0)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='api.order')),
                ('product', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.product')),
            ],
        ),
        migrations.CreateModel(
            name='Excursion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('alert', models.BooleanField(default=False)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.company')),
            ],
        ),
    ]