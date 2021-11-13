import os

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse, FileResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from wsgiref.util import FileWrapper
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import shutil
from django.shortcuts import render
from django.http import HttpResponse, StreamingHttpResponse, HttpResponseServerError
from .apps import ApiConfig


class call_model(APIView):

    def post(self, request):
        if request.method == 'POST':
            image = request.FILES['image']

            if os.path.exists("1.png"):
                os.remove("1.png")

            path = default_storage.save('1.png', ContentFile(image.read()))

            print(image)
            ApiConfig.model.yolo_infer('D:\FCIS/Fourth Year/GP/Project/django/emotic-master/deploy/1.png')

            print('done')

            shutil.copy2('D:\FCIS/Fourth Year/GP/Project/django/emotic-master/deploy/api/proj/debug_exp/results/img_2.jpg',
                         "static/result.jpg")

            return Response({"url": "http://127.0.0.1:8000/static/result.jpg"}, status=200)

class call_model2(APIView):

    def post(self, request):
        if request.method == 'POST':
            x = request.FILES['video']

            if os.path.exists("1.mp4"):
                os.remove("1.mp4")

            path = default_storage.save('1.mp4', ContentFile(x.read()))

            print(x)
            ApiConfig.model.yolo_video('D:\FCIS/Fourth Year/GP/Project/django/emotic-master/deploy/1.mp4')

            print('done')


            shutil.copy2('D:\FCIS/Fourth Year/GP/Project/django/emotic-master/deploy/api/proj/debug_exp/results/result_vid.avi', "static/result.avi")

            return Response({"url":"http://127.0.0.1:8000/static/result.avi"},status=200)


def OnlineDetection (request):
    try:
        return render(request, 'OnlineDetection.html')
    except HttpResponseServerError:
        print('error')

