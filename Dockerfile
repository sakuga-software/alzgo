FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG VITE_BASE_URL
ARG VITE_MENU_SELECTOR
ARG VITE_MENU_ROOT_ID
ARG VITE_MENU_MOBILE_SELECTOR
ARG VITE_MENU_MOBILE_ROOT_ID
ARG VITE_SEARCHBAR_ROOT_ID

RUN pnpm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
