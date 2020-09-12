# from django.shortcuts import render
# from .models import Todo
# from rest_framework import viewsets
# from .serializers import TodoSerializer

# # @api_view(['GET'])
# class TodoViewSet(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

# def newtask(request):
#     todo = Todo(title = request.POST['taskName'],description = request.POST['description'],status = 0)
#     if(todo.save()):
#         return {'status': 1}
#     else:
#         return {'status': 0}
    
# def edittask(request,todoId):  
#     if(Todo.objects.filter(id=todoId).update(title = request.POST['taskName'],description = request.POST['description'])) :
#         return {'status': 1}
#     else:
#         return {'status': 0}

# def deletetask(request,todoId):
#     todo = Todo.objects.get(id=todoId)
#     if(todo.delete()):
#         return {'status': 1}
#     else:
#         return {'status': 0} 

# def checked(request,todoId):
#     print(request)

from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TodoSerializer

from .models import Todo
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/list/',
		'Detail View':'/gettodo/<str:pk>/',
		'Create':'/newtodo/',
		'Update':'/edittodo/<str:pk>/',
		'Delete':'/tdeletetodo/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def todoList(request):
	todo = Todo.objects.all().order_by('-id')
	serializer = TodoSerializer(todo, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def todoDetail(request, pk):
	todo = Todo.objects.get(id=pk)
	serializer = TodoSerializer(todo, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def todoCreate(request):
	serializer = TodoSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def todoUpdate(request, pk):
	todo = Todo.objects.get(id=pk)
	serializer = TodoSerializer(instance=todo, data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def todoDelete(request, pk):
	todo = Todo.objects.get(id=pk)
	todo.delete()

	return Response('1')





    