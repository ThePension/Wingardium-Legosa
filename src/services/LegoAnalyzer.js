// import opencv
import cv from "@techstark/opencv-js";

// Function to convert an image to grayscale
function grayscale(blob) {
  const img = cv.imread(blob);
  // Convert to grayscale
  cv.cvtColor(img, img, cv.COLOR_RGBA2GRAY, 0);

  return img;
}

// Export the grayscale function
export { grayscale };
