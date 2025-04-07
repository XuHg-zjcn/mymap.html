wget https://leafletjs-cdn.s3.amazonaws.com/content/leaflet/v1.9.4/leaflet.zip
mkdir leaflet
unzip leaflet.zip -d leaflet

git submodule init

cd Leaflet.draw
npm install -g jake
npm install
jake build[3v,custom]
