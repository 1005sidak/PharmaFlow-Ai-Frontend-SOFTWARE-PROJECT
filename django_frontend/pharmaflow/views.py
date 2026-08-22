from django.shortcuts import render


def landing(request):
    return render(request, 'landing.html')


def login_page(request):
    return render(request, 'auth/login.html')


def signup(request):
    return render(request, 'auth/signup.html')


def logout_page(request):
    return render(request, 'landing.html')


def dashboard(request):
    return render(request, 'dashboard/dashboard.html')


def medicines(request):
    return render(request, 'dashboard/medicines.html')


def inventory(request):
    return render(request, 'dashboard/inventory.html')


def sales(request):
    return render(request, 'dashboard/sales.html')


def purchases(request):
    return render(request, 'dashboard/purchases.html')


def alerts(request):
    return render(request, 'dashboard/alerts.html')


def analytics(request):
    return render(request, 'dashboard/analytics.html')


def expiry_risk(request):
    return render(request, 'dashboard/expiry_risk.html')


def settings_page(request):
    return render(request, 'dashboard/settings.html')
