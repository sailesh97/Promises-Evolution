function allSettled(promises) {
    let mappedPromises = promises.map((p) => {
      return p.then((value) => {
          return {
            status: 'fulfilled',
            value,
          };
        })
        .catch((reason) => {
          return {
            status: 'rejected',
            reason,
          };
        });
    });
    return Promise.all(mappedPromises);
  };
  