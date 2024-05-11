- websocket 不存在跨域问题
- 一台服务器上运行多个 websocket 服务？
  使用 Nginx 反向代理不同路径的 WebSocket 到不同的端口。每个 websocket 服务监听一个接口，反向代理根据请求的路径转发到这些应用。
  Nginx 示例：

  ```
  http {
    upstream appA {
        server localhost:8081; # WebSocket应用A
    }

    upstream appB {
        server localhost:8082; # WebSocket应用B
    }

    server {
        listen 80;

        location /appA {
            proxy_pass http://appA;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        location /appB {
            proxy_pass http://appB;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
  }

  ```

  - websocket 请求和 Http 请求一样，通过 location 被 Nginx 代理。

  - HTTP 服务和 WebSocket 服务可以由同一个服务器应用程序提供，运行在同一个端口上。参考：`socketAndHttpSameServer`
