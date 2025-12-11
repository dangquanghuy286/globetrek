/*var infoBox_ratingType='star-rating';*/

"use strict";

// ============================================================================
// PHẦN 1: HÀM TẠO DỮ LIỆU VÀ MẢNG VỊ TRÍ CHO MAP CHÍNH
// ============================================================================

// Hàm tạo HTML gallery
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

  // Còn lại -> hidden
  for (let i = 1; i < galleryUrls.length; i++) {
    html += `
      <a data-fancybox="gallery1" 
         data-src="${galleryUrls[i]}" 
         style="display:none"></a>
    `;
  }

  return html;
}

// Hàm tạo HTML video
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
// ==========================
// Hàm chính InfoBox
// ==========================
function locationData(
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
  totalDay = 4
) {
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
            <a class="link" href="${mapURL}">
              ${mapTitle}
            </a>
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

var locations = [
  [
    locationData(
      "images/tours/tour-1.png",
      "toursingle1.html",
      "Art and tradition: Exploring Bali’s cultural scene",
      "$7250,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.7,
      892,
      "Bali",
      30,
      7
    ),
    40.711536,
    -73.994601,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-2.png",
      "toursingle2.html",
      "Art and tradition: Exploring Bali’s cultural scene",
      "$7250,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.6,
      540,
      "New York",
      100,
      4
    ),
    40.711536,
    -74,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-3.png",
      "toursingle3.html",
      "Explore Brooklyn local life",
      "$6800,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.8,
      1230,
      "Brooklyn"
    ),
    40.709295,
    -74.003099,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-4.png",
      "toursingle4.html",
      "Discover New York hidden gems",
      "$5300,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.9,
      2100,
      "Manhattan"
    ),
    40.71367192098294,
    -73.99764924560291,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-5.png",
      "toursingle5.html",
      "Historical Manhattan walking tour",
      "$4800,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.5,
      870,
      "Manhattan"
    ),
    40.7122,
    -74.0025,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-6.png",
      "toursingle6.html",
      "Skyline view: NYC cityscape adventure",
      "$6200,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.7,
      1430,
      "New York City"
    ),
    40.7089,
    -74.0058,
    1,
    "<div></div>",
  ],

  [
    locationData(
      "images/tours/tour-7.png",
      "toursingle7.html",
      "Brooklyn bridge photography tour",
      "$4500,00",
      [
        "images/gallery/img1.jpg",
        "images/gallery/img2.jpg",
        "images/gallery/img3.jpg",
      ],
      ["https://www.youtube.com/embed/tgbNymZ7vqY"],
      4.9,
      3050,
      "Brooklyn Bridge"
    ),
    40.7103,
    -73.9977,
    1,
    "<div></div>",
  ],
];

// ============================================================================
// PHẦN 3: HÀM TẠO MAP CHÍNH
// ============================================================================

function mainMap() {
  var ib = new InfoBox(); // Khởi tạo InfoBox cho popup

  var mapElement = document.getElementById("map");
  var mapZoomAttr = mapElement ? mapElement.dataset.mapZoom : null;
  var mapScrollAttr = mapElement ? mapElement.dataset.mapScroll : null;
  var zoomLevel =
    mapZoomAttr !== undefined && mapZoomAttr !== null
      ? parseInt(mapZoomAttr)
      : 5;
  var scrollEnabled =
    mapScrollAttr !== undefined && mapScrollAttr !== null
      ? parseInt(mapScrollAttr)
      : false;

  // Tạo map Google với
  var map = new google.maps.Map(mapElement, {
    zoom: zoomLevel,
    scrollwheel: false,
    center: new google.maps.LatLng(40.709295, -74.003099),
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
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });

  // ============================================================================
  // PHẦN 3.1: EVENT LISTENER CHO HOVER LISTING ITEM VÀ MARKER
  // ============================================================================

  // Convert mouseover/mouseout cho .listing-item-container (hiệu ứng hover với marker)
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

          // Separate mouseout listener (xử lý rời chuột)
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
  // PHẦN 3.2: TẠO INFOBOX VÀ MARKERS CHO MAP
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
    boxStyle: { width: "580px" },
    closeBoxMargin: "0",
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(25, 25),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false,
  };
  var overlay, i;
  var allMarkers = [];
  var clusterStyles = [{ textColor: "white", url: "", height: 50, width: 50 }];
  var markerIco = '<i class="icon icon-pin"></i>';

  // Vòng lặp tạo markers từ locations
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

    // Thêm event click cho marker
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

  // Event resize map khi thay đổi kích thước cửa sổ
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

  // ============================================================================
  // PHẦN 3.3: CUSTOM ZOOM CONTROL VÀ EVENT KHÁC
  // ============================================================================

  // Tạo custom zoom control
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

  // Toggle scroll wheel cho map
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

  // Event geolocation (tìm vị trí hiện tại)
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

  // Hàm geolocate sử dụng navigator.geolocation
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

// Khởi tạo mainMap nếu element #map tồn tại
var map = document.getElementById("map");
if (typeof map != "undefined" && map != null) {
  google.maps.event.addDomListener(window, "load", mainMap);
}

// ============================================================================
// PHẦN 4: CLASS CUSTOM MARKER
// ============================================================================

// Class tùy chỉnh cho marker
function CustomMarker(latlng, map, args, markerIco) {
  this.latlng = latlng;
  this.args = args;
  this.markerIco = markerIco;
  this.setMap(map);
}
CustomMarker.prototype = new google.maps.OverlayView();

// Phương thức draw: vẽ marker lên map
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
    // Event click cho marker (mở info box)
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
  // Cập nhật vị trí
  var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
  if (point) {
    div.style.left = point.x + "px";
    div.style.top = point.y + "px";
  }
};

// Remove market
CustomMarker.prototype.remove = function () {
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
    // Note: Xóa class nếu cần (an toàn trong browser hiện đại)
    if (this.div) this.div.classList.remove("clicked");
  }
};

// Trả về vị trí
CustomMarker.prototype.getPosition = function () {
  return this.latlng;
};
