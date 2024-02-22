from django.db import models

class Roles(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=100) 
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100) 

    def __str__(self):
        return self.username
