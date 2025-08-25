from rest_framework import viewsets
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

codespace_url = 'https://studious-xylophone-rxr9pgx7742xqv6-8000.app.github.dev'

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': f'{codespace_url}/api/users/',
        'teams': f'{codespace_url}/api/teams/',
        'activity': f'{codespace_url}/api/activity/',
        'leaderboard': f'{codespace_url}/api/leaderboard/',
        'workouts': f'{codespace_url}/api/workouts/',
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
