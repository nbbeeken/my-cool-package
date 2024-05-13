#! /usr/bin/env bash

set -x errexit
set -x xtrace

rm -rf build
mkdir -p build

docker buildx create --name builder --bootstrap --use

# Build all glibc linux versions
docker buildx build --platform linux/s390x,linux/arm64,linux/amd64 --output type=local,dest=./build,platform-split=false -f ./.github/docker/Dockerfile.glibc .

# Build all musl linux versions
docker buildx build --platform linux/arm64,linux/amd64 --output type=local,dest=./build,platform-split=false -f ./.github/docker/Dockerfile.musl .

docker buildx prune --force
docker buildx rm builder
