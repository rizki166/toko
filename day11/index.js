const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'src/views'));

const assetsPath = path.join(__dirname, 'src/assets');
app.use("/assets", express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

let projects = [];

app.get('/', home);
app.get('/project-blog', projectBlog);
app.post('/project-blog', addProjectBlog);
app.get('/testimonial', testimonial);
app.get('/contact', contact);
app.get('/blogproject/:id', blogProject);

function addProjectBlog(req, res) {
  const newProject = {
    id: projects.length + 1,
    name: req.body.title,
    content: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    technologies: req.body.technologies,
    icon: req.body.icon,
    duration: calculateDuration(req.body.startDate, req.body.endDate),
  };

  projects.push(newProject);

  console.log("Proyek Baru:", newProject);

  
  res.render('index', { projects });
}


function calculateDuration(startDate, endDate) {
i
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} hari`;
}

function home(req, res) {
  
  res.render('index', { projects });
}

function projectBlog(req, res) {
  res.render('projectblog');
}

function testimonial(req, res) {
  res.render('testimonial');
}

function contact(req, res) {
  res.render('contact');
}

function blogProject(req, res) {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    res.status(404).send('Proyek tidak ditemukan');
    return;
  }

  res.render('blogProject', { project });
}

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
