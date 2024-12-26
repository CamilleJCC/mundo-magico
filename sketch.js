   // Get all buttons with the class 'button-class'
      const buttons = document.querySelectorAll('.button-class');

      // Add event listener for each button
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // Toggle the 'active' class on each button
          button.classList.toggle('active');
        });
      });