FROM node:14.17.3 as BUILD
WORKDIR  /app
COPY . /app/
RUN npm install && npm build


# 使用 nginx最新版本作为基础镜像
FROM nginx
# 替换nginx
# COPY --from=BUILD /app/nginx/nginx.conf /etc/nginx/nginx.conf
# 前端静态放入 /app
# COPY --from=BUILD /app/dist /app
# 前端静态放入nginx服务代理
COPY --from=build /app/dist /usr/share/nginx/html


# 声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 9000
RUN echo 'echo init ok!!'
