FROM node:alpine

# Install PostGraphile and PostGraphile connection filter plugin
RUN npm install -g postgraphile
RUN npm install -g @graphile-contrib/pg-simplify-inflector
RUN npm install -g postgraphile-plugin-connection-filter

ADD .postgraphilerc.js /

EXPOSE 5000
ENTRYPOINT ["postgraphile", "-n", "0.0.0.0"]