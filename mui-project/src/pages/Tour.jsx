import { BottomNavigation, Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import React from "react";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore The World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/50/Welcome_to_LV.JPG"
        alt="img"
        height={325}
      ></img>
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this Ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsam
        magnam dignissimos quisquam ut porro, quis, dolor quia ipsa aliquam eos
        quae nesciunt commodi atque aperiam laboriosam vel magni voluptatem
        minus? Voluptates mollitia enim doloribus ipsam maxime voluptate omnis
        pariatur!
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frenquently Asked Questions
      </Typography>
      <CustomizedAccordions />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
