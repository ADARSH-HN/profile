document.addEventListener("DOMContentLoaded", () => {
    const videoGallery = document.getElementById("video-gallery");
    const designGallery = document.getElementById("design-gallery");

    // Sample videos data
    const videos = [
        {title: "Its a video i made when i joined RC plane workshop 2024", url: "product/video1.mp4"},
        {title: "1 sem got completed and its memories", url: "product/video2.mp4"},
        {title: "A tragic event happend in Nitte 2024", url: "product/video3.mp4"}
    ];

    // Sample designs data
    const designs = [
        {title: "Made this for out team in RC plane workshop", url: "product/pic1.png"},
        {title: "poster for international womens day", url: "product/pic2.png"},
        {title: "poster for international womens day", url: "product/pic3.png"},
        {title: "This is made on the day vaalmiki jayanthi and that instagram account is mine made to post my designs and edits", url: "product/pic4.png"}
    ];

    // Load videos into gallery with fade-up class
    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.classList.add("fade-up");
        const videoTag = document.createElement("video");
        videoTag.controls = true;
        videoTag.loop = true;
        videoTag.src = video.url;

        const titleElement = document.createElement("h3");
        titleElement.textContent = video.title;
        videoElement.appendChild(titleElement);
        videoElement.appendChild(videoTag);

        videoGallery.appendChild(videoElement);
    });
    // Pause other videos when one is playing
const allVideos = document.querySelectorAll("video");
allVideos.forEach(video => {
    video.addEventListener("play", () => {
        allVideos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});


    // Load designs into gallery with fade-up class
    designs.forEach(design => {
        const designElement = document.createElement("div");
        designElement.classList.add("fade-up");
        const imgTag = document.createElement("img");
        imgTag.src = design.url;
        imgTag.alt = design.title;

        const titleElement = document.createElement("h3");
        titleElement.textContent = design.title;
        designElement.appendChild(titleElement);
        designElement.appendChild(imgTag);

        designGallery.appendChild(designElement);
    });

    // Add visible class to elements on scroll
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    const handleScroll = () => {
        fadeUpElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 50) {
                element.classList.add('visible');
            }
        });
    };

    // Trigger on load to check visibility on page load
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
