//your JS code here. If required.
   const form = document.getElementById('voteForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form reload

      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value);

      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      const checkVotingEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      checkVotingEligibility
        .then(message => alert(message))
        .catch(error => alert(error));
    });