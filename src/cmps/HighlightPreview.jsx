import { ThinDecoration } from "./ThinDecoration"

export const HighlightsPreview = ({ highlight }) => {
    return (
        <section className="highlights-preview flex">
            {/* <img src={`./../assets/img/homepage/menu-items/${highlight.img}.jpg`} alt="" /> */}
            <img src={require(`./../assets/img/homepage/menu-items/${highlight.img}.jpg`).default} alt="" />
            <ThinDecoration />
            <div className="txt">
                <h2>{highlight.title}</h2>
                <p>{highlight.txt}</p>
            </div>
        </section>
    )
}