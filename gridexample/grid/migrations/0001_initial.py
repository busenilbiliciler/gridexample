# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-07-01 10:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=200)),
                ('edition', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('summary', models.TextField()),
                ('author', models.CharField(max_length=200)),
            ],
        ),
    ]
