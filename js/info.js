const personDetails = {
    personal: {
      firstName: "Ahmad",
      lastName: "Nabil",
      email: "foooeadonly@gmail.com",
      age: 19,
      languages: "Indonesian & English",
      phone: "Will be Available soon 😉",
      contactMail: "foooeadonly@gmail.com",
      address: "Jakarta, ID",
      nationality: "Indonesia",
      freelance: "Graphic Designer & Bot Developments",
      description: "I'm a student developer, graphic designer and discord server manager.\nI studied at a Jakarta vocational high school majoring in marketing and now in an online philosophy & programming class. I'm currently working at Homely as CEO and this is my first project."
    },
    professional: {
      yoe: 1,
      completedProjects: 5,
      happyCustomers: 2,
      awardsWon: 3,
    },
    academic: {
      college: {
        name: "Jakarta vocational high school",
        duration: "2020 - 2022",
        course: "",
      },
      school: {
        name: "Al-Mubarok Islamic Boarding School",
        duration: "2017-2019",
        course: ""
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 55,
      "javascript": 80,
      "css": 30,
      "nodejs": 85,
      "wordpress": 25,
      "python": 45,
      "gitAndGithub": 50,
      "vscode": 65,
      },
    social: {
      github: "https://github.com/nqbill",
      linkedin: "https://www.linkedin.com",
      codepen: "https://codepen.io",
      telegram: "https://t.me/nqbill"
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');
