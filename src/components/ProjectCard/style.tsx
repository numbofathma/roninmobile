import styled from 'styled-components';

export const ProjectCardWrapper = styled.div`
    margin-top: 2rem;
    transition: all 0.25s ease-in-out;
    div.flippy-card:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.5);
    }
`;

export const ProjectCardHeader = styled.h2`
    position: absolute;
    left: 0;
    bottom: 35px;
    width: 100%;
    font-size: 1.55rem;
    font-weight: 700;
    color: #555555;
    padding: 25px 0;
    border-top: 1px dashed #CCCCCC;
    border-bottom: 1px dashed #CCCCCC;
`;

export const ProjectCardSecondaryHeader = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #212529;
    padding-top: 50px;
`;

export const ProjectCardDescription = styled.p`
    font-size: 1.15rem;
    text-align: justify;
    color: #777777;
    font-weight: bold;
    padding-top: 25px;
`;
