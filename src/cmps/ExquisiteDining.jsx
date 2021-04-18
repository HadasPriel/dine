
export const ExquisiteDining = () => {

    return (
        <section className="exquisite-dining dark">
            <div className="main-layout">
                <img className="logo" src={require(`./../assets/img/logo.svg`).default} alt="" />
                <div className="txt">
                    <h1>Exquisite dining since 1989</h1>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    <button>Book a table</button>
                </div>
            </div>
        </section>
    )
}