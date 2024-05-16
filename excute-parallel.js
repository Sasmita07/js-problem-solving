const executeParallel = (tasks) => {
  return new Promise((resolve, reject) => {
    const results = []; // Store results of tasks
    let completedCount = 0; // Keep track of completed tasks

    const handleResolve = (result, index) => {
      results[index] = result;
      completedCount++;
      if (completedCount === tasks.length) {
        resolve(results);
      }
    };

    const handleReject = (error) => {
      reject(error);
    };

    tasks.forEach((task, index) => {
      task()
        .then((result) => {
          // Resolve the main Promise when all tasks are completed
          handleResolve(result, index);
        })
        .catch((error) => {
          handleReject(error); // Reject the Promise if any task fails
        });
    });
  });
};

// Example tasks
const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 1 completed');
    }, 200);
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 2');
    }, 10);
  });
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('105');
    }, 50);
  });
};

executeParallel([task1, task2, task3])
  .then((results) => {
    console.log('All tasks completed:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
