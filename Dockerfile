FROM node as BUILD
MAINTAINER Min "hsp_email@163.com"
WORKDIR  /app
COPY . /app/
# VOLUME ./node_modules /app/node_modules
RUN cnpm install && cnpm run build


# 使用 nginx最新版本作为基础镜像
# FROM nginx
# COPY --from=BUILD /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD /app/dist /app


# 声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 9000
RUN echo 'echo init ok!!'


# docker build -f /root/project/umi-antd-disign-Pro/Dockerfile . -t react_admin
# docker run -p 10620:80  --name react_admin -dit react_admin
# docker run -p 80:80 -v /root/nginx/nginx.conf:/etc/nginx/nginx.conf  -d nginx:latest

# docker rm $(docker ps -a -q)
# docker image prune -a -f
