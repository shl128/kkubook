# [ ๐ฅ ๊ธฐ๋ณธ์ ์ธ ๋ฐฐํฌ ๊ณผ์  ]

> MobaXterm(EC2 ํ๊ฒฝ์ GUI๋ก!!!!)์์ ์งํํ์์ต๋๋ค.
>
> MobaXterm : SSH ํ๋กํ ์ฝ์ windows ํ๊ฒฝ์์ ๋ณด๋ค ์ฝ๊ฒ ์ ๊ทผํ๊ธฐ ์ํ ํด๋ผ์ด์ธํธ
>
> Django์ React๋ฅผ ํ์ฉํด Backend ๋ฐ Frontend๋ฅผ ๊ตฌํํ์์ต๋๋ค.
>
> mariaDB๋ฅผ ํ์ฉํด Database๋ฅผ ๊ตฌ์ถํ์์ต๋๋ค.



## ๐  MobaXterm ๊ธฐ๋ณธ ์ค์ 

### ๐ธ ๊ธฐ๋ณธ ๋ช๋ น์ด

```shell
# root๋ก ์ ๊ทผ
$ sudo su

# ์ด์์ฒด์ ์์ ์ฌ์ฉ ๊ฐ๋ฅํ ํจํค์ง๋ค๊ณผ ๊ทธ ๋ฒ์ ์ ๋ํ ์ ๋ณด๋ฅผ ์๋ฐ์ดํธํ๋ ๋ช๋ น์ด
# ์ค์น๋์ด ์๋ ํจํค์ง๋ฅผ ์ต์ ์ผ๋ก ์๋ฐ์ดํธํ๋ ๊ฒ์ด ์๋ ์ค์น๊ฐ๋ฅํ ๋ฆฌ์คํธ๋ฅผ ์๋ฐ์ดํธ
$ sudo apt-get update

# ์๋ฒ ์๋ฐ์ดํธ ํ ์ฌ์์
$ sudo systemctl daemon-reload
$ sudo systemctl restart uwsgi nginx
```



### ๐ธ Session ์ค์ 

- Session โก SSH โก Remote host *์ ubuntu@๋๋ฉ์ธ(j6b204.p.ssafy.io) ์๋ ฅ
- Advanced SSH settings์ Use private key ์ ํ โก ์ ๊ณต๋ฐ์ ์ธ์ฆํค(.pem) ๋ฑ๋ก โก OK



### ๐ธ nginX ์ค์ 

 ```shell
 # nginX ์ค์น
 $ sudo apt-get install nginx
 
 # nginX ์์
 $ sudo service nginx start
 
 # nginx ์ค์ง
 $ sudo service nginx stop
 
 # nginx ์ฌ์์
 $ sudo service nginx restart
 ```

>nginX ์์ ํ ๋๋ฉ์ธ(j6b204.p.ssafy.io)์ ์ ์ํ๋ฉด Welcome ํ์ด์ง ๋ณด์ด๋ฉด ์ค์น ์๋ฃ



### ๐ธ mariaDB ์ค์ 

```shell
# mariadb ์ค์น
$ sudo apt-get install mariadb-server

# mariadb ์ํ
$ sudo systemctl status mariadb

# mariadb ํ์ฑํ
$ sudo systmctl enabl mariadb

# mariadb ์์ํ๊ธฐ
$ sudo /usr/bin/mariadb -u root -p
```

> ์ดํ ๋น๋ฐ๋ฒํธ ์๋ ฅ์ ๊ฑฐ์ณ mariaDB์ ์ ๊ทผํ  ์ ์๋ค.
>
> ์ฐธ๊ณ : https://chaarles.tistory.com/21?category=1117500



#### mariaDB ๊ถํ๋ถ์ฌ

> ์ฝ์ง ์ฝ 3์๊ฐ ํ ๋ถ๋ถ

1. mariaDB๊ฐ ์คํ์ค์ธ์ง, ํ์ฑํ ๋์ด ์๋์ง ํ์ธํฉ๋๋ค.

   ```shell
   $ sudo systemctl status mariadb
   ```

