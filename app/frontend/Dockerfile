FROM oven/bun

WORKDIR /app

# COPY . /app

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl \
    unzip \
    && apt-get clean

CMD ["tail", "-f", "/dev/null"]
