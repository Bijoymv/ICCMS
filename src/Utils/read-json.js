import qib2 from './../assets/qib2.json';

//Creating Promise to read the JSON data
//On real use case we will be calling this data from an API
//Created Promise here to mock the real time API implementation
export const Readqib2 = () => {
  return new Promise(function(resolve, reject) {
    resolve(qib2);
  });
};
