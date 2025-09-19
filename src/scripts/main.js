'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const success = `
  <div class='message'>
  'Promise was resolved!'
  </div>`;
const error = `
  <div class='message error-message'>
  'Promise was rejected!'
  </div>`;
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    if (e.target === logo) {
      resolve();
    } else {
      reject(new Error());
    }
  });
});

promise1.then(successMessage).catch(errorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(successMessage).catch(errorMessage);

function successMessage() {
  body.insertAdjacentHTML('beforeEnd', success);
}

function errorMessage() {
  body.insertAdjacentHTML('beforeEnd', error);
}
