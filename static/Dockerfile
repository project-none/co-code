FROM nginx:alpine

WORKDIR /workspace

# Copy code
COPY ${codespace}/nginx /etc/nginx/
COPY ${codespace}/nginx /usr/share/nginx/html
COPY . /workspace
