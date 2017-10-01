const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('intro', {
    nav: false,
    subnav: false,
    title: "CODE TEST"
  });
});

router.get('/menu', (req, res) => {
  fs.readFile("public/pages/menu-page.json", (err, data) => {
    if(err) return console.log(err);
    let state = JSON.parse(data);
    res.render('menu-page', {
      nav: true,
      subnav: true,
      title: state.title,
      intro: state.intro,
      contents: state.contents
    });
  });
});

router.get('/content001', (req, res) => {
  fs.readFile("public/pages/content-page001.json", (err, data) => {
    if(err) return console.log(err);
    let state = JSON.parse(data);
    res.render('content-page', {
      nav: true,
      subnav: false,
      navigation: state.navigation,
      title: state.title,
      intro: state.intro,
      contents: state.contents
    });
  });
});

module.exports = router;
