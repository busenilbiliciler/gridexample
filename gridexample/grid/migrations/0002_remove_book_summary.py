# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-01 10:53
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grid', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='summary',
        ),
    ]
