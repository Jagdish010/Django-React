from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views.article_api import (
	ArticleListView,
	ArticleDetailView,
	ArticleCreateView,
	ArticleUpdateView,
	ArticleDeleteView)
from .views.article_api import ArticleViewSet

router = DefaultRouter()
router.register('article', ArticleViewSet, basename='article')


urlpatterns = [
	path('', ArticleListView.as_view()),
	path('<pk>', ArticleDetailView.as_view()),
	path('create/', ArticleCreateView.as_view()),
	path('<pk>/update/', ArticleUpdateView.as_view()),
	path('<pk>/delete/', ArticleDeleteView.as_view()), path('', include(router.urls))
]

# urlpatterns += router.urls