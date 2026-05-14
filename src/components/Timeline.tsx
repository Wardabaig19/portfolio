import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="education">
      <div className="items-container">
        {/* [cite: 7] */}
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2022 - May 2026" /* [cite: 10] */
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            {/* [cite: 9] */}
            <h3 className="vertical-timeline-element-title">Bachelor of Information Technology</h3>
            {/* [cite: 8] */}
            <h4 className="vertical-timeline-element-subtitle">Murdoch University Dubai</h4>
            {/* [cite: 11] */}
            <p>
              Double Major: Computer Science | Artificial Intelligence and Autonomous Systems
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;