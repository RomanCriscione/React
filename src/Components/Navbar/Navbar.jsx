import classes from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button";


const Navbar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.left}>
                <h4>FitóPlantas</h4>
            </div>
            <nav className={classes.center}>
            <button>Plantas</button>
                <button>Macetas</button>
                <button>Agroquimicos</button>
            </nav>
            <div className={classes.right}>
                <CartWidget />
            </div>
        </header>
    );
};

export default Navbar;