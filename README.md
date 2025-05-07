# config

Config for my linux

### tips

#### linux nvidia 驱动

```sh
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update
sudo apt-get install nvidia-xxx nvidia-settings nvidia-prime prime-indicator
sudo echo 'blacklist nouveau' >> blacklist.conf
```

Copyright (c) 2017 xiedacon