2. mariaDB์ ์ ์ํ์ฌ ๊ณ์ ์ ๋ํ ๊ถํ์ ์์๋ณด์...!

   > ์๋ root ๊ณ์ ๋ง ์ฌ์ฉํ๋ฉด ๋ณด์์ ์ทจ์ฝํ์ง๋ง ์ด๋ฒ ํ๋ก์ ํธ์์๋ ๋ฐฐํฌ๊ฐ ์ฃผ ๋ชฉ์ ์ด๊ธฐ ๋๋ฌธ์ skip..!

   ```shell
   # ์ ๊ทผ ๊ฐ๋ฅํ ๊ณ์  ์ ๋ณด ์กฐํ
   # %๋ ๋ชจ๋  ip์์ ์ ๊ทผ ํ์ฉ!
   SELECT host, user, password FROM mysql.user;
   
   # root ๊ณ์ ์ ๋ชจ๋  ip์์ ์ ๊ทผ ํ์ฉ
   # kkubook204๋ root๊ณ์  ๋น๋ฐ๋ฒํธ ์๋๋ค!
   GRANT ALL privileges on *.* to 'root'@'%' identified by kkubook204;
   
   # ์์ ํ ๋ด์ฉ ์ ์ฅ
   FLUSH PRIVILEGES;
   ```

   > ์ฐธ๊ณ  : https://veneas.tistory.com/entry/MySQL-MySQL-%EC%99%B8%EB%B6%80-%EC%A0%91%EC%86%8D-%EB%B6%88%EA%B0%80%EB%8A%A5-%ED%98%84%EC%83%81-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%EC%A0%91%EA%B7%BC-%EA%B6%8C%ED%95%9C

3. mariadb ์ค์ 

   ```shell
   # ํธ์ง๊ธฐ ์ด๊ธฐ
   $ sudo vim /etc/mysql/mariadb.conf.d/50-server.cnf
   
   # ์ฌ๊ธฐ์ ํฌํธ ๋ฒํธ ์ค์  ๋ฐ ์ ๊ทผ ๊ฐ๋ฅํ IP ์์  ๊ฐ๋ฅ!
   # ์ ์ฅ ํ ๋น ์ ธ๋์์ ์ฌ์์
   $ sudo systemctl restart mysqld
   ```

   > ์ฐธ๊ณ : https://ojava.tistory.com/189

4. ์ต์ข์ ์ผ๋ก ํด(ex. HeidiSQL ..)์ ํ์ฉํด table ํ์ธ!



## ๐  Frontend

- React์ ๊ฒฝ์ฐ `npm run build` ๋ช๋ น์ด๋ฅผ ํ์ฉํด ์์ฑ๋๋ build ํ์ผ์ ๊ทธ๋๋ก ๋ฐฐํฌ ๊ฐ๋ฅํฉ๋๋ค.

  (MobaXterm์ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์ Drag & Drop ์ฌ์ฉ ๊ฐ๋ฅ!!)

๐ข **์ฃผ์ ์ฌํญ** ๐ข

- pakage.json์ ํ์ํ ํ์ผ์ ์ค์นํ๋ ๊ฒ๊ณผ ๊ด๊ณ๊ฐ ์์์ง ์ ํํ ์กฐ์ฌํด ๋ณด์ง ์์์ง๋ง

  ์ฐ์ฐํด์ `npm i` ํ `npm run build` ํ์์ต๋๋ค.

- ์ ํํ ํ์๋ฉด .env ํ์ผ์ ๊ฐ๋ฐ๊ณผ ๋ฐฐํฌ ๋ฑ์ผ๋ก ๋๋์ด ์์ฑํด์ผ ํ์ง๋ง ํ๋ก์ ํธ ๊ธฐ๊ฐ์์ ๋ฐฐํฌ๋ฅผ ๋ง๋ฌด๋ฆฌ

  ํด์ผ ํ๋ ์ผ์ ์์ ๋ฌธ์ ๋ก ๊ฐ์ .envํ์ผ์ ์ฌ์ฉํ์์ต๋๋ค. ๋ฐ๋์ ์ด ํ์ผ์ ๋ฃ๊ณ  build ํด์ผ ํฉ๋๋ค!



### 1๏ธโฃ ๋น๋

