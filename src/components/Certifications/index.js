// import React from 'react'
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import ExperienceCard from '../Cards/ExperienceCard';
// import { certifications } from '../../data/constants';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 40px 0px 80px 0px;
//     @media (max-width: 960px) {
//         padding: 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 80px 0;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
// `;



// const index = () => {
//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Title>Certifications</Title>
//                 <Desc>
//                     Here I've have many certifications in different fields and Technologies. 
//                 </Desc>
//                 <TimelineSection>
//                     <Timeline>
//                         {certifications.map((experience,index) => (
//                             <TimelineItem>
//                                 <TimelineSeparator>
//                                     <TimelineDot variant="outlined" color="secondary" />
//                                     {index !== certifications.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
//                                 </TimelineSeparator>
//                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                                     <ExperienceCard experience={experience}/>
//                                 </TimelineContent>
//                             </TimelineItem>
//                         ))}
//                     </Timeline>

//                 </TimelineSection>
//             </Wrapper>
//         </Container>
//     )
// }

// export default index

import React from 'react'
import styled from 'styled-components'
import { certifications } from '../../data/constants'




const ViewDocumentButton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.primaryDark};
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
`

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 12px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 30px;
    }
`

const CertificationsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    padding: 20px;
    width: 100%;
`

const CertificationCard = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.card};
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
`

const CertificationImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
`

const CertificationImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
`

const CertificationOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
`

const ViewCertificateText = styled.span`
    color: white;
    font-size: 16px;
    font-weight: 500;
`

const CertificationTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
`

const CertificationIssuer = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 6px;
`

const CertificationDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
`

const Certification = () => {
    return (
        <Container id="certifications">
            <Wrapper>
                <Title>My Certifications</Title>
                <Desc>
                    Professional certifications and achievements that validate my expertise and knowledge in various technologies.
                </Desc>
                <CertificationsGrid>
                    {certifications.map((certification, index) => (
                        <CertificationCard key={index}>
                            <CertificationImageWrapper>
                                <a href={certification.doc} target="_blank" rel="noopener noreferrer">
                                    <CertificationImage src={certification.img} alt={certification.title} />
                                    <CertificationOverlay>
                                        <ViewCertificateText>View Certificate</ViewCertificateText>
                                    </CertificationOverlay>
                                </a>
                            </CertificationImageWrapper>
                            <CertificationTitle>{certification.title}</CertificationTitle>
                            <CertificationIssuer>{certification.company}</CertificationIssuer>
                            
                            <ViewDocumentButton href={certification.doc} target="_blank" rel="noopener noreferrer">
                                View Document
                            </ViewDocumentButton>
                        </CertificationCard>
                    ))}
                </CertificationsGrid>
            </Wrapper>
        </Container>
    )
}

export default Certification