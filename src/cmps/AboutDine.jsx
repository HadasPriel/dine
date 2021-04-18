import { AboutDinePreview } from "./AboutDinePreview"

export const AboutDine = ({ aboutDines }) => {

    if (!aboutDines) return <div>loading</div>

    return (
        <section className="about-dine">
            {aboutDines.map(aboutDine => <AboutDinePreview key={aboutDine.title} aboutDine={aboutDine} />)}
        </section>
    )
}