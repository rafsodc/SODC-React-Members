# pull official base image
FROM node:13.12.0-alpine AS react_app_common

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
#RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
FROM react_app_common AS react_app_dev
CMD ["npm", "start"]

FROM nginx:stable AS react_app_prod
COPY --from=react_app_common /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
