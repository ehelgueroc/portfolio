import React, { FC } from 'react'
import { Col } from 'react-bootstrap'

interface ProjectCardInterface {
    title: string;
    description: string;
    imgUrl: string;
} 

export const ProjectCard: FC<ProjectCardInterface> = ({ title, description, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="Project image" />
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}