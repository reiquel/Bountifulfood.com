document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img[id='image-ft']"));
  
    const config = {
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const loadImage = (image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    };
  
    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(onIntersection, config);
      lazyImages.forEach((image) => {
        observer.observe(image);
      });
    } else {
      lazyImages.forEach((image) => {
        loadImage(image);
      });
    }
  });
  