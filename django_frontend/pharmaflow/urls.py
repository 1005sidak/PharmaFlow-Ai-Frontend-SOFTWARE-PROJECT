from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('login/', views.login_page, name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout/', views.logout_page, name='logout'),
    path('app/', views.dashboard, name='dashboard'),
    path('app/medicines/', views.medicines, name='medicines'),
    path('app/inventory/', views.inventory, name='inventory'),
    path('app/sales/', views.sales, name='sales'),
    path('app/purchases/', views.purchases, name='purchases'),
    path('app/alerts/', views.alerts, name='alerts'),
    path('app/analytics/', views.analytics, name='analytics'),
    path('app/expiry-risk/', views.expiry_risk, name='expiry_risk'),
    path('app/settings/', views.settings_page, name='settings'),
]
