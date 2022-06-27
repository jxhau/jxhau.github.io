import React from "react";
import { CardInfo } from "../Projects/ProjectsStyles";
import { Card } from "./LiellaStyles";
import { Section } from "./SecretStyles";

const Media = () => (
    <Section flex row style={{maxWidth: '100%', justifyContent: 'center'}}>
        <Card style={{marginRight: '14px'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ksf_gq6fZZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{lineHeight: '24px', padding: '10px 24px', backgroundColor: 'rgb(60 60 80 / 50%)'}}>
                <h4>Cotton Candy AAO! Special MV</h4>
                <p>作詞：畑 亜貴　作曲・編曲：TAKAROT</p>
            </div>
        </Card>
    </Section>
    
);

export default Media;