# pull official base image
FROM node:20.4-alpine AS react_app_common

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
#RUN npm install --package-lock-only --legacy-peer-deps true
RUN npm install --legacy-peer-deps true
#RUN npm install react-scripts@3.4.1 -g
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# add app
COPY . ./

# start app
FROM react_app_common AS react_app_dev
CMD ["npm", "start"]

FROM react_app_common AS react_app_build
RUN npm run build

FROM nginx:stable AS react_app_prod
COPY --from=react_app_build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
