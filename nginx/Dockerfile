FROM node:14.17.3 as BUILD
WORKDIR  /app
COPY package*.json ./
RUN npm install -g cnpm
RUN cnpm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=BUILD /app/dist /usr/share/nginx/html


# 声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]