import React from 'react'
import './App.css';
import './assets/styles/main.scss'
import { AppFooter } from './cmps/AppFooter';
import { Home } from './pages/Home';



export class RootCmp extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <section>

                <main className="app">
                    <Home />
                </main>
                <AppFooter />
            </section>
        );
    }
}




