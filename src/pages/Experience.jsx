import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="experience-heading">Experience</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2019-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              High School
            </Typography>
            <Typography
              onClick={() =>
                window.open("https://stanthonyschoolhapur.in/", "_blank")
              }
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              St.Anthony's School, Hapur, Uttar Pradesh
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2021-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Senior Secondary
            </Typography>
            <Typography
              onClick={() =>
                window.open("https://stanthonyschoolhapur.in/", "_blank")
              }
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              St.Anthony's School, Hapur, Uttar Pradesh
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2022-2026
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Graduation
            </Typography>
            <Typography
              onClick={() => window.open("https://iiitt.ac.in/", "_blank")}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Indian Institute of Information Technology, Tiruchirappalli, Tamil
              Nadu
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2023-2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              SDE Internship
            </Typography>
            <Typography
              onClick={() => window.open("https://nandico.in/", "_blank")}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Nandico Healthcare
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <GroupsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Club Coordinator
            </Typography>
            <Typography
              onClick={() =>
                window.open(
                  "https://www.instagram.com/iiitt_mediaclub/",
                  "_blank"
                )
              }
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Media Club, IIITT, Tiruchirappalli
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <GroupsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Club Member
            </Typography>
            <Typography
              onClick={() =>
                window.open(
                  "https://www.instagram.com/web_dev.iiitt/",
                  "_blank"
                )
              }
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              WebDev Club, IIITT, Tiruchirappalli
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="custom-timeline-dot">
              <GroupsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Club Member
            </Typography>
            <Typography
              onClick={() =>
                window.open(
                  "https://www.instagram.com/literary_debatingclub.iiitt/",
                  "_blank"
                )
              }
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Literature and Debating Club, IIITT, Tiruchirappalli
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ marginTop: 1.5 }}
          >
            2025 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error">
              <StarsIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              What's Next?
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat, sans-serif" }}>
              Open to SDE Internships & growth opportunities
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
