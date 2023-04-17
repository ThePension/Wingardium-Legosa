// import opencv
import cv from "@techstark/opencv-js";

/**
 * Function to convert an image to grayscale
 */
function grayscale(mat) {
  const gray_mat = new cv.Mat();

  // Convert to grayscale
  cv.cvtColor(mat, gray_mat, cv.COLOR_BGR2GRAY);

  return gray_mat;
}

/**
 * Function that applies a gaussian blur to an image with the kernelSize in parameter
 */
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

  kernel.delete();

  return blured_mat;
}

/**
 * Function that returns an array with mat channels (RGBA)
 */
function splitColors(mat) {
  const mat_colors = {};

  let channels = new cv.MatVector();
  cv.split(mat, channels);

  mat_colors.R = channels.get(0);
  mat_colors.G = channels.get(1);
  mat_colors.B = channels.get(2);
  mat_colors.A = channels.get(3);

  channels.delete();

  return mat_colors;
}

/**
 * Function that applies canny edges detection algorithm
 */
function canny(
  mat,
  threshold1 = 50,
  threshold2 = 100,
  apertureSize = 3,
  l2gradient = false
) {
  const canny = new cv.Mat();

  cv.Canny(mat, canny, threshold1, threshold2, apertureSize, l2gradient);

  return canny;
}

/**
 * Function that extract edges with laplacian filter
 */
function laplacian(
  mat,
  depth = cv.CV_8U,
  kSize = 1,
  scale = 1,
  delta = 0,
  borderType = cv.BORDER_DEFAULT
) {
  const edges = new cv.Mat();

  cv.Laplacian(mat, edges, depth, kSize, scale, delta, borderType);

  return edges;
}

/**
 * Function that applies a threshold
 */
function thresholdBinary(mat, thresh = 50, maxVal = 200) {
  const threshold = new cv.Mat();

  cv.threshold(mat, threshold, thresh, maxVal, cv.THRESH_BINARY);

  return threshold;
}

/**
 * Function that applies opening on an image
 */
function opening(mat, kSize = 5) {
  let open = new cv.Mat();

  let M = cv.Mat.ones(kSize, kSize, cv.CV_8U);
  let anchor = new cv.Point(-1, -1);

  cv.morphologyEx(
    mat,
    open,
    cv.MORPH_OPEN,
    M,
    anchor,
    1,
    cv.BORDER_CONSTANT,
    cv.morphologyDefaultBorderValue()
  );

  M.delete();

  return open;
}

/**
 * Function that applies closing on an image
 */
function closing(mat, kSize = 5) {
  let close = new cv.Mat();

  let M = cv.Mat.ones(kSize, kSize, cv.CV_8U);

  cv.morphologyEx(mat, close, cv.MORPH_CLOSE, M);

  M.delete();

  return close;
}

/**
 * Function that return the contours of an image
 */
function findBorders(mat) {
  const borders = new cv.MatVector();
  const hierarchy = new cv.Mat();

  cv.findContours(
    mat,
    borders,
    hierarchy,
    cv.RETR_TREE,
    cv.CHAIN_APPROX_SIMPLE
  );

  hierarchy.delete();

  return borders;
}

/**
 * Function that returns an image of the borders
 */
function displayBorders(mat, borders) {
  let mat_borders = cv.Mat.zeros(mat.rows, mat.cols, cv.CV_8UC3);
  let color = new cv.Scalar(255, 0, 0);

  for (let i = 0; i < borders.size(); i++) {
    cv.drawContours(mat_borders, borders, i, color, 1, cv.LINE_8);
  }

  return mat_borders;
}

// Export the functions
export {
  grayscale,
  gaussianBlur,
  splitColors,
  canny,
  laplacian,
  thresholdBinary,
  opening,
  closing,
  findBorders,
  displayBorders,
};
