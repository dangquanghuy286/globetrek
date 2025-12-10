// ===========P1:Tạo html box và mảng các vị trí cho map chính
// ===========a.Box item
function tourData(
  imgSrc,
  title,
  location,
  price,
  people,
  days,
  totalRate = "5",
  reviewCount = "(1.100)",
  totalImages = "5",
  videoUrls = [],
  galleryUrls = [],
  fallbackGalleryUrl = "https://plus.unsplash.com/premium_photo-1725408106567-a77bd9beff7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D"
) {
  // Helper function to generate gallery HTML
  function generateGalleryHtml(urls) {
    if (urls.length === 0) {
      // Fallback to single image link with customizable URL if no gallery provided
      return (
        '<a href="javascript:void(0)" class="count image" data-fancybox="gallery4" data-src="' +
        fallbackGalleryUrl +
        '">' +
        '<img src="./images/icons/picture.svg" alt="icon" class="icon" />' +
        '<span class="total-image">' +
        totalImages +
        "</span>" +
        "</a>"
      );
    }

    let galleryHtml =
      '<a href="javascript:void(0)" class="count image" data-fancybox="gallery4" data-src="' +
      urls[0] +
      '">' +
      '<img src="./images/icons/picture.svg" alt="icon" class="icon" />' +
      '<span class="total-image">' +
      urls.length +
      "</span>" +
      "</a>";

    // Add hidden links for additional images
    for (let i = 1; i < urls.length; i++) {
      galleryHtml +=
        '<a data-fancybox="gallery4" data-src="' +
        urls[i] +
        '" style="display: none"></a>';
    }

    return galleryHtml;
  }

  // Helper function to generate video HTML
  function generateVideoHtml(urls) {
    if (urls.length === 0) {
      return ""; // No video if empty
    }

    let videoHtml =
      '<a href="javascript:void(0)" class="count view-video" data-fancybox data-type="iframe" data-src="' +
      urls[0] +
      '">' +
      '<img src="./images/icons/camera.svg" alt="icon" class="icon" />' +
      "</a>";

    // Add hidden links for additional videos (if multiple)
    for (let i = 1; i < urls.length; i++) {
      videoHtml +=
        '<a data-fancybox data-type="iframe" data-src="' +
        urls[i] +
        '" style="display: none"></a>';
    }

    return videoHtml;
  }

  const galleryHtml = generateGalleryHtml(galleryUrls);
  const videoHtml = generateVideoHtml(videoUrls);

  return (
    '<div class="map-listing-item flat-recommended">' +
    '<div class="item hover-img list-style-01">' +
    '<div class="archive-top">' +
    '<div class="images-group img-style">' +
    '<img src="' +
    imgSrc +
    '" alt="image" />' +
    '<div class="group-meta">' +
    '<div class="tag-meta">' +
    '<div class="flag-tag">Featured</div>' +
    galleryHtml +
    videoHtml +
    "</div>" +
    '<div class="btn-wished">' +
    '<img src="./images/icons/icon-wishlist.svg" alt="icon" class="icon" />' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="archive-bottom">' +
    '<div class="content-top">' +
    '<div class="rating">' +
    '<ul class="list-star">' +
    '<li class="icon icon-star"></li>' +
    '<li class="icon icon-star"></li>' +
    '<li class="icon icon-star"></li>' +
    '<li class="icon icon-star"></li>' +
    '<li class="icon icon-star"></li>' +
    "</ul>" +
    '<div class="rate">' +
    '<div class="total-rate">' +
    totalRate +
    "</div>" +
    '<div class="review">' +
    reviewCount +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<h5 class="tour-title">' +
    '<a href="#" class="link">' +
    title +
    "</a>" +
    "</h5>" +
    '<div class="content-info-middle">' +
    '<div class="info person">' +
    '<img src="images/icons/users.svg" alt="icon" class="icon" />' +
    '<span class="total-people">' +
    people +
    "</span>" +
    "</div>" +
    '<div class="info date">' +
    '<img src="./images/icons/calendar.svg" alt="icon" class="icon" />' +
    '<span class="total-day">' +
    days +
    "</span>" +
    "</div>" +
    "</div>" +
    '<div class="content-bottom">' +
    '<div class="address">' +
    '<img src="./images/icons/place.svg" alt="icon" class="icon" />' +
    '<span class="location">' +
    location +
    "</span>" +
    "</div>" +
    '<h5 class="price">' +
    price +
    "</h5>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}
// ==========B.Data
var tourLocations = [
  [
    tourData(
      "./images/tours/tour-item/tour-1.png",
      "Art and tradition: Exploring Bali’s cultural scene",
      "Las Vegas",
      "$265,00",
      "20 People",
      "4 days",
      "5",
      "(1.100)",
      "5",
      ["https://www.youtube.com/watch?v=vp2yiZnjK0w&t=20s"],
      [
        "https://plus.unsplash.com/premium_photo-1725408106567-a77bd9beff7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1580655653885-65763b2597d0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.pexels.com/photos/15516367/pexels-photo-15516367.jpeg?cs=srgb&dl=pexels-solyartphotos-15516367.jpg&fm=jpg",
        "https://images6.alphacoders.com/551/551548.jpg",
      ],
      "https://plus.unsplash.com/premium_photo-1725408106567-a77bd9beff7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D"
    ),
    36.169941,
    -115.13983,
    1,
    "<div></div>",
  ],
  [
    tourData(
      "./images/tours/tour-item/tour-2.png",
      "Art and tradition: Exploring Bali’s cultural scene",
      "Las Vegas",
      "$265,00",
      "20 People",
      "4 days",
      "5",
      "(1.100)",
      "5",
      ["https://www.youtube.com/watch?v=vp2yiZnjK0w&t=20s"],
      [
        "https://media.gettyimages.com/id/1427352821/video/downtown-los-angeles.jpg?s=640x640&k=20&c=Jg_uReH030GeB0FvMlbui7pSOUjRkIeNRakhCCRHPag=",
        "https://media.istockphoto.com/id/459470819/photo/sun-shining-on-palm-trees.jpg?s=612x612&w=0&k=20&c=9tKMs0OVODWFaC7HEW6hm0b31_CWFxU4Q-mKJd7tWlA=",
        "https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://t3.ftcdn.net/jpg/02/92/44/92/360_F_292449220_xCU9aUaBi5AwdnFGCaWQtMqeVuXSUHbI.jpg",
        "https://media.gettyimages.com/id/532513422/photo/los-angeles-at-twilight.jpg?s=612x612&w=gi&k=20&c=fPHjVzE6NMtTY7Szzyy3akkmd7vjSM6yJWW-wlgJyCE=",
      ],
      "https://media.gettyimages.com/id/1427352821/video/downtown-los-angeles.jpg?s=640x640&k=20&c=Jg_uReH030GeB0FvMlbui7pSOUjRkIeNRakhCCRHPag="
    ),
    36.171941,
    -115.14183,
    2,
    "<div></div>",
  ],
  [
    tourData(
      "./images/tours/tour-item/tour-3.png",
      "Art and tradition: Exploring Bali’s cultural scene",
      "Las Vegas",
      "$265,00",
      "20 People",
      "4 days",
      "5",
      "(1.100)",
      "5",
      ["https://www.youtube.com/watch?v=SnB4M9ygl38"],
      [
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
        "https://res.cloudinary.com/dtljonz0f/image/upload/shutterstock_329662223_ss_non-editorial_3_csm8lw",
        "https://cdn.sanity.io/images/nxpteyfv/goguides/dd05bddc197a1c9dba9ecb43e26b30af4dbcf4f9-1600x1066.jpg",
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/11/1146750/New-York-City-Sunset.jpg",
        "https://image.newyork.co.uk/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp",
      ],
      "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
    ),
    36.167941,
    -115.13783,
    3,
    "<div></div>",
  ],
  [
    tourData(
      "./images/tours/tour-item/tour-4.png",
      "Art and tradition: Exploring Bali’s cultural scene",
      "Las Vegas",
      "$265,00",
      "20 People",
      "4 days",
      "5",
      "(1.100)",
      "5",
      ["https://www.youtube.com/watch?v=nFd-_Q7fpxE"],
      [
        "https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg",
        "https://vietourist.com.vn/public/frontend/uploads/kceditor/images/thu-do-hoa-ky-ten-la-gi_washington.jpg",
        "https://mia.vn/media/uploads/blog-du-lich/washington-dc-1-1719785812.jpg",
        "https://dulichviet.com.vn/images/bandidau/4-2025/kinh-nghiem-du-lich-washington-tham-quan-nha-trang.jpg",
        "https://images.musement.com/cover/0001/43/washington_header-42349.jpeg",
      ],
      "https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg"
    ),
    36.173941,
    -115.14383,
    4,
    "<div></div>",
  ],
];

document.addEventListener("DOMContentLoaded", function () {
  const el = document.getElementById("map");

  const zoom = Number(el.dataset.mapZoom) || 14;

  const map = new google.maps.Map(el, {
    center: { lat: 21.028511, lng: 105.83416 },
    zoom: zoom,
    scrollwheel: el.dataset.mapScroll === "true",
    styles: [
      {
        id: "infrastructure",
        label: {
          textFillColor: "#333333",
          textStrokeColor: "#ffffff",
        },
      },
      {
        id: "infrastructure.roadNetwork.road.arterial",
        geometry: {
          fillColor: "#ffffff",
          strokeColor: "#ffffff",
        },
      },
      {
        id: "infrastructure.roadNetwork.road.highway",
        geometry: {
          fillColor: "#ffffff",
          strokeColor: "#ffffff",
          strokeWidth: 0.2,
        },
      },
      {
        id: "infrastructure.roadNetwork.road.local",
        geometry: {
          fillColor: "#ffffff",
          strokeColor: "#ffffff",
        },
      },
      {
        id: "natural",
        label: {
          textFillColor: "#333333",
          textStrokeColor: "#ffffff",
        },
      },
      {
        id: "natural.land",
        geometry: {
          fillColor: "#f5f5f5",
        },
      },
      {
        id: "natural.water",
        geometry: {
          fillColor: "#e9e9e9",
        },
      },
      {
        id: "pointOfInterest",
        geometry: {
          fillColor: "#f5f5f5",
        },
        label: {
          textFillColor: "#333333",
          textStrokeColor: "#ffffff",
        },
      },
      {
        id: "pointOfInterest.recreation.park",
        geometry: {
          fillColor: "#dedede",
        },
      },
      {
        id: "political",
        geometry: {
          fillColor: "#fefefe",
        },
        label: {
          textFillColor: "#333333",
          textStrokeColor: "#ffffff",
        },
      },
    ],
  });
});
