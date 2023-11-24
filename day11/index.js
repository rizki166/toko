const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'src/views'));

const assetsPath = path.join(__dirname, 'src/assets');
app.use("/assets", express.static(assetsPath));
app.use(express.urlencoded({ extended: true })); // Menambahkan middleware untuk meng-handle form data

app.get('/', home);
app.get('/project-blog', projectBlog);
app.post('/project-blog', addProjectBlog);
app.get('/testimonial', testimonial);
app.get('/contact', contact);

function home(req, res) {
  res.render('index');
}

function projectBlog(req, res) {
  res.render('projectblog');
}

function addProjectBlog(req, res) {
  const title = req.body.title;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const description = req.body.description;
  const technologies = req.body.technologies;

  console.log("title:", title);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  console.log("description:", description);
  console.log("technologies", technologies)

  res.redirect('/project-blog');
}

function testimonial(req, res) {
  res.render('testimonial');
}

function contact(req, res) {
  res.render('contact');
}

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
