from django.urls import path
from . import views

urlpatterns = [
    path('list/',views.todoList , name = 'List'),
    path('gettodo/<str:pk>/',views.todoDetail , name = 'gettodo' ),
    path('newtodo/',views.todoCreate , name = 'newtodo' ),
    path('edittodo/<str:pk>/',views.todoUpdate , name = 'edittodo'),
    path('deletetodo/<str:pk>/',views.todoDelete , name = 'deletetodo'),
    # path('checked/<int:todoId>/',views.todoDelete , name = 'checked')
]
