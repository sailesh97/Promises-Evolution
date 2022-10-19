export function promiseRace(promisesArray) {
    return new Promise((resolve, reject) => {
      promisesArray.forEach((promise) => {
        promise
          .then(resolve) // resolve outer promise, as and when any of the input promise resolves
          .catch(reject); // reject outer promise, as and when any of the input promise rejects
      });
    });
  }
  