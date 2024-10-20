FROM ubuntu:latest

#Install Neccessary Packages
RUN apt-get update && apt-get install -y \
    dos2unix \ 
    nginx

#Web Port
EXPOSE 80
EXPOSE 443

#Java Port
EXPOSE 25565

#Bedrock Port (UDP)
EXPOSE 19132/udp

#------Configure Nginx------

COPY ./nginx/default /etc/nginx/sites-available/default

RUN dos2unix /etc/nginx/sites-available/default

COPY ./nginx/ssl/pub.cer /etc/nginx/keys/pub.cer
COPY ./nginx/ssl/inter.cer /etc/nginx/keys/inter.cer
COPY ./nginx/ssl/pri.key /etc/nginx/keys/pri.key

#------Configure Website------
    
RUN mkdir /www-root
RUN chmod 777 /www-root

COPY ./site /www-root

#------Start The Server------

COPY docker-start.sh /docker-start.sh
RUN dos2unix /docker-start.sh

CMD ["/bin/bash", "/docker-start.sh"]