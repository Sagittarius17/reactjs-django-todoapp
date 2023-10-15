from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from channels.generic.websocket import AsyncWebsocketConsumer
import json

class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'task_updates'
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        # Forward the message to the room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'task_update',
                'message': text_data
            }
        )

    async def task_update(self, event):
        message = event['message']

        # Send the message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))