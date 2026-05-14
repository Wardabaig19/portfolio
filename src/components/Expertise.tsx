import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// [cite: 14]
const labelsFirst = [
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "YOLOv11",
    "RT-DETR",
    "BERTopic",
    "Python",
    "CNN"
];

// [cite: 13, 15, 16]
const labelsSecond = [
    "PHP",
    "CodeIgniter 4",
    "JavaScript",
    "HTML",
    "Java",
    "C++",
    "MySQL",
    "SQLite"
];

// [cite: 14, 17]
const labelsThird = [
    "AWS",
    "Linux",
    "MATLAB",
    "Pandas",
    "Dash",
    "Plotly",
    "Jupyter Notebook"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            {/* [cite: 12] */}
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    {/* [cite: 14] */}
                    <h3>AI / ML Frameworks</h3>
                    {/* [cite: 4] */}
                    <p>Hands-on experience developing machine learning models and computer vision systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    {/* [cite: 16] */}
                    <h3>Full Stack Web Development</h3>
                    {/* [cite: 16] */}
                    <p>Proficient in building secure web applications, implementing Role-Based Access Control, and dynamic logic processing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    {/* [cite: 14, 17] */}
                    <h3>Data Analytics & Infrastructure</h3>
                    {/* [cite: 14] */}
                    <p>Skilled in building preprocessing pipelines, deploying interactive data visualization dashboards, and managing databases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;