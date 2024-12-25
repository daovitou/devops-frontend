FROM node:16-slim

WORKDIR /app
COPY ./dist ./dist
# RUN yarn install
RUN yarn global add serve
EXPOSE 3000

CMD [ "serve", "dist" ]
