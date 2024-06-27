const success = (res, data, message) => {
    res.status(200).json({ status: 'success', message, data });
  };
  
  const error = (res, message, statusCode = 500) => {
    res.status(statusCode).json({ status: 'error', message });
  };
  
  module.exports = { success, error };
  