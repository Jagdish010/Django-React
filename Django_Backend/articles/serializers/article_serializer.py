from rest_framework import serializers
from ..models import Article, ArticleTag


class ArticleTagSerializer(serializers.RelatedField):
	def to_representation(self, value):
		return value.tag

	class Meta:
		model = ArticleTag


class ArticleSerializer(serializers.ModelSerializer):
	# get data in custom format
	tag = ArticleTagSerializer(read_only=True, many=True)

	class Meta:
		model = Article
		fields = '__all__'
		# get data in dict format (detail format)
		# depth = 1