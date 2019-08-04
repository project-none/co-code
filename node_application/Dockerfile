FROM node:alpine

WORKDIR /workspace

# Copy code
COPY . /workspace

# Install dependencies
RUN npm install -g

# CMD node index.js
CMD /bin/sh /workspace/entrypoint.sh
