# Config

Config for my development environment.

## Link Configurations

```sh
pwd=`pwd`
filenames=`ls -a settings/~`
for filename in $filenames; do
  if [[ $filename == "." || $filename == ".." ]]; then
    continue
  fi

  ln -s "$pwd/$filename" "~/$filename"
done
```

## Install And Initialization

### Chrome

### Homebrew

https://brew.sh/

### Git

https://git-scm.com/

```sh
brew install git
```

### Fish

https://fishshell.com/

```sh
brew install fish
```

### Htop

https://htop.dev/

```sh
brew install htop
```

### Aria2

https://aria2.github.io/

```sh
brew install aria2
```

Set to start at boot.

```sh
vim ~/Library/LaunchAgents/aria2.plist

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>aria2</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/aria2c</string>
    </array>
    <key>KeepAlive</key>
    <true/>
    <key>RunAtLoad</key>
    <true/>
    <key>WorkingDirectory</key>
    <string>/Users/xiedacon/Downloads</string>
</dict>
</plist>
```

### Vscode

https://code.visualstudio.com/

#### Themes

- [VSCode Great Icons](https://marketplace.visualstudio.com/items/?itemName=emmanuelbeziat.vscode-great-icons)
- [my-monokai](https://github.com/xiedacon/my-monokai)
  ```sh
  ln -s /Users/xiedacon/e/git/github/my-monokai /Users/xiedacon/.vscode/extensions/my-monokai
  ```

#### Features

- [Better Comments](https://marketplace.visualstudio.com/items/?itemName=aaron-bond.better-comments)
- [Markdown All in One](https://marketplace.visualstudio.com/items/?itemName=yzhang.markdown-all-in-one)
- [Output Colorizer](https://marketplace.visualstudio.com/items/?itemName=IBM.output-colorizer)
- [Git Graph](https://marketplace.visualstudio.com/items/?itemName=mhutchie.git-graph)
- [GitLens](https://marketplace.visualstudio.com/items/?itemName=eamodio.gitlens)
- [IntelliCode](https://marketplace.visualstudio.com/items/?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Live Share](https://marketplace.visualstudio.com/items/?itemName=MS-vsliveshare.vsliveshare)
- [Remote - SSH](https://marketplace.visualstudio.com/items/?itemName=ms-vscode-remote.remote-ssh)

#### Languages

- JavaScript / TypeScript
  - [Path Autocomplete](https://marketplace.visualstudio.com/items/?itemName=ionutvmi.path-autocomplete)
  - [Prettier](https://marketplace.visualstudio.com/items/?itemName=esbenp.prettier-vscode)
- Golang
  - [Go](https://marketplace.visualstudio.com/items/?itemName=golang.Go)
- Lua
  - [Lua - sumneko](https://marketplace.visualstudio.com/items/?itemName=sumneko.lua)
  - [Lua - Tencent](https://marketplace.visualstudio.com/items/?itemName=yinfei.luahelper)
- Fish
  - [Fish](https://marketplace.visualstudio.com/items/?itemName=bmalehorn.vscode-fish)
- Bash
  - [Bash IDE](https://marketplace.visualstudio.com/items/?itemName=mads-hartmann.bash-ide-vscode)
- Docker
  - [Docker](https://marketplace.visualstudio.com/items/?itemName=ms-azuretools.vscode-docker)

### Docker

https://www.docker.com/

#### helm

https://helm.sh/

```sh
brew install helm
```

#### kubernetes-dashboard

https://github.com/kubernetes/dashboard

```sh
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
helm install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
```

Expose the port of kubernetes-dashboard.

```sh
kubectl get service -n kubernetes-dashboard kubernetes-dashboard-kong-proxy -o yaml

# Save output as dashboard.yaml and edit it.
apiVersion: v1
kind: Service
metadata: ...
spec:
  allocateLoadBalancerNodePorts: true # add line
  clusterIP: 10.99.137.177
  clusterIPs:
    - 10.99.137.177
  externalTrafficPolicy: Cluster # add line
  internalTrafficPolicy: Cluster
  ipFamilies:
    - IPv4
  ipFamilyPolicy: SingleStack
  ports:
    - name: kong-proxy-tls
      port: 8443 # edit line
      protocol: TCP
      targetPort: 8443
  selector:
    app.kubernetes.io/component: app
    app.kubernetes.io/instance: kubernetes-dashboard
    app.kubernetes.io/name: kong
  sessionAffinity: None
  type: LoadBalancer # edit line

kubectl apply -n kubernetes-dashboard -f dashboard.yaml

# Open https://localhost:8443/ to visit it.
```

Get the token of service account.

```sh
kubectl create serviceaccount xiedacon
kubectl create clusterrolebinding admin-user --clusterrole=cluster-admin --serviceaccount=default:xiedacon
kubectl create token xiedacon
```

#### mysql

https://hub.docker.com/_/mysql

Created by kubernetes-dashboard.

#### bytebase

https://www.bytebase.com/docs/get-started/self-host/#installation

Follow the document and don't forget to expose the port.

Copyright (c) 2017 xiedacon
