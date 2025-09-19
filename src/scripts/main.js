'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const success = document.createElement('div');
const error = document.createElement('div');

success.setAttribute('class', 'message');
success.textContent = 'Promise was resolved!';
error.setAttribute('class', 'message error-message');
error.textContent = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener('click', (e) => {
      if (e.currentTarget === logo) {
        resolve();
      }
    });
  }
});

promise1.then(successMessage).catch(errorMessage);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(successMessage).catch(errorMessage);

function successMessage() {
  body.appendChild(success);
}

function errorMessage() {
  body.appendChild(error);
}
