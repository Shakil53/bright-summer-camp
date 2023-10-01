import { useState } from "react";
import CoursesCard from "./CoursesCard";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { motion } from 'framer-motion';
import SideBar from "./SideBar";






const Courses = () => {

    const [courses, setCourse] = useState([])

    fetch('http://localhost:5000/courses', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    })
        .then(res => res.json())
        .then(data => setCourse(data))



    return (
        <>
            <SectionTitle
                heading={'Courses'} subHeading={'--All Courses--'}
            ></SectionTitle>
            <section className="flex flex-row-reverse mr-8">

                <div className="grid md:grid-cols-3 gap-4 w-2/3 m-auto mt-10">
                    {
                        courses.map(course => <CoursesCard
                            key={course._id}
                            course={course}
                        ></CoursesCard>)
                    }
                </div>

                {/* side navigation bar */}

                <SideBar></SideBar>

            </section >
        </>
    );

};

export default Courses;










// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const [tabIndex, setTabIndex] = useState(0);

{/* <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Archery</Tab>
                <Tab>Badmintion</Tab>
                <Tab>Chess</Tab>
                <Tab>CycleStanding</Tab>
                <Tab>Dance</Tab>
                <Tab>Football</Tab>
                <Tab>Guitar</Tab>
                <Tab>Magic</Tab>
                <Tab>Pilates</Tab>
                <Tab>Swimming</Tab>
                <Tab>Tabletennis</Tab>
                <Tab>Volleyball</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs> */}