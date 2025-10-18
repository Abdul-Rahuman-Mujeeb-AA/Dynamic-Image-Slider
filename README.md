Dynamic Image Slider

A *modern, responsive, and dynamic image slider* built using HTML, CSS, and JavaScript (or React).  
It supports, manual transition,navigation, captions, and API integration for loading images dynamically.

Features

✅ Dynamic image loading from API or JSON file  
✅ Automatic and manual slide navigation  
✅ Fully responsive for all screen sizes  
✅ Captions and descriptions for each image  
✅ Lazy loading for improved performance  
✅ Simple setup and customization  

Project Structure:
index.html
    |
Style.css
    |
Script.js

2. Navigate to the project folder

cd dynamic-image-slider

3. Open in VS Code

code .

4. Run the project

Simply open index.html in your browser or use a live server:

npx live-server

API Integration

You can load images dynamically from an external API.

Sample API Endpoint

Sample API Response

[
  {
    "url": "https://example.comimages/image1.jpg",
    "title": "Mountain",
    "description": "Beautiful sunset view over the mountains."
  },

  {
    "url": "https://example.com/images/image2.jpg",
    "title": "Mountain-1",
    "description": "Calm and peaceful Lighty Sunset View Evening."
  }
]

Integration Steps

1. Use fetch() or axios to call the API.


2. Loop through the JSON response.


3. Dynamically insert images and captions into the slider container.

Technologies Used

HTML5 — Structure

CSS3 — Styling and animation

JavaScript (ES6) — Dynamic functionality

Optional: React.js for component-based design

API: REST or local JSON for image data

How It Works

1. User loads the webpage.


2. JavaScript fetches image data from an API or JSON file.


3. Images are dynamically inserted into the slider container.


4. The slider automatically cycles through images.


5. Users can also manually navigate between slides.


System Architecture

🧰 Configuration

You can modify settings in script.js:

const slideInterval = 3000; // Change slide every 3 seconds
const enableCaptions = true; // Show captions
const apiEndpoint = "./api/images.json"; // API or local file


🖼 Screenshots

Description	Preview

Initial Load	
Automatic Slide	
Responsive View	


🧑‍💻 Developer Guide

Add new images to api/images.json or update your API endpoint.

Customize animation duration and direction in CSS.

Extend functionality (e.g., add fade effects or thumbnails).


🧾 License

This project is open-source and available under the MIT License.

🌍 Deployment

You can deploy the project easily using:

GitHub Pages

Vercel

Example:

npm run build
vercel deploy