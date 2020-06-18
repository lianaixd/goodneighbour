/*
let jqueryScript = document.createElement('script');
jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
document.head.appendChild(jqueryScript);
*/

let script = document.createElement('script');
// 
// AIzaSyCn71n84byz5b_tQgirLxTE37SRzCm9v88
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYKkfx6SkANiwdCiUbJdbMg-EUaJ1ktoU&libraries=places&callback=initMap"
script.defer = true;
script.async = true;
window.initMap = initMap;
document.head.appendChild(script);

const styleData = [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#f84243"
            },
            {
                "weight": "0.25"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f84243"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#0d0000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#6bb3a5"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#3986b8"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
let map;
let Popup;
let historicalOverlay;

function initMap() {
    // Create the map.
    // let homeCoords = {lat: 53.3498123, lng: -6.2624435};
    console.debug("initMap");
    Popup = createPopupClass();
    const centerCoords = {lat: 53.3498123, lng: -6.2624435};
    var styledMapType = new google.maps.StyledMapType(
        [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ],
        {name: 'Styled Map'});


    map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoords,
        zoom: 13.8,
        styles: styleData,
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

/*
    // Define the LatLng coordinates for the polygon.
    var shapeCoords = [
        {lat: centerCoords.lat, lng: centerCoords.lng},
        {lat: centerCoords.lat, lng: centerCoords.lng +100},
        {lat: centerCoords.lat + 100, lng: centerCoords.lng +100},
        {lat: centerCoords.lat + 100, lng: centerCoords.lng},
    ];

    // Construct the polygon.
    var shape = new google.maps.Polygon({
        paths: shapeCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    shape.setMap(map);

*/


    // infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            getPlaces(pos);
            /*infoWindow.setPosition(pos);
            infoWindow.setContent('My Home.');
            infoWindow.open(map);*/
            map.setCenter(pos);
            const latMult = 0.019;
            const lngMult = 0.041;
            let imageBounds = {
                north: pos.lat+latMult,
                south: pos.lat-latMult,
                east: pos.lng+lngMult-0.001,
                west: pos.lng-lngMult-0.001,
            };

            historicalOverlay = new google.maps.GroundOverlay(
                './maskblue.png',
                imageBounds);
            historicalOverlay.setMap(map);

        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    }

    function getPlaces(pos){
        let service = new google.maps.places.PlacesService(map);
        console.debug("getPlaces");
        let getNextPage = null;
        let moreButton = document.getElementById('more');
        moreButton.onclick = function() {
            moreButton.disabled = true;
            if (getNextPage) getNextPage();
        };
        service.nearbySearch(
            {location: pos, radius: 1000, //type: ['park']},
                keyword: ['park']},
            function(results, status, pagination) {
                if (status !== 'OK') {
                    console.debug("getPlaces, nearbySearch, status not OK, status: ", status);
                    return;
                }
                // console.debug("getPlaces, nearbySearch, status OK, results: ", results);
                createMarkers(results);
                moreButton.disabled = !pagination.hasNextPage;
                getNextPage = pagination.hasNextPage && function() {
                    pagination.nextPage();
                };
            });
    }
    function createMarkers(places) {
        // let bounds = new google.maps.LatLngBounds();
        let placesElement = document.getElementById('places');
        console.debug("createMarkers");
        for (let i = 0; i < places.length; i++) {
            const place = places[i];
            let image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(50, 50)
            };
            /*new google.maps.InfoWindow({
                map: map,
                content: place.name,
                // icon: image,
                title: place.name,
                position: place.geometry.location,
                disableAutoPan:true,
            })
            */
            // var marker = new google.maps.Marker({
            //     position: place.geometry.location,
            //     map: map,
            //     title: place.name,
            // });
            let popupDiv = document.createElement('div');
            const contentDiv = document.getElementById('content');
            contentDiv.appendChild(popupDiv);
            // console.debug("contentDiv: ", contentDiv);
            // if (i === 0) {
                let popup = new Popup(
                    place.geometry.location,
                    popupDiv,
                    place.name);
                popup.setMap(map);
           //  }


            let li = document.createElement('li');
            li.textContent = place.name;
            // console.debug("createMarkers, appending li: ", li);
            placesElement.appendChild(li);
        }
    }
}

function dynInput(cbox) {
    if (cbox.checked) {
        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Name";
        nameInput.id = "name";
        let nameDiv = document.createElement("div");
        nameDiv.id = cbox.name;
        nameDiv.appendChild(nameInput);
        document.getElementById("insertinputs").appendChild(nameDiv);

        let phoneInput = document.createElement("input");
        phoneInput.type = "text";
        phoneInput.placeholder = "Phone";
        phoneInput.id = "number";
        let phoneDiv = document.createElement("div");
        phoneDiv.id = cbox.phone;

        phoneDiv.appendChild(phoneInput);
        document.getElementById("insertinputs").appendChild(phoneDiv);
    } else {
        document.getElementById(cbox.name).remove();
        document.getElementById(cbox.phone).remove();
    }
}

$(document).ready(function () {
    console.debug("document ready");
    $('#button').click(function () {
        console.debug("button onClick");
        window.print();
    })
});

function createPopupClass() {
    /**
     * A customized popup on the map.
     * @param {!google.maps.LatLng} position
     * @param {!Element} content The bubble div.
     * @constructor
     * @extends {google.maps.OverlayView}
     */
    console.debug("createPopupClass");
    function Popup(position, content, text) {
        console.debug("creating popup. Content: ", content);
        this.position = position;
        content.classList.add('popup-bubble');
        content.textContent = text;
        // This zero-height div is positioned at the bottom of the bubble.
        var bubbleAnchor = document.createElement('div');
        bubbleAnchor.classList.add('popup-bubble-anchor');
        bubbleAnchor.appendChild(content);

        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement('div');
        this.containerDiv.classList.add('popup-container');
        this.containerDiv.appendChild(bubbleAnchor);

        // Optionally stop clicks, etc., from bubbling up to the map.
        google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    // ES5 magic to extend google.maps.OverlayView.
    Popup.prototype = Object.create(google.maps.OverlayView.prototype);
    /** Called when the popup is added to the map. */
    Popup.prototype.onAdd = function() {
        console.debug('popup onAdd');
        this.getPanes().floatPane.appendChild(this.containerDiv);
    };

    /** Called when the popup is removed from the map. */
    Popup.prototype.onRemove = function() {
        console.debug('popup onRemove');
        if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
    };

    /** Called each frame when the popup needs to draw itself. */
    Popup.prototype.draw = function() {
        var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

        // Hide the popup when it is far out of view.
        var display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                'block' :
                'none';

        if (display === 'block') {
            this.containerDiv.style.left = divPosition.x + 'px';
            this.containerDiv.style.top = divPosition.y + 'px';
        }
        if (this.containerDiv.style.display !== display) {
            this.containerDiv.style.display = display;
        }
    };

    return Popup;
}
