FROM node:18
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 8001
CMD ["npm", "start"]

ENV PORT=3000
ENV JWT_SECRET=WirPObXGw8mXnNq3LTCKciwSr44oUUx2Nd9aViBGpawmibXXoHSmxzlCKvNCsqli
ENV DB_URL=mongodb+srv://ivanbilotserkivskiy:NinWAYG6wSu2p2aK@cluster0.oslcqu1.mongodb.net/?retryWrites=true&w=majority
