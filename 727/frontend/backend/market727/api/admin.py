from django.contrib import admin
from .models import Product, Company, Category, Carousel, OTP, UserProfile, OrderItem, Order

admin.site.register(Product)
# admin.site.register(Comment)
admin.site.register(Company)
admin.site.register(Category)
admin.site.register(Carousel)
admin.site.register(OTP)
admin.site.register(UserProfile)


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1


class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]


admin.site.register(Order, OrderAdmin)
