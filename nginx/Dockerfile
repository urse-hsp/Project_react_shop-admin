# 基础镜像
FROM node as BUILD
# 创建一个应用目录
WORKDIR /usr/src/app
# 这个星号通配符意思是复制package.json和package-lock.json,复制到当前应用目录
COPY package*.json ./
# 安装应用依赖
RUN npm install
# 安装完毕后复制当前目录所有文件到镜像目录里面
COPY . .
# 执行npm run build 后生成dist目录
RUN npm run build

FROM nginx:latest
# 前端静态放入 /app
COPY --from=BUILD /app/dist /app
COPY --from=BUILD /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD /app/dist /usr/share/nginx/html


# 声明运行时容器暴露的端口（容器提供的服务端口）
EXPOSE 80
# 使用打包后的镜像
CMD ["nginx", "-g", "daemon off;"]