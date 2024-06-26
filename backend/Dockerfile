FROM oven/bun

WORKDIR /app

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    unzip \
    && apt-get clean

SHELL ["/bin/bash"]

CMD ["tail", "-f", "/dev/null"]
