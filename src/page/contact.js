import { motion } from 'framer-motion';
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { pageTransition } from './cars';



export default function Contact(){
    // const location = useLocation()


    return (
        <motion.div
          exit = "out"
          initial = "out"
          animate = "in"
          variants = {pageTransition}
        >
          <Link>Edit Profile</Link>
        </motion.div>
      );
}

