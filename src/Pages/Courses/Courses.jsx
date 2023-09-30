import { useState } from "react";
import CoursesCard from "./CoursesCard";




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
            <div className="ml-32 md:ml-80 lg:ml-[650px] m-8">
                <h2 className="card-title text-xl uppercase font-[mooli]">All Courses</h2>
                <p className="font-[mooli] ml-3 text-sm">---All Courses---</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 w-2/3 m-auto mt-10">
                {
                    courses.map(course => <CoursesCard
                        key={course._id}
                        course={course}
                    ></CoursesCard>)
                }
            </div>

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