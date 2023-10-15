from channels.routing import ProtocolTypeRouter, URLRouter
from todo_app import routing

application = ProtocolTypeRouter({
    # Use the URLRouter to route Websocket requests
    "websocket": URLRouter(
        routing.websocket_urlpatterns
    ),
})