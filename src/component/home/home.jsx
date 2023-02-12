//Fraidy Kuperman
import * as React from "react";
import { Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./home.css";

export const Home = () => {
  return (
    <body>
      <div className="App">
        <header>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  My Home Page
                </Typography>

                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 2,
                    },
                  }}
                >
                  <HomeIcon />
                </Box>
              </Toolbar>
            </AppBar>
          </Box>

          <h1>Fraidy Kuperman</h1>

          <p class="p">
            Hi, my name is Fraidy Kuperman, I am currently a student at Touro
            University majoring in Computer Sceince. I am in my fourth and last
            semester, before graduating. This is my very own home page for this
            class, Practicum in Software Development. Besides Computer Sceince,
            I love to excercise in my free time and enjoy eating nutritious and
            healthy foods, it helps me feel healthy and fit.
          </p>

          <br></br>

          <h3>All About My Favorite Healthy Foods</h3>
          <div class="food">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Apples</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The nutrients in apples provide a range of health benefits.
                  Apples are rich in fiber, vitamins, and minerals, all of which
                  benefit health. They also provide an array of antioxidants.
                  These substances help neutralize free radicals. Free radicals
                  are reactive molecules that can build up as a result of
                  natural processes and environmental pressures.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Nuts</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Many studies have shown that nuts provide various health
                  benefits — especially in regards to reducing heart disease
                  risk factors. Here are 9 impressive nuts and their health
                  benefits. In general, nuts are good sources of fat, fiber and
                  protein. Most of the fat in nuts is monounsaturated fat, as
                  well as omega-6 and omega-3 polyunsaturated fat.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Peppers</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lycopene, a pigment that's responsible for the color in
                  vibrant red bell peppers, also acts as a powerful antioxidant,
                  helping to guard your cells against harm from oxidative
                  stress. Research results suggest that eating foods rich in
                  lycopene is associated with prevention of prostate cancer and
                  heart disease.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Grapefruit</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Vitamin C. This is a powerful, water-soluble antioxidant that
                  is present in high amounts in grapefruit.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Asparugus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Asparagus contains high levels of the amino acid asparagine,
                  making it a natural diuretic. In other words, eating more of
                  the spears can help flush excess fluid and salt from your
                  body, which may help prevent urinary tract infections. “When
                  women are not urinating enough, they can get a UTI,” explains
                  Gans.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Chichken</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Chicken has long been considered a healthy alternative to red
                  meat. And it is indeed low in saturated fat, contains higher
                  amounts of omega-6 fatty acids than other animal meats, and is
                  high in protein and essential vitamins and minerals such as
                  B6, B12, iron, zinc, and copper.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <br></br>
          <br></br>

          <h3> My Favorite Excercises </h3>
          <div class="excercise">
            <ImageList>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Excercise</ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <br></br>
          <br></br>

          <h3>All About My Favorite Excercises</h3>
          <div class="excercise2">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Yoga</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yoga is a mind and body practice. Various styles of yoga
                  combine physical postures, breathing techniques, and
                  meditation or relaxation. Yoga is an ancient practice that may
                  have originated in India. It involves movement, meditation,
                  and breathing techniques to promote mental and physical
                  well-being.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Cardio</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In short, it has to raise your heart and breathing rates and
                  challenge your cardiovascular system, just like a biceps
                  exercise has to challenge your biceps and an abdominal
                  exercise has to challenge your abs.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Swimming</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It's a total-body workout. Swimming tackles everything from
                  sculpting your back to toning your arms—all without having to
                  pick up a weight. Rather than needing a plan to work specific
                  muscles, all four strokes work to strengthen your entire body.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Aerobics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By definition, aerobic exercise means “with oxygen.” Your
                  breathing and heart rate will increase during aerobic
                  activities. Aerobic exercise helps keep your heart, lungs, and
                  circulatory system healthy.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Walking</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Walking is a type of cardiovascular physical activity, which
                  increases your heart rate. This improves blood flow and can
                  lower blood pressure. It helps to boost energy levels by
                  releasing certain hormones like endorphins and delivering
                  oxygen throughout the body.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Weights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Weight-bearing exercise is essential for building and
                  maintaining healthy bones and includes any activity you do
                  that works your muscles and bones against gravity. 3 ﻿ During
                  weight-bearing exercise, bone adapts to the impact of weight
                  and the pull of muscle by building more bone cells.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <br></br>

          <h3>We are all a work in progress...</h3>
          <br></br>
          <CircularProgress color="secondary" />

          <h3>Click to start your FREE workout today!</h3>
          <Button
            variant="contained"
            color="secondary"
            target="_blank"
            component="a"
            href="https://www.muscleandstrength.com/workout-routines"
          >
            BEGIN
          </Button>

          <br></br>
          <br></br>

          <div class="fab">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab aria-label="like" color="secondary">
                <FavoriteIcon />
              </Fab>
            </Box>
          </div>
        </header>
      </div>
    </body>
  );
};

const itemData = [
  {
    img: "https://th.bing.com/th/id/OIP.87U1avNgBUoFalp9bVD01AHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Yoga",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://th.bing.com/th/id/OIP.icxTOQk9h43FlbHS3QtZGgHaHa?w=186&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Cardio",
  },

  {
    img: "https://th.bing.com/th/id/OIP.Cans_e5rIqoy60PXn0ChcQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Swim",
  },
  {
    img: "https://th.bing.com/th/id/OIP.0NG2uow_Ips9cOMPq2MbewAAAA?w=135&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Aerobics",
    cols: 2,
  },
  {
    img: "https://th.bing.com/th/id/OIP.X3QaTFx0mw97uQx1iKn4ewHaHg?w=181&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Walking",
    cols: 2,
  },
  {
    img: "https://th.bing.com/th/id/OIP.iQ09zBCnmUfh4OulQaBeBwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Weights",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
