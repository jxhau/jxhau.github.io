import React from "react";
import { CardInfo } from "../Projects/ProjectsStyles";
import { Card } from "./aespaStyles";
import { Section } from "./SecretStyles";

const Media = () => (
    <Section flex row style={{maxWidth: '100%', justifyContent: 'center'}}>
        <Card style={{marginRight: '14px', minWidth: '70%'}}>
            <div style={{position:'relative', paddingBottom:'56.25%', paddingTop: '25px', height: '0'}}>
                <iframe style={{position:'absolute', top:'0', left: '0', width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/xTlMGZRWheM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <div style={{lineHeight: '24px', padding: '10px 24px', backgroundColor: 'rgb(60 60 80 / 50%)'}}>
                <h4>Illusion (Karina Focus)</h4>
                <p>aespa</p>
            </div>
        </Card>
    </Section>
    
);

export default Media;