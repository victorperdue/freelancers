document.addEventListener('DOMContentLoaded', function () {
    // State
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
    const occupations = ['Web Developer', 'Graphic Designer', 'Content Writer', 'SEO Specialist', 'Video Editor'];
  
    let freelancers = [
      { name: 'John', occupation: 'Software Engineer', startingPrice: 50 },
      { name: 'Maria', occupation: 'UI/UX Designer', startingPrice: 40 },
      { name: 'Alex', occupation: 'Content Creator', startingPrice: 30 }
    ];
  
    // Functionality
    function renderFreelancers() {
      const freelancersList = document.getElementById('freelancersList');
      freelancersList.innerHTML = '';
  
      freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.innerHTML = `<p>Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}</p>`;
        freelancersList.appendChild(freelancerElement);
      });
    }
  
    function calculateAveragePrice() {
      const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
      const averagePrice = totalPrices / freelancers.length;
      document.getElementById('averagePrice').textContent = averagePrice.toFixed(2);
    }
  
    function generateRandomFreelancer() {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
      const randomStartingPrice = Math.floor(Math.random() * 100) + 20;
  
      const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice
      };
  
      freelancers.push(newFreelancer);
      renderFreelancers();
      calculateAveragePrice();
    }
  
    // Initial render
    renderFreelancers();
    calculateAveragePrice();
  
    // Interval to add a freelancer and rerender every 5 seconds
    setInterval(generateRandomFreelancer, 5000);
  });