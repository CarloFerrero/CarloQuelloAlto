import { Box, Container, Grid, GridItem } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";

import Card from "../components/card";
import Filter from "../components/filter";
import Hero from "../components/hero";
import { Link } from "react-router-dom";
import { PROJECTS } from "../PROJECTS";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState();
  const [filterProjects, setFilterProjects] = useState(PROJECTS);

  useEffect(() => {
    const filterBySearch = PROJECTS.filter((project) =>
      project.title.includes(search)
    );
    const filterByTag = PROJECTS.filter((project) =>
      project.tags.includes(tag)
    );
    const filteredItem = filterBySearch.concat(filterByTag);
    setFilterProjects(filteredItem);
  }, [search, tag]);

  return (
    <Box>
      <Hero
        title="This is a website where i store all of my
          small project, mostly logic, and coding challenges."
      />
      <Filter setSearch={setSearch} setTag={setTag} />
      <Container maxW="1200px">
        <Grid
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={4}
        >
          {filterProjects.map((item) => {
            return (
              <GridItem colSpan={{ sm: 1, md: item.colspan }} key={item.id}>
                <Link to={item.path}>
                  <Card
                    title={item.title}
                    description={item.description}
                    theme={item.theme}
                    link={item.path}
                    tags={item.tags}
                  />
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
