function updateMap() {

    fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
            data.Countries.forEach(element => {
                let country = element['Country']
                let lat,lng;
                fetch(`https://api.opencagedata.com/geocode/v1/json?key=2cb8e8b2ae3d4fb0aa2cb6ddd2c21f1f&q=${country}`)
                    .then(response => response.json())
                    .then(datal => { 
                        lat = datal.results[0].geometry.lat;
                        lng = datal.results[0].geometry.lng;
                        // console.log(data);
                        // marker
                        const marker = new mapboxgl.Marker({
                            draggable: false
                        })
                            .setLngLat([lng, lat])
                            .addTo(map);
                        });


            });
        })
}
// https://api.opencagedata.com/geocode/v1/json?key=2cb8e8b2ae3d4fb0aa2cb6ddd2c21f1f&q=india
updateMap();