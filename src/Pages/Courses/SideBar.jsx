import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const SideBar = () => {

    return (
        <motion.sidebar
            initial={{
                opacity: 0,
                x: -250
            }}
            animate={{
                opacity: 1,
                x: -0,
                transition: {
                    type: 'spring',
                    stiffness: 30,
                    delay: 0.5
                }

            }}
            className='min-h-screen m-7 ml-9 md:w-60 hidden md:inline'>
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem className='text-end' component={<Link to="/" />}> Archery</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Badmintion</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Chess</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Skating</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Danceing</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Football</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Guitar</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Magic</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Pilates</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Swimming</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Tennins</MenuItem>
                <MenuItem className='text-end' component={<Link to="/" />}> Volleball</MenuItem>
            </Menu>
        </motion.sidebar>

    );
};

export default SideBar;