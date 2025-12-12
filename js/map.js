"use strict";

// ============================================================================
// PHẦN 1: HÀM TẠO DỮ LIỆU VÀ MẢNG VỊ TRÍ CHO MAP CHÍNH
// ============================================================================
//  HTML gallery
function generateGalleryHtml(galleryUrls = []) {
  if (!galleryUrls.length) return "";

  let html = `
    <a href="javascript:void(0)" 
       class="count image" 
       data-fancybox="gallery1" 
       data-src="${galleryUrls[0]}">
      <img src="./images/icons/picture.svg" alt="icon" class="icon" />
      <span class="total-image">${galleryUrls.length}</span>
    </a>
  `;

  for (let i = 1; i < galleryUrls.length; i++) {
    html += `
      <a data-fancybox="gallery1" 
         data-src="${galleryUrls[i]}" 
         style="display:none"></a>
    `;
  }

  return html;
}

//  HTML video
function generateVideoHtml(videoUrls = []) {
  if (!videoUrls.length) return "";

  let html = `
    <a href="javascript:void(0)" 
       class="count view-video" 
       data-fancybox 
       data-type="iframe" 
       data-src="${videoUrls[0]}">
      <img src="./images/icons/camera.svg" alt="icon" class="icon" />
    </a>
  `;

  for (let i = 1; i < videoUrls.length; i++) {
    html += `
      <a data-fancybox 
         data-type="iframe" 
         data-src="${videoUrls[i]}" 
         style="display:none"></a>
    `;
  }

  return html;
}

// ============================================================================
// PHẦN 2: HÀM TẠO BOX
// ============================================================================

// Hàm tạo Tour InfoBox
// ============Tour=====================
function generateTourBox(options) {
  const {
    mapImg,
    mapURL,
    mapTitle,
    price,
    galleryUrls = [],
    videoUrls = [],
    rate = 5,
    reviewCount = 0,
    place = "Unknown",
    totalPeople = 20,
    totalDay = 4,
  } = options;

  const galleryHtml = generateGalleryHtml(galleryUrls);
  const videoHtml = generateVideoHtml(videoUrls);

  return `
    <div class="map-listing-item flat-tab-recommend">
      <div class="item">
        <div class="archive-top">
          <div class="image-box">
            <img src="${mapImg}" alt="image">
            <div class="group-meta">
              <div class="tag-meta">
                <div class="flag-tag">Featured</div>
                ${galleryHtml}
                ${videoHtml}
              </div>
              <div class="btn-wished">
                <img src="./images/icons/icon-wishlist.svg" alt="icon" class="icon" />
              </div>
            </div>
          </div>
        </div>

        <div class="archive-bottom">
          <div class="infoBox-close">
            <i class="icon icon-X"></i>
          </div>

          <div class="content-top">
            <div class="rating">
              <ul class="list-star">
                ${"<li class='icon icon-star'></li>".repeat(Math.round(rate))}
              </ul>
              <div class="rate">
                <div class="total-rate">${rate}</div>
                <div class="review">(${reviewCount.toLocaleString()})</div>
              </div>
            </div>
          </div>

          <h5 class="tour-title">
            <a class="link" href="${mapURL}">${mapTitle}</a>
          </h5>

          <div class="content-info-middle">
            <div class="info person">
              <img src="images/icons/users.svg" alt="icon" class="icon">
              <span class="total-people">${totalPeople} People</span>
            </div>
            <div class="info date">
              <img src="./images/icons/calendar.svg" alt="icon" class="icon">
              <span class="total-day">${totalDay} days</span>
            </div>
          </div>

          <div class="content-bottom">
            <div class="address">
              <img src="./images/icons/place.svg" alt="icon" class="icon">
              <span class="location">${place}</span>
            </div>
            <h5 class="price">${price}</h5>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Hàm tạo Contact InfoBox
function generateContactBox(options) {
  const {
    mapImg,
    mapTitle,
    phone = "+1 234 567 890",
    email = "info@example.com",
    address = "Unknown",
  } = options;

  return `
  <div class="map-listing-item flat-contact-item">
    <div class="item box-01">

      <div class="archive-top">
        <div class="image-box">
          <img src="${mapImg}" alt="contact image">
          <div class="infoBox-close ic-01">
            <i class="icon icon-X"></i>
          </div>
        </div>
      </div>

      <div class="archive-bottom">
        <h4 class="contact-title font-medium">
          ${mapTitle}
        </h4>

        <div class="contact-info-list">

          <div class="contact-item">
            <img src="./images/icons/place.svg" alt="icon" class="icon">
            <div class="info-content">
              <span class="value">${address}</span>
            </div>
          </div>

          <div class="contact-item">
            <img src="./images/icons/phone-call.svg" alt="icon" class="icon">
            <div class="info-content">
              <a href="tel:${phone.replace(
                /\s/g,
                ""
              )}" class="value info-phone">
                ${phone}
              </a>
            </div>
          </div>

          <div class="contact-item">
            <img src="./images/icons/mail.svg" alt="icon" class="icon">
            <div class="info-content">
              <a href="mailto:${email}" class="value">
                ${email}
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
`;
}

// ============================================================================
// BoxType
// ============================================================================

function locationData(options) {
  const { boxType = "tour" } = options;

  switch (boxType) {
    case "contact":
      return generateContactBox(options);
    case "tour":
    default:
      return generateTourBox(options);
  }
}

// ============================================================================
// DỮ LIỆU LOCATIONS
// ============================================================================

var allLocations = [
  // Tour Box
  {
    data: {
      boxType: "tour",
      mapImg: "images/tours/tour-1.png",
      mapURL: "toursingle1.html",
      mapTitle: "Art and tradition: Exploring Bali's cultural scene",
      price: "$7250,00",
      galleryUrls: [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      videoUrls: ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      rate: 4.7,
      reviewCount: 892,
      place: "Bali",
      totalPeople: 30,
      totalDay: 7,
    },
    lat: 40.711536,
    lng: -73.994601,
  },
  // Tour Box
  {
    data: {
      boxType: "tour",
      mapImg: "images/tours/tour-4.png",
      mapURL: "toursingle4.html",
      mapTitle: "Discover New York hidden gems",
      price: "$5300,00",
      galleryUrls: [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      videoUrls: ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      rate: 4.9,
      reviewCount: 2100,
      place: "Manhattan",
    },
    lat: 40.71367192098294,
    lng: -73.99764924560291,
  },
  // Tour Box
  {
    data: {
      boxType: "tour",
      mapImg: "images/tours/tour-7.png",
      mapURL: "toursingle7.html",
      mapTitle: "Brooklyn bridge photography tour",
      price: "$4500,00",
      galleryUrls: [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      videoUrls: ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      rate: 4.9,
      reviewCount: 3050,
      place: "Brooklyn Bridge",
      totalPeople: 15,
      totalDay: 1,
    },
    lat: 40.7103,
    lng: -73.9977,
  },
  // Contact Box
  {
    data: {
      boxType: "contact",
      mapImg: "images/tours/tour-9.png",
      mapURL: "contact-single2.html",
      mapTitle: "Office address",
      phone: "(229) 555-0109",
      email: "themesflat@gmail.com",
      address: "102 Ingraham St, Brooklyn, NY 11237",
    },
    lat: 15.917105,
    lng: 108.269265,
  },
];

// Hàm tạo locations dựa trên boxType
function createLocationsByType(selectedType = "tour") {
  return allLocations
    .filter((loc) => loc.data.boxType === selectedType)
    .map((loc) => [locationData(loc.data), loc.lat, loc.lng, 1, "<div></div>"]);
}

// ============================================================================
// PHẦN 3: HÀM TẠO MAP CHÍNH
// ============================================================================

function mainMap() {
  var ib = new InfoBox();

  var mapElement = document.getElementById("map");
  var mapZoomAttr = mapElement ? mapElement.dataset.mapZoom : null;
  var mapScrollAttr = mapElement ? mapElement.dataset.mapScroll : null;
  var boxTypeAttr = mapElement ? mapElement.dataset.boxType : null;
  var centerLatAttr = mapElement ? mapElement.dataset.centerLat : null;
  var centerLngAttr = mapElement ? mapElement.dataset.centerLng : null;
  var infoBoxStyleAttr = mapElement ? mapElement.dataset.infoBoxStyle : null;
  var infoBoxStyle = infoBoxStyleAttr || "";

  var zoomLevel =
    mapZoomAttr !== undefined && mapZoomAttr !== null
      ? parseInt(mapZoomAttr)
      : 5;
  var scrollEnabled =
    mapScrollAttr !== undefined && mapScrollAttr !== null
      ? parseInt(mapScrollAttr)
      : false;
  var selectedBoxType = boxTypeAttr || "tour";

  // Fallback về New York nếu không có data
  var defaultLat = 40.709295;
  var defaultLng = -74.003099;
  var centerLat =
    centerLatAttr !== undefined && centerLatAttr !== null
      ? parseFloat(centerLatAttr)
      : defaultLat;
  var centerLng =
    centerLngAttr !== undefined && centerLngAttr !== null
      ? parseFloat(centerLngAttr)
      : defaultLng;

  // Tạo locations
  var locations = createLocationsByType(selectedBoxType);

  // Tự động center vào trung bình locations
  if (locations.length > 0) {
    var avgLat =
      locations.reduce((sum, loc) => sum + loc[1], 0) / locations.length;
    var avgLng =
      locations.reduce((sum, loc) => sum + loc[2], 0) / locations.length;
    centerLat = avgLat;
    centerLng = avgLng;
  }

  var map = new google.maps.Map(mapElement, {
    zoom: zoomLevel,
    scrollwheel: false,
    center: new google.maps.LatLng(centerLat, centerLng),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
    },
    mapTypeControl: false,
    scaleControl: false,
    panControl: false,
    navigationControl: false,
    streetViewControl: false,
    gestureHandling: "cooperative",
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
    ],
  });

  // ============================================================================
  // EVENT LISTENER CHO HOVER LISTING ITEM VÀ MARKER
  // ============================================================================

  var listingContainers = document.querySelectorAll(".listing-item-container");
  listingContainers.forEach(function (container) {
    container.addEventListener("mouseover", function () {
      var listingAttr = parseInt(container.dataset.markerId);
      if (listingAttr !== undefined && !isNaN(listingAttr)) {
        var listing_id = listingAttr - 1;
        var marker_div = allMarkers[listing_id]
          ? allMarkers[listing_id].div
          : null;
        if (marker_div) {
          marker_div.classList.add("clicked");

          var mouseoutHandler = function () {
            if (!marker_div.classList.contains("infoBox-opened")) {
              marker_div.classList.remove("clicked");
            }
            container.removeEventListener("mouseout", mouseoutHandler);
          };
          container.addEventListener("mouseout", mouseoutHandler);
        }
      }
    });
  });

  // ============================================================================
  // TẠO INFOBOX VÀ MARKERS
  // ============================================================================

  var boxText = document.createElement("div");
  boxText.className = "map-box";
  var currentInfobox;
  var boxOptions = {
    content: boxText,
    disableAutoPan: false,
    alignBottom: true,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-134, -55),
    zIndex: null,
    boxStyle: { maxWidth: "580px" },
    closeBoxMargin: "0",
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(25, 25),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false,
  };
  var overlay, i;
  var allMarkers = [];
  var markerIco = '<i class="icon icon-pin"></i>';

  for (i = 0; i < locations.length; i++) {
    var overlaypositions = new google.maps.LatLng(
        locations[i][1],
        locations[i][2]
      ),
      overlay = new CustomMarker(
        overlaypositions,
        map,
        { marker_id: i },
        markerIco
      );
    allMarkers.push(overlay);

    google.maps.event.addDomListener(
      overlay,
      "click",
      (function (overlay, i) {
        return function () {
          ib.setOptions(boxOptions);
          boxText.innerHTML = locations[i][0];
          ib.close();
          ib.open(map, overlay);
          currentInfobox = locations[i][3];
          google.maps.event.addListener(ib, "domready", function () {
            var infoBoxDiv = document.querySelector(".infoBox");
            if (infoBoxDiv && infoBoxStyle) {
              infoBoxDiv.classList.add(infoBoxStyle);
            }

            var closeButtons = document.querySelectorAll(".infoBox-close");
            closeButtons.forEach(function (btn) {
              btn.addEventListener("click", function (e) {
                e.preventDefault();
                ib.close();
                var mapMarkers = document.querySelectorAll(
                  ".map-marker-container"
                );
                mapMarkers.forEach(function (marker) {
                  marker.classList.remove("clicked", "infoBox-opened");
                });
              });
            });
          });
        };
      })(overlay, i)
    );
  }

  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

  // ============================================================================
  // CUSTOM ZOOM CONTROL
  // ============================================================================

  var zoomControlDiv = document.createElement("div");
  var zoomControl = new ZoomControl(zoomControlDiv, map);
  function ZoomControl(controlDiv, map) {
    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);
    controlDiv.style.padding = "5px";
    controlDiv.className = "zoomControlWrapper";
    var controlWrapper = document.createElement("div");
    controlDiv.appendChild(controlWrapper);
    var zoomInButton = document.createElement("div");
    zoomInButton.className = "custom-zoom-in";
    controlWrapper.appendChild(zoomInButton);
    var zoomOutButton = document.createElement("div");
    zoomOutButton.className = "custom-zoom-out";
    controlWrapper.appendChild(zoomOutButton);
    google.maps.event.addDomListener(zoomInButton, "click", function () {
      map.setZoom(map.getZoom() + 1);
    });
    google.maps.event.addDomListener(zoomOutButton, "click", function () {
      map.setZoom(map.getZoom() - 1);
    });
  }

  var scrollEnabling = document.getElementById("scrollEnabling");
  if (scrollEnabling) {
    scrollEnabling.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("enabled");
      if (this.classList.contains("enabled")) {
        map.setOptions({ scrollwheel: true });
      } else {
        map.setOptions({ scrollwheel: false });
      }
    });
  }

  var geoLocation = document.getElementById("geoLocation");
  var locationLinks = document.querySelectorAll(".input-with-icon.location a");
  if (geoLocation) {
    geoLocation.addEventListener("click", function (e) {
      e.preventDefault();
      geolocate();
    });
  }
  locationLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      geolocate();
    });
  });

  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        map.setCenter(pos);
        map.setZoom(12);
      });
    }
  }
}

var map = document.getElementById("map");
if (typeof map != "undefined" && map != null) {
  google.maps.event.addDomListener(window, "load", mainMap);
}

// ============================================================================
// CLASS CUSTOM MARKER
// ============================================================================

function CustomMarker(latlng, map, args, markerIco) {
  this.latlng = latlng;
  this.args = args;
  this.markerIco = markerIco;
  this.setMap(map);
}
CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function () {
  var self = this;
  var div = this.div;
  if (!div) {
    div = this.div = document.createElement("div");
    div.className = "map-marker-container";
    div.innerHTML =
      '<div class="marker-container">' +
      '<div class="marker-card">' +
      '<div class="front face">' +
      self.markerIco +
      "</div>" +
      '<div class="back face">' +
      self.markerIco +
      "</div>" +
      '<div class="marker-arrow"></div>' +
      "</div>" +
      "</div>";
    div.addEventListener("click", function (event) {
      var mapMarkers = document.querySelectorAll(".map-marker-container");
      mapMarkers.forEach(function (marker) {
        marker.classList.remove("clicked", "infoBox-opened");
      });
      google.maps.event.trigger(self, "click");
      this.classList.add("clicked", "infoBox-opened");
    });
    if (typeof self.args.marker_id !== "undefined") {
      div.dataset.markerId = self.args.marker_id;
    }
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  }
  var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
  if (point) {
    div.style.left = point.x + "px";
    div.style.top = point.y + "px";
  }
};

CustomMarker.prototype.remove = function () {
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
  }
};

CustomMarker.prototype.getPosition = function () {
  return this.latlng;
};
