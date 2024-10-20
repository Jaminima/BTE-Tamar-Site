#!/bin/sh
# Start Nginx
service nginx start

# Keep the container running
tail -f /dev/null