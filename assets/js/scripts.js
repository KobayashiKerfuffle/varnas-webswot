document.getElementById('start-analysis').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Retrieve data from the form fields
    const vision = document.getElementById('org-vision').value;
    const mission = document.getElementById('org-mission').value;
    const priorities = document.getElementById('org-priorities').value;

    // Add logic to process the input data and initiate SWOT analysis
    // For now, we'll just log the values to console
    console.log("Vision:", vision);
    console.log("Mission:", mission);
    console.log("Priorities:", priorities);
});
