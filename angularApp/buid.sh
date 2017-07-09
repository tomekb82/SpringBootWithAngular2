#!/bin/sh


ng build

mv dist/* ../src/main/resources/static/

cd ..

mvn spring-boot:run
