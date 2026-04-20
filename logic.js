let jobs = [
  { title: "Frontend Developer", company: "ABC Ltd", location: "Dhaka" },
  { title: "Backend Developer", company: "XYZ Ltd", location: "Chittagong" }
];

const jobList = document.getElementById("job-list");
const searchInput = document.getElementById("search");
const form = document.getElementById("job-form");

function displayJobs(data) {
  jobList.innerHTML = "";

  data.forEach((job, index) => {
    const div = document.createElement("div");
    div.classList.add("job");

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <button onclick="deleteJob(${index})">Delete</button>
    `;

    jobList.appendChild(div);
  });
}

function deleteJob(index) {
  jobs.splice(index, 1);
  displayJobs(jobs);
}

// Search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value) ||
    job.company.toLowerCase().includes(value)
  );

  displayJobs(filtered);
});

// Add Job
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;

  jobs.push({ title, company, location });

  form.reset();
  displayJobs(jobs);
});

// Initial load
displayJobs(jobs);