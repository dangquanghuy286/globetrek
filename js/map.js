/*var infoBox_ratingType='star-rating';*/

"use strict";

// ============================================================================
// PHẦN 1: HÀM TẠO DỮ LIỆU VÀ MẢNG VỊ TRÍ CHO MAP CHÍNH
// ============================================================================

// Hàm tạo HTML gallery dựa trên danh sách ảnh
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

  // Các ảnh còn lại -> hidden
  for (let i = 1; i < galleryUrls.length; i++) {
    html += `
      <a data-fancybox="gallery1" 
         data-src="${galleryUrls[i]}" 
         style="display:none"></a>
    `;
  }

  return html;
}

// Hàm tạo HTML video fancybox
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
  videoUrls = []
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
                ${"<li class='icon icon-star'></li>".repeat(5)}
              </ul>
              <div class="rate">
                <div class="total-rate">5</div>
                <div class="review">(1.100)</div>
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
              <span class="total-people">20 People</span>
            </div>
            <div class="info date">
              <img src="./images/icons/calendar.svg" alt="icon" class="icon">
              <span class="total-day">4 days</span>
            </div>
          </div>

          <div class="content-bottom">
            <div class="address">
              <img src="./images/icons/place.svg" alt="icon" class="icon">
              <span class="location">Las Vegas</span>
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

      // ========= videoUrls  =========
      ["https://www.youtube.com/embed/tgbNymZ7vqY"]
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

      // ========= videoUrls  =========
      ["https://www.youtube.com/embed/tgbNymZ7vqY"]
    ),

    40.711536,
    -74,
    1,
    "<div></div>",
  ],
];

// ============================================================================
// PHẦN 2: HÀM XỬ LÝ ĐÁNH GIÁ (RATING)
// ============================================================================

// Hàm xử lý đánh giá số (thêm class dựa trên giá trị data-rating)
function numericalRating(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    const rating = parseFloat(el.dataset.rating);
    if (rating >= 4) el.classList.add("high");
    else if (rating >= 3) el.classList.add("mid");
    else el.classList.add("low");
  });
}

numericalRating(".numerical-rating");

// Hàm xử lý đánh giá sao (tạo HTML sao dựa trên data-rating)
function starRating(selector) {
  const starsMap = [
    [4.75, "star star star star star"],
    [4.25, "star star star star star half"],
    [3.75, "star star star star star empty"],
    [3.25, "star star star star half star empty"],
    [2.75, "star star star star empty star empty"],
    [2.25, "star star star half star empty star empty"],
    [1.75, "star star star empty star empty star empty"],
    [1.25, "star star half star empty star empty star empty"],
    [0, "star star empty star empty star empty star empty"],
  ];

  document.querySelectorAll(selector).forEach((el) => {
    const rating = parseFloat(el.dataset.rating);

    for (let [min, layout] of starsMap) {
      if (rating >= min) {
        el.innerHTML = layout
          .split(" ")
          .map((cls) => `<span class="${cls}"></span>`)
          .join("");
        break;
      }
    }
  });
}

starRating(".star-rating");

// ============================================================================
// PHẦN 3: HÀM TẠO MAP CHÍNH (MAIN MAP)
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

  // Tạo map Google với tùy chỉnh style và options
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
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "2.00",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#9c9c9c",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off", // Ẩn điểm quan tâm
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7b7b7b",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off", // Ẩn giao thông công cộng
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c8d7d4",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#070707",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
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
  var markerCluster, overlay, i;
  var allMarkers = [];
  var clusterStyles = [{ textColor: "white", url: "", height: 50, width: 50 }];
  var markerIco = '<i class="icon icon-pin"></i>'; // Placeholder icon, as original [4] is invalid HTML

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

    // Thêm event click cho marker (mở info box)
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

  // Tạo cluster cho markers
  var options = {
    imagePath: "images/",
    styles: clusterStyles,
    minClusterSize: 2,
  };
  markerCluster = new MarkerClusterer(map, allMarkers, options);

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
// PHẦN 4: HÀM TẠO MAP CHO SINGLE LISTING
// ============================================================================

function singleListingMap() {
  var singleMapElement = document.getElementById("singleListingMap");
  if (!singleMapElement) return; // Thoát nếu không có element

  // Lấy lat/lng từ data attributes
  var myLatlng = new google.maps.LatLng({
    lng: parseFloat(singleMapElement.dataset.longitude),
    lat: parseFloat(singleMapElement.dataset.latitude),
  });

  // Event click street view
  var streetView = document.getElementById("streetView");
  if (streetView) {
    streetView.addEventListener("click", function (e) {
      e.preventDefault();
      single_map.getStreetView().setOptions({
        visible: true,
        position: myLatlng,
      });
    });
  }

  // Custom zoom control cho single map (tương tự mainMap)
  var zoomControlDiv = document.createElement("div");
  var zoomControl = new ZoomControl(zoomControlDiv, single_map);
  function ZoomControl(controlDiv, single_map) {
    zoomControlDiv.index = 1;
    single_map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(
      zoomControlDiv
    );
    controlDiv.style.padding = "5px";
    var controlWrapper = document.createElement("div");
    controlDiv.appendChild(controlWrapper);
    var zoomInButton = document.createElement("div");
    zoomInButton.className = "custom-zoom-in";
    controlWrapper.appendChild(zoomInButton);
    var zoomOutButton = document.createElement("div");
    zoomOutButton.className = "custom-zoom-out";
    controlWrapper.appendChild(zoomOutButton);
    google.maps.event.addDomListener(zoomInButton, "click", function () {
      single_map.setZoom(single_map.getZoom() + 1);
    });
    google.maps.event.addDomListener(zoomOutButton, "click", function () {
      single_map.setZoom(single_map.getZoom() - 1);
    });
  }

  // Tạo icon cho single marker và thêm marker
  var singleMapIco =
    "<i class='" +
    (singleMapElement.dataset.mapIcon || "icon icon-pin") +
    "'></i>";
  new CustomMarker(
    myLatlng,
    single_map,
    {
      marker_id: "1",
    },
    singleMapIco
  );
}

// Khởi tạo singleListingMap nếu element tồn tại
var single_map = document.getElementById("singleListingMap");
if (typeof single_map != "undefined" && single_map != null) {
  google.maps.event.addDomListener(window, "load", singleListingMap);
}

// ============================================================================
// PHẦN 5: CLASS CUSTOM MARKER (TỪ GOOGLE OVERLAYVIEW)
// ============================================================================

// Class tùy chỉnh cho marker (3D flip effect)
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
  // Cập nhật vị trí pixel
  var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
  if (point) {
    div.style.left = point.x + "px";
    div.style.top = point.y + "px";
  }
};

// Phương thức remove: xóa marker
CustomMarker.prototype.remove = function () {
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
    // Note: Xóa class nếu cần (an toàn trong browser hiện đại)
    if (this.div) this.div.classList.remove("clicked");
  }
};

// Phương thức getPosition: trả về vị trí LatLng
CustomMarker.prototype.getPosition = function () {
  return this.latlng;
};
