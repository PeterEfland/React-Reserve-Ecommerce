function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // If error.response exist on object, the request was made and server responded with a status code that is not in 2xx range
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);
    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // If we get request object, means that request was made, but no response was received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    // Something else happened in making request, that triggered an error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
