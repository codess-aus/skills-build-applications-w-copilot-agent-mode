from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import datetime

class Command(BaseCommand):
    help = 'Populate octofit_db with test data for users, teams, activities, leaderboard, and workouts collections'

    def handle(self, *args, **kwargs):
        # Users
        User.objects.create(email='alice@example.com', name='Alice', password='password1')
        User.objects.create(email='bob@example.com', name='Bob', password='password2')
        User.objects.create(email='carol@example.com', name='Carol', password='password3')

        # Teams
        Team.objects.create(name='Team Alpha', members=['alice@example.com', 'bob@example.com'])
        Team.objects.create(name='Team Beta', members=['carol@example.com'])

        # Activities
        Activity.objects.create(user='alice@example.com', type='run', duration=30, date=datetime(2025, 8, 20))
        Activity.objects.create(user='bob@example.com', type='walk', duration=45, date=datetime(2025, 8, 21))
        Activity.objects.create(user='carol@example.com', type='strength', duration=60, date=datetime(2025, 8, 22))

        # Leaderboard
        Leaderboard.objects.create(team='Team Alpha', points=150)
        Leaderboard.objects.create(team='Team Beta', points=100)

        # Workouts
        Workout.objects.create(name='Push Ups', description='Do 20 push ups')
        Workout.objects.create(name='Squats', description='Do 30 squats')
        Workout.objects.create(name='Plank', description='Hold plank for 1 minute')

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
