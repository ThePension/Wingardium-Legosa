// import opencv
import cv from "@techstark/opencv-js";

// Function to convert an image to grayscale
function grayscale(mat) {
  const gray_mat = new cv.Mat();
  // Convert to grayscale
  cv.cvtColor(mat, gray_mat, cv.COLOR_BGR2GRAY);

  return gray_mat;
}

// Export the grayscale function
export { grayscale };
