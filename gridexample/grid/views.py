# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.template import loader, RequestContext
from django.shortcuts import render
from django.http import HttpResponse
from .models import Book

def index(request):
    books = Book.objects.all()
    template = loader.get_template('grid/index.html')
    context={'books': books}
    return HttpResponse(template.render(context))





