

import project1_img1 from '../../../images/project1/1.png'
import project1_img2 from '../../../images/project1/2.png'
import project1_img3 from '../../../images/project1/3.png'
import project1_img4 from '../../../images/project1/4.png'


import project2_img1 from '../../../images/project2/1.png'
import project2_img2 from '../../../images/project2/2.png'
import project2_img3 from '../../../images/project2/3.png'
import project2_img4 from '../../../images/project2/4.png'
import project2_img5 from '../../../images/project2/5.png'
import project2_img6 from '../../../images/project2/6.png'


import project3_img1 from '../../../images/project3/1.png'
import project3_img2 from '../../../images/project3/2.png'
import project3_img3 from '../../../images/project3/3.png'
import project3_img4 from '../../../images/project3/4.png'
import project3_img5 from '../../../images/project3/5.png'


import project4_img1 from '../../../images/project4/1.png'
import project4_img2 from '../../../images/project4/2.png'
import project4_img3 from '../../../images/project4/3.png'
import project4_img4 from '../../../images/project4/4.png'


import project5_img1 from '../../../images/project5/1.png'
import project5_img2 from '../../../images/project5/2.png'
import project5_img3 from '../../../images/project5/3.png'
import project5_img4 from '../../../images/project5/4.png'
import project5_img5 from '../../../images/project5/5.png'


import project6_img1 from '../../../images/project6/1.png'
import project6_img2 from '../../../images/project6/2.png'
import project6_img3 from '../../../images/project6/3.png'


import project7_img1 from '../../../images/project7/1.png'
import project7_img2 from '../../../images/project7/2.png'
import project7_img3 from '../../../images/project7/3.png'
import project7_img4 from '../../../images/project7/4.png'

export const projects_list = [
    {
        name:'Assignments CRM',
        images:[project1_img1,project1_img2,project1_img3,project1_img4],
        main_image:project1_img1,
        tech:['HTML5', 'SASS', 'React', 'Redux', 'NodeJs', 'MongoDB'],
        live_url:'https://employees-todo.netlify.app/login/demo',
        text:['This project is a system for managing small business employees. ', 'The purpose of this system is to give the manager the opportunity to create employees, tasks, and associate between them. ', 'Employees can log into their accounts, and only see the tasks associated to them, they can mark which ones they are working on, allowing the manager to track employee progress for each task.']
    },
    {
        name:'Movie Time',
        images:[project5_img1,project5_img2,project5_img3,project5_img4,project5_img5],
        main_image:project5_img1,
        tech:['HTML5', 'CSS3', 'React', 'Redux'],
        live_url:'https://awesome-movie-app.netlify.app/',
        text:['This project is a movie site, which aims to present information such as release date, general overview, trailer and more. ','It also provides information about the newest and most popular films. I used The Movie DB (TMDb) API in this project.']
    },
    {
        name:'My Social Network',
        images:[project7_img2,project7_img3,project7_img1,project7_img4],
        main_image:project7_img2,
        tech:['HTML5', 'SCSS', 'React','Hooks', 'Redux'],
        live_url:'https://my-social-network.netlify.app/login/demo',
        text:['This project is a social network platform. ','Through this system, you can upload posts, see posts from other users, like, and comment. ','There is a demo account in the link, enter it and start uploading some fun posts! :)']
    },
    {
        name:'Tennis Shop',
        images:[project3_img1,project3_img2,project3_img3,project3_img4,project3_img5],
        main_image:project3_img1,
        tech:['HTML5', 'CSS3', 'React','Redux'],
        live_url:'https://tennis-shop.netlify.app/',
        text:['This project is a demo-store that contains client-side development. ','The purpose of it is to demonstrate my knowledge in e-commerce sites such as this one. ','Some of the store’s features are: ', '- Select tennis products from a wide range of categories', '- Filter and search for a specific product', '- Add products to a shopping cart', '- Explore and see what equipment is used by professional athletes']
    },
    {
        name:'Krembo Wings',
        images:[project2_img1,project2_img2,project2_img3, project2_img4, project2_img5, project2_img6],
        main_image:project2_img1,
        tech:['HTML5', 'CSS3', 'React'],
        live_url:'https://www.krembo.org.il/',
        text:['A project I have built as part of my work as a donation for the “Krembo Wings” foundation. In this project I was responsible for all client-side development from start to finish. ', 'This project is the flagship site of the nonprofit foundation, which aims to: ', '- Allow donors to donate directly through the website', '- Enables new members to sign up for the foundation', '- Provides various information about the foundation\'s branches and management', '- Allows contact via email','- And more']
    },
    {
        name:'Form Builder',
        images:[project6_img1,project6_img2,project6_img3],
        main_image:project6_img1,
        tech:['HTML5', 'CSS3', 'React', 'Redux'],
        live_url:'https://simple-form-builder.netlify.app/',
        text:['This project is a form-building tool designed to let the user build the form in the simplest way possible. ','On this site, you can put together a form and look at the results.']
    },
  
    {
        name:'Appointments CRM',
        images:[project4_img1,project4_img2,project4_img3,project4_img4],
        main_image:project4_img1,
        tech:['HTML5', 'CSS3', 'React', 'Redux', 'NodeJs', 'Express', 'MongoDB'],
        live_url:'https://business-appointments.netlify.app/signin/client/demo',
        text:['This project is a system for ordering small business queues. ', 'The purpose of this system is to enable customers to book queues at a click of a business such as:Hairdressers, beauty salons, and more. ', 'The business owner can login to the system as well and see the queues set for him. ', 'With this, the business owner can set and cancel queues.']
    },
]