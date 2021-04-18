import React, { useState, useEffect } from 'react';

import { AboutDine } from '../cmps/AboutDine';
import { ExquisiteDining } from '../cmps/ExquisiteDining';
import { Family } from '../cmps/Family';
import { Highlights } from '../cmps/Highlights';
import { MakeReservation } from '../cmps/MakeReservation';
import { dataService } from '../services/dataService';



export const Home = () => {
    const [aboutDines, setAboutDines] = useState(null)
    const [highlights, setHighlights] = useState(null)

    useEffect(() => {
        const aboutDines = dataService.getAboutDine()
        setAboutDines(aboutDines)
        const highlights = dataService.getHighlights()
        setHighlights(highlights)
    }, [])

    return (
        <main>
            <ExquisiteDining />
            <AboutDine aboutDines={aboutDines} />
            <Highlights highlights={highlights} />
            <Family />
            <MakeReservation />
        </main>
    );
}


