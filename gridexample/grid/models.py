# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Book(models.Model):
    book_name = models.CharField(max_length=200)
    edition = models.PositiveSmallIntegerField(blank=True, null=True)
    author = models.CharField(max_length=200)


def __str__(self):
    return self.book_name
