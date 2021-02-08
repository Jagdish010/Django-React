from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.

class ArticleTag(models.Model):
	tag = models.CharField(max_length=200)
	
	def __str__(self):
		return self.tag

class Article(models.Model):
	title = models.CharField(max_length=120)
	content = models.TextField(null=True)
	posting_date = models.DateField(null=True)
	CATEGORY = (('HL', 'Head Line'),
		('MP', 'Middle Page'),
		('A', 'Advertization'))
	category = models.CharField(_('Category'), max_length=100, choices=CATEGORY, null=True)
	timeline =  models.IntegerField(null=True)

	# image = models.ImageField(default="profile_image.png", null=True, blank=True)

	tag = models.ManyToManyField(ArticleTag, blank=True)
	date_created = models.DateTimeField(auto_now_add=True)


	def __str__(self):
		return self.title