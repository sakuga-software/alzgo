FROM node:22-alpine AS build
COPY --from=ghcr.io/pnpm/pnpm:12.15.0-alpine@sha256:f164ca19f7736a0994dae195b81756cd969542a93ef692f5ab466759d06c1da9 /opt/pnpm /opt/pnpm
RUN ln -s /opt/pnpm/pnpm /usr/local/bin/pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
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
RUN apk upgrade --no-cache
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
