FROM node:8
WORKDIR /usr/app
COPY . /usr/app
COPY . .
CMD [ "node", "src/seeds.js" ]  

# FROM mongo
# COPY data.json src/data.json
# CMD mongoimport --host mongodb --db alteos-project --collection employees --type json --file /data.json --jsonArray