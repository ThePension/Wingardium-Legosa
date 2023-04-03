// import opencv
import cv from "@techstark/opencv-js";

// Function to convert an image to grayscale
function grayscale(mat) {
  const gray_mat = new cv.Mat();

  // Convert to grayscale
  cv.cvtColor(mat, gray_mat, cv.COLOR_BGR2GRAY);

  return gray_mat;
}

function gaussianBlur(mat, kernelSize = 3) {
  // kernelSize must be an odd number !
  // kernlSize must also be bigger or equal than 3

  // kernelSize controls
  if (kernelSize < 3) {
    kernelSize = 3;
  } else if (kernelSize % 2 == 0) {
    kernelSize += 1;
  }

  const blured_mat = new cv.Mat();
  const kernel = new cv.Size(kernelSize, kernelSize);

  // Gaussian Blur
  cv.GaussianBlur(mat, blured_mat, kernel, 0, 0, cv.BORDER_DEFAULT);

  return blured_mat;
}

// Export the grayscale function
export { grayscale, gaussianBlur };
