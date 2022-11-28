import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { BlogCard, CardInfo, HeaderThree, TitleContent } from "../Projects/ProjectsStyles";
import { Card, Img, Tag } from "./aespaStyles";

const AESPA = () => (
    <div style={{width:'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card>
            <Img src="https://pbs.twimg.com/media/FY9lA93aAAAZfsr?format=jpg" alt="aespa"/>
        </Card>
        <Tag><strong>aespa</strong>&nbsp;is perfect</Tag>
    </div>
    
);

export default AESPA;