import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { BlogCard, CardInfo, HeaderThree, TitleContent } from "../Projects/ProjectsStyles";
import { Card, Img, Tag } from "./LiellaStyles";

const Liella = () => (
    <div style={{width:'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card>
            <Img src="https://pbs.twimg.com/media/FWKnOhSaUAAy2wd?format=jpg" alt="Liella!"/>
        </Card>
        <Tag><strong style={{color: '#8C4794'}}>Liella!</strong>&nbsp;is perfect</Tag>
    </div>
    
);

export default Liella;