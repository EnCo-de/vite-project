import globe from '/images/globe.png'

export default function Header() {
    return <>
        <header>
            <img src={globe} alt="globe" />
            <h1>Travel journey</h1>
        </header>
        <p className="sub">React Vite project</p>
    </>;
}