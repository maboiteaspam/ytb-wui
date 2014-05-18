
ytb-wui
========

Ytb-wui, Youtube-dl Web UI, a frontend for youtube-dl made with web tech.

install
========

````
mkdir whatever_dir
cd whatever_dir
npm i maboiteaspam/ytb-wui -g
vi config.json
````

config.json
========

````
{
  "fe":{
    "package":"ytb-fe",
    "hostname":"localhost",
    "port":3000,
    "api_location":"http://localhost:3001"
  },
  "be":{
    "package":"ytb-be",
    "hostname":"localhost",
    "port":3001,
    "run_path":".run",
    "dld_pattern":"download/%(filename)s - %(id)s - %(autonumber)s.%(ext)s",
    "allowOrigins":[
      "http://localhost:3000"
    ]
  }
}
````

#### fe
frontend server config

**fe.package** frontend package

**fe.hostname**  0.0.0.0 to listen the wild

**fe.port** port to listen

**fe.api_location** location of the backend

#### be
backend server config

**be.package** backend package

**be.hostname** 0.0.0.0 to listen the wild, not recommended.

**be.port** port to listen

**be.run_path** used to record a catalog of started/current/done download

**be.dld_pattern** the youtube-dl save file path, see --output

**be.allowOrigins** allowed origins to perform CORS, put there the frontend location


run
========

````
ytb-wui
````

or

````
node_modules/.bin/ytb-wui
````

then browse to ```http://localhost:3000/``` and type in video url.