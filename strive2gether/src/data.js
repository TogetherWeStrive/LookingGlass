import React from 'react';

const professional = [{

    professionalOccupation1: {
        jobTitle: "Software Engineer",
        yearsExperience: "4",
        monthsExperience: "2",
        topSkills: {

            programming: "Java",
            marketing: "TikTok",
            vlogging: "Youtube",
            communicating: "Podcast",
            Management: "",
            engineering:"Computer",
            business: "Sales",

        },
        profesionalInfo:{

            userFirstName = "Marvin",
            userLastName = "Tchio",
            userAge = "25",
            userLocation = "San Diego"
        }

    },
    professionalOccupation2: {
        jobTitle: "Mechanical Engineer",
        yearsExperience: "3",
        monthsExperience: "6",
        topSkills: {

            programming: "python",
            marketing: "Instagram",
            vlogging: "Youtube",
            communicating: "Podcast",
            Management: "",
            engineering:"Hardware",
            business: "Sales",

        },
        profesionalInfo:{

            userFirstName = "Naz",
            userLastName = "Scott",
            userAge = "21",
            userLocation = "San Diego"
        }

    },
    professionalOccupation3: {
        jobTitle: "Computer Engineeer",
        yearsExperience: "9",
        monthsExperience: "11",
        topSkills: {

            programming: "JavaScript",
            marketing: "TikTok",
            vlogging: "Youtube",
            communicating: "Podcast",
            Management: "",
            engineering:"Computer",
            business: "Sales",

        },
        profesionalInfo:{

            userFirstName = "Yez",
            userLastName = "Solomon",
            userAge = "19",
            userLocation = "San Diego"
        }

    },



}];



function profesionalUser (professional) {
    return [
    professional.profesionalInfo.userFirstName,
    professional.professionalOccupation.jobTitle,
    professional.professionalOccupation.yearsExperience,
    professional.professionalOccupation.topSkills.engineering,
    professional.profesionalInfo.userLocation,

    function(){
        console.log(professional.professionalOccupation3.topSkills);

    }

    ];

}

export default professional;
export default profesionalUser;
