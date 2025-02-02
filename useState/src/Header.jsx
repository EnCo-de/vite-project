import chefClaudeLogo from "/images/chef-claude-icon.png"
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo}/>
            <h1>Chef Claude</h1>
        </header>
);
}
