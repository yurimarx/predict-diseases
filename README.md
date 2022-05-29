## About Disease Predictor Application
 [![Quality Gate Status](https://community.objectscriptquality.com/api/project_badges/measure?project=intersystems_iris_community%2Fglobal-mindmap&metric=alert_status)](https://community.objectscriptquality.com/dashboard?id=intersystems_iris_community%2Fglobal-mindmap)

This is a Disease Predictor application using InterSystems IntegratedML to Predict diseases (diabetes, etc.)

## Installation using ZPM
1. Execute this command from IRIS Terminal:
```
zpm "install predict-diseases"
```
2. Access Disease Predictor UI: http://localhost:52773/disease-predictor/index.html

## Installation using Docker Compose
1. Clone/git pull the repo into any local directory

```
$ git clone https://github.com/yurimarx/predict-diseases.git
```

2. Open a Docker terminal in this directory and run:

```
$ docker-compose build
```

3. Run the IRIS container:

```
$ docker-compose up -d 
```

4. Go to http://localhost:4200 or http://localhost:52773/disease-predictor/index.html to use the Disease Predictor frontend and predict diseases like this:

![Mindmap](https://github.com/yurimarx/global-mindmap/raw/main/mindmap.gif "Mindmap")

# Credits
This application used InterSystems IRIS IntegratedML project
