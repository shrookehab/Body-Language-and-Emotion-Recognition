import sys
sys.path.insert(1, 'E:\mehisen\emotic-master')

from django.apps import AppConfig

from yolo_inference import apiModel


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
    model=apiModel()
