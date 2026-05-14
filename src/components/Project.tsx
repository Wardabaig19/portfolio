import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        {/* [cite: 18] */}
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/* [cite: 19] */}
                <a href="https://github.com/Wardabaig19/SmartParking-AI" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Wardabaig19/SmartParking-AI" target="_blank" rel="noreferrer"><h2>SmartParking AI</h2></a>
                {/* [cite: 19, 20, 22] */}
                <p>Fine-tuned a YOLOv11s deep learning model for real-time vehicle detection from aerial CCTV feeds. Designed and implemented an SQLite database schema to automatically log occupancy state changes, and delivered an interactive dashboard via Streamlit and Plotly.</p>
            </div>
            <div className="project">
                {/* [cite: 24] */}
                <a href="https://github.com/Wardabaig19/Hours-Allocation-System-Portfolio" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Wardabaig19/Hours-Allocation-System-Portfolio" target="_blank" rel="noreferrer"><h2>Hours Allocation System</h2></a>
                {/* [cite: 24, 25, 26] */}
                <p>Engineered a full-stack web application using PHP (Codeigniter 4) to automate faculty workload tracking. Implemented Role-Based Access Control (RBAC) and developed dynamic inline CRUD operations using JavaScript (AJAX).</p>
            </div>
            <div className="project">
                {/* [cite: 27] */}
                <a href="https://github.com/Wardabaig19/DataTales-Student-Performance-Dashboard" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Wardabaig19/DataTales-Student-Performance-Dashboard" target="_blank" rel="noreferrer"><h2>DataTales: Student Performance Explorer</h2></a>
                {/* [cite: 28, 29] */}
                <p>Built an interactive data visualization dashboard using Dash and Plotly to analyze correlations between lifestyle habits and academic performance. Engineered a data preprocessing pipeline using Pandas to clean a 1,000-record dataset.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;