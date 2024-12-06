#!/bin/sh
# Start Nginx

nginx -t

service nginx start

# Keep the container running
tail -f /dev/null