FROM node:16.17.0 as BUILD
WORKDIR  /app
COPY package*.json ./
RUN npm install -g cnpm
RUN cnpm install
COPY . .
RUN npm run build

FROM nginx:latest
# 前端静态放入 /app
COPY --from=BUILD /app/dist /app
# COPY --from=BUILD /app/dist /usr/share/nginx/html


# 声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]