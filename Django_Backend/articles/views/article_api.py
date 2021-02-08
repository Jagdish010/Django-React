from rest_framework.generics import (
	ListAPIView,
	RetrieveAPIView,
	CreateAPIView,
	UpdateAPIView,
	DestroyAPIView)
from rest_framework import viewsets

from ..models import Article
from ..serializers.article_serializer import ArticleSerializer


class ArticleListView(ListAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

class ArticleDetailView(RetrieveAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

class ArticleCreateView(CreateAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

class ArticleUpdateView(UpdateAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

class ArticleDeleteView(DestroyAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer