import { ThinDecoration } from "./ThinDecoration"
import { BoldDecoration } from "./BoldDecoration"

export const AboutDinePreview = ({ aboutDine }) => {

    return (
        <section className={`about-dine-preview flex space-between align-center main-layout ${aboutDine.direction}`}>
            <img src={require(`./../assets/img/homepage/${aboutDine.img}.jpg`).default} alt="" />
            <div className="txt-info">
                <ThinDecoration />
                <h2>{aboutDine.title}</h2>
                <p>{aboutDine.txt}</p>
            </div>
            <BoldDecoration />
        </section>
    )
}