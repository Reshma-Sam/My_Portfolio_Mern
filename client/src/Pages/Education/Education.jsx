import React from 'react'
import './education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa6";

function Education() {
    return (
        <>
            <div className="education" id="Education">
                <h2 className='col-12 col-md-12 col-lg-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2011-2015"
                        iconStyle={{ background: '#db3268', color: 'white' }}
                        icon={<IoSchoolSharp />}
                    >
                        <h3 className="vertical-timeline-element-title">B.TECH</h3>
                        <h5 className="vertical-timeline-element-subtitle">Calicut University</h5>
                        <h6 className="vertical-timeline-element-subtitle">Palakkad, Kerala</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2009-2011"
                        iconStyle={{ background: '#db3268', color: 'white' }}
                        icon={<BiSolidSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">PLUS 2</h3>
                        <h5 className="vertical-timeline-element-subtitle">Chandra Memorial</h5>
                        <h6 className="vertical-timeline-element-subtitle">Thrissur, Kerala</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2008-2009"
                        iconStyle={{ background: '#db3268', color: 'white' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">SSLC</h3>
                        <h5 className="vertical-timeline-element-subtitle">Chandra Memorial</h5>
                        <h6 className="vertical-timeline-element-subtitle">Thrissur, Kerala</h6>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education