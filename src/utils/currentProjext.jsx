import { PROJECTS } from "../PROJECTS";

export const getCurrentProject = (location) => {
  let currentProject = PROJECTS.find(
    (project) => project.path === location.pathname
  );
  return currentProject;
};