๋น๋๊ฐ ์๋ฃ ๋์๋ค๋ฉด MobaXterm์ build ํ์ผ์ ๊ทธ๋๋ก ๊ฐ์ ธ๋ค ๋ฃ๊ธฐ. (๊ฒฝ๋ก๋ /home/ubuntu/)



### 2๏ธโฃ frontend.conf

๋ค์์ ๋ช๋ น์ด๋ฅผ ํตํด frontend config ํ์ผ์ ์ค์ ํฉ๋๋ค.

> ์ด๊ฒ์ frontend build ํ์ผ์ ๊ฒฝ๋ก๋ฅผ ์๋ ค์ฃผ๊ณ  ์ด๋ uri์์ ๋ณด์ฌ์ค์ง, ์๋ฌ์ํฉ ๋ฑ์ ๋ด์ฉ์ ์ค์ ํ๋ ๊ฒ์ด๋ค.

```shell
$ sudo vim /etc/nginx/sites-available/frontend.conf
```

๐ซ vi์ vim : ๊ฑฐ์ ๋์ผํ ์ญํ (ํธ์ง)์ ํ์ง๋ง ํ์ผ์ด ์กด์ฌํ์ง ์์ ๋(์ด๊ธฐ์ ์ค์ ํ  ๋)๋ vim ๋ช๋ น์ด๋ฅผ ์ฌ์ฉ!



๋ช๋ น์ด๋ฅผ ํตํด ํธ์ง๊ธฐ ์์ผ๋ก ๋ค์ด์์ผ๋ฉด ์์ ์ ํ๋ก์ ํธ์ ๋ง๊ฒ ๋ด์ฉ์ ์ ์ต๋๋ค.

> ์ฃผ์(#)์ ์ง์ด๋ค

```
server {
  listen  80; # 80๋ฒ ํฌํธ๋ก ์๋ฒ ์คํ (ipv4)
  listen  [::]:80; # 80๋ฒ ํฌํธ๋ก ์๋ฒ ์คํ (ipv6)

  # ์ค์ ํ  ๋๋ฉ์ธ/IP ์ง์ 
  server_name j6b204.p.ssafy.io; # ์์ ์ ์๋ฒ ip ํน์ ๋๋ฉ์ธ์ผ๋ก ์์ 
                              # ex) 123.456.789.123
                              # ex) example.com

  # ์์ธ์ค ๋ก๊ทธ, ์ค๋ฅ ๋ก๊ทธ๋ฅผ ๋จ๊ธธ ํ์ผ ๊ฒฝ๋ก
  # ๋ก๊ทธ๋ฅผ ๋จ๊ธฐ์ง ์์๊ฒฝ์ฐ, ์ญ์ ํด๋ ๋จ!
  access_log /var/log/nginx/test/access.log;
  error_log /var/log/nginx/test/error.log;

  location / {
  
    root   /home/ubuntu/build/; # ์ ์  ํ์ผ์ด ์์นํ  ๋ฃจํธ๋ฅผ ์ค์ 

    # ์ฌ์ดํธ์์ ์ ๊ณตํ  ํ์ผ ์ค์ 
    # ์ ๊ณตํ  ํ์ผ์ด ์ฌ๋ฌ๊ฐ๋ฉด, ์คํ์ด์ค๋ก ๊ตฌ๋ณํ์ฌ ์ฌ๋ฌ๊ฐ ์ถ๊ฐ ๊ฐ๋ฅ
    index  index.html;
    
    try_files $uri /index.html; # ์๋ฌ ์ํฉ ๋ฐ์์ (404)
  }  
}
```



### 3๏ธโฃ sites-enabled

์ด๊ฒ์ `sites-enabled` ํด๋์ ์ฌ๋ณผ๋ฆญ ๋งํฌ๋ก ์ง์ ํฉ๋๋ค.

```shell
$ sudo ln -s /etc/nginx/sites-available/frontend.conf /etc/nginx/sites-enabled/frontend.conf
```



`sites-enabled`๋ก ์ด๋ํด์

```shell
cd /etc/nginx/sites-enabled/
```

๋ฆฌ์คํธ๋ฅผ ์ฐ์ด๋ณด๋ฉด (`ls`)  frontend.conf ํ์ผ์ด ์ ์์ฑ๋ ๊ฒ์ ๋ณผ ์ ์์ต๋๋ค.

์ด ๋, ๊ธฐ๋ณธ ์ค์ ์ธ `default`๊ฐ ์กด์ฌํ๋ค๋ฉด `sudo rm default`๋ฅผ ํตํด ์ง์์ฃผ๋๋ก ํฉ๋๋ค.



### 4๏ธโฃ ๋ง์ง๋ง

์๋ ๋ช๋ น์ด๋ฅผ ํตํด nginx๋ฅผ ์ฌ์์ํ๊ณ  ๋๋ฉ์ธ์ผ๋ก ์ ์ํ๋ฉด frontend ํ๋ฉด์ด ์ ๋ณด์ด๊ฒ ๋ฉ๋๋ค.

```shell
$ sudo service nginx restart
```



**๋ง์ฝ**, ์๋์ค์ง ์๋๋ค๋ฉด `sudo nginx -t` ๋ช๋ น์ด๋ฅผ ํ์ฉํด test ํด๋ณด๊ณ  nginx๊ฐ ์ด๋ค ๋ฌธ์ ๊ฐ ์๋์ง ํ์ธํด ๋ณผ ์ ์์ต๋๋ค.



> ์ฐธ๊ณ  : https://www.vompressor.com/setting-nginx-1/





## ๐  Backend

> ๊ธฐ๋ณธ์ ์ผ๋ก ๋ค์ ๋ธ๋ก๊ทธ๋ฅผ ๋ฐ๋ผ์ ๋ฐฐํฌ๋ฅผ ์งํํ์์ต๋๋ค!
>
> https://nerogarret.tistory.com/45?category=800142



### โผ ๊ธฐ๋ณธ ์งํ ๊ณผ์ 

1. /srv/์ ubuntu ๊ถํ ๋ถ์ฌ

2. /srv/์ git clone ๋ฐ๊ธฐ (branch๋ deploy๋ก)

3. /home/ubuntu/ ์ ๊ฐ์ํ๊ฒฝ (venv) ์ค์ 

4. /srv/S06P22B204/backend ์์ requirement.txt ๋ฑ ์๋ฒ๊ฐ ๊ตฌ๋ํ๊ธฐ ์ํ ๊ธฐ๋ณธ ์ค์ 

5. ๊ฐ์ํ๊ฒฝ์์ uwsgi๋ฅผ django ํ๋ก์ ํธ์ ์ฐ๊ฒฐ

   > ์์ ์ค์ ํ niginx๋ฅผ ๋ฐํ์ผ๋ก ๊ทธ ์น์๋ฒ ์์ ์ฅ๊ณ ๋ฅผ ์ฌ๋ฆด ๊ฒ์๋๋ค. (uwsgi ํ์ฉ! - ๊ฐ์ํ๊ฒฝ์์ `pip3 install uwsgi` ํ์)

6. nginx ์๋ฒ์์ ํ๋ก์ ํธ ๊ตฌ๋



`๋ค์ด๊ฐ๊ธฐ ์ ์....`

### โผ ๋ฐฉํ๋ฒฝ ์ค์ 

- ์๋ง์กด์์ ์ธ์คํด์ค๋ฅผ ์ง์  ๋ค๋ฃฐ ์ ์๋ค๋ฉด ๋ธ๋ก๊ทธ์ ๋์์๋๋๋ก ์ธ๋ฐ์ด๋ ๊ท์น์ ๋ฐ๋ก ์ค์ ํ๋ ๊ฒ์ด

  ๋๊ฒ ์ผ๋ ํฐ๋ฏธ๋์์๋ง EC2 ์๋ฒ๋ฅผ ๋ง์ง ์ ์๊ธฐ ๋๋ฌธ์ ๋ฐฉํ๋ฒฝ ์ค์ ํ๋ ๋ช๋ น์ด๋ฅผ ๋ฐ๋ก ๋ช์ํฉ๋๋ค.
  
- ๋ฐฉํ๋ฒฝ ์ค์ ์ ๋ด๊ฐ ํ์ํ ํฌํธ๋ ๋ค ์ด์ด์ฃผ์ด์ผ ํฉ๋๋ค!

  (์ฐ๋ฆฌ ํ๋ก์ ํธ์์๋ 80, 8000, 3000, 8070๋ฒ์ ์ด์ด์ฃผ์์ต๋๋ค.)

```shell
# firewalld๊ฐ ์ ์ค์น๋์ด ์๋์ง๋ ํ์ธํด๋ณด๊ธฐ!

# ๋ฐฉํ๋ฒฝ ์ค์  ํ์ธํ๊ธฐ
$ sudo firewall-cmd --zone=public --list-all

# ํฌํธ ์ถ๊ฐ
$ sudo firewall-cmd --permanent --zone=public --add-port='๋ฃ๊ณ  ์ถ์ ํฌํธ ๋ฒํธ'/tcp

# ํฌํธ ์ญ์ 
$ sudo firewall-cmd --permanent --zone=public --remove-port='์ญ์ ํ  ํฌํธ ๋ฒํธ'/tcp

# ์ ์ฉ์ ์ํด์๋ ์๋น์ค ์ฌ๊ตฌ๋
$ sudo firewall-cmd --reload
```



### โผ static ํ์ผ ๋ฌธ์ 

- static ๊ฒฝ๋ก๋ฅผ ์ค์ ํด ์ฃผ๋ ์ค๋ฅ (Permission denied)

- ๊ตฌ๊ธ๋ง ํด๋ ๊ฒฐ๊ณผ๊ฐ ๋ง์กฑ์ค๋ฝ์ง ๋ชปํด์ ์ด๋ฐ ์ ๋ฐ ๋ฐฉ๋ฒ์ ์๋ํด ๋ณด๋ค๊ฐ

  ์๋์ ๊ฐ์ ์ฝ๋ ๋ผ์ธ์ผ๋ก ํด๊ฒฐ. but S06P22B204 ๋๋ ํ ๋ฆฌ ์๋๊ฐ ์๋ ๋๋ฑํ ๋ ๋ฒจ์์ static ํด๋ ์์ฑ๋์ด ๊ทธ๋ ๊ฒ
  
  nginx conf ํ์ผ๋ ์ค์ ํด์ฃผ์์ต๋๋ค!

```django
ROOT_DIR = os.path.dirname(BASE_DIR)

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(ROOT_DIR, 'static')
```



### โผ SECRET_KEY ๊ฐ ์จ๊ธฐ๊ธฐ

- django secret key๋ฅผ ์จ๊ธฐ๊ธฐ ์ํด์ secrets.json ํ์ผ์ ์์ฑํ์ฌ ์จ๊ฒผ์ต๋๋ค.

- FTP ์ํํธ์จ์ด์ธ ํ์ผ์ง๋ผ๋ฅผ ํ์ฉํด๋ณด๊ณ  ์ถ์ด (๋ฌผ๋ก  MobaXterm์ ํ์ฉํ๊ธฐ ๋๋ฌธ์ Drag & Drop์ ๊ฐ๋ฅํฉ๋๋ค๐)

  ubnuntu์ ์ง์  ํ์ผ์ ์ฎ๊ฒผ์ต๋๋ค (gitlab์ ๊ฑฐ์น์น ์์)

- ~~์ด๋ฆ ํ๋ ค์ ๋ง์ง๋ง์ ํ๋ฒ ๋ ์ค๋ฅ ๋ฌ๊ฑฐ ์ด์ง์ด์งํ๋ค~~

> ์ฐธ๊ณ : https://integer-ji.tistory.com/303



- ํ์ผ ์ฎ๊ธธ ๋ ์ฎ๊ฒจ์ง์ง ์์ผ๋ฉด ๊ถํ ๋ฌธ์ ์ด๊ธฐ ๋๋ฌธ์ ๋ง์ง๋ง ๋ช๋ น์ด๋ก ๊ถํ์ ์ค์ ์ฎ๊ฒจ์ง ์ ์๊ฒ ์ค์  ํด์ฃผ์ธ์!

```shell
# ํ์ผ ์ฎ๊ธฐ๋ ๋ช๋ น์ด
$ mv /home/ubuntu/~~~~~~ . # ํ์ฌ ์์น

# + ์ด๋ฆ ๋ฐ๊พธ๊ธฐ
$ mv ํ์ฌ์ด๋ฆ ๋ฐ๊ฟ์ด๋ฆ

# ๊ถํ ์ฃผ๊ธฐ
$ chmod 666 ./~~~~
```

> ์ฐธ๊ณ : https://devks.tistory.com/47



### โผ ํ๊ฒฝ๋ณ์ ์ค์ 

- deploy branch์ .config ํด๋๋ฅผ ๋ฐ๋ก ์์ฑํ์ฌ ํ๊ฒฝ๋ณ์๋ฅผ ๋ณด๋ค ์ฉ์ดํ๊ฒ ํ๋๋ก ํ์ต๋๋ค.

  ```
  .config
  
  โโโ nginx
  
  โ   โโโ mysite.conf
  
  โโโ uwsgi
  
  โ   โโโ mysite.ini
  ```

#### .config

- nginx/backend.conf

```
server {
    listen 8070;
    server_name j6b204.p.ssafy.io;
    charset utf-8;
    client_max_body_size 128M;
 
    location / {
        uwsgi_pass  unix:///tmp/backend.sock;
        include     uwsgi_params;
    }

    location /static/ {
        alias /srv/static/;
    }
}
```

- uwsgi/backend.ini

```
[uwsgi]
chdir = /srv/S06P22B204/
module = backend.wsgi:application
home = /home/ubuntu/venv/
 
uid = ubuntu
gid = ubuntu
 
socket = /tmp/backend.sock
chmod-socket = 666
chown-socket = ubuntu:ubuntu
 
enable-threads = true
master = true
vacuum = true
pidfile = /tmp/backend.pid
logto = /var/log/uwsgi/backend/@(exec://date +%%Y-%%m-%%d).log
log-reopen = true
```

- uwsgi/uwsgi.service

```
[Unit]
Description=uWSGI service
After=syslog.target
 
[Service]
ExecStart=/home/ubuntu/venv/bin/uwsgi -i /srv/S06P22B204/.config/uwsgi/backend.ini
 
Restart=always
KillSignal=SIGQUIT
Type=notify
StandardError=syslog
NotifyAccess=all
 
[Install]
WantedBy=multi-user.target
```



- ๋ฐ๋ชฌ์ ํ์ฉํด ๋ฐฑ๊ทธ๋ผ์ด๋์์ ๋ช๋ น์ด ์์ด ํญ์ ์คํ ํ  ์ ์๋๋ก ํ์์ต๋๋ค.

  ๋ค์์ ๋ช๋ น์ด๋ฅผ ํ์ฉํด ๋งํฌ๋ฅผ ๊ฑธ์ด ์ค ์ ์์ต๋๋ค.

  ```shell
  $ sudo ln -f /srv/S06P22B204/backend/.config/uwsgi/uwsgi.service /etc/systemd/system/uwsgi.service
  ```

- ๋ค์์ผ๋ก, nginx ์ค์ ํ์ผ์ด ํ๋ก์ ํธ ์์ ์์ผ๋ฏ๋ก ๊ฒฝ๋ก๋ฅผ ์ด์ฉํ ๋ฑ๋ก ๋ช๋ น์ด๋ฅผ ํ์ฉํฉ๋๋ค.

  ```shell
  # sites-available์ ๋ณต์ฌ
  $ sudo cp -f /srv/S06P22B204/backend/.config/nginx/backend.conf /etc/nginx/sites-available/backend.conf
  
  # sites-enables์ ๋งํฌ
  $ sudo ln -sf /etc/nginx/sites-available/backend.conf /etc/nginx/sites-enabled/backend.conf
  
  # sites-enables์ default ์ญ์ 
  $ sudo rm /etc/nginx/sites-enabled/default
  ```

  > ์ดํ ๋ฐ๋์ ์๋ฒ ์ฌ์์
  >
  > $ sudo systemctl daemon-reload
  > $ sudo systemctl restart uwsgi nginx





# [ ๐ฅ ๋ฐฐํฌ ์ํคํ์ณ ]

![๊พธ๋ถ์ํคํ์ณ](deploy.assets/๊พธ๋ถ ์ํคํ์ณ.PNG)
