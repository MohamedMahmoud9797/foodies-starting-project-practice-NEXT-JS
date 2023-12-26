import Link from "next/link";
import logo from "../../public/images/logo.png"
import classes from "./mainHeader.module.css"
import Image from "next/image";
export default function MainHeader() {
  return (
    <header className={classes.header}>
    <Link href="/" className={classes.logo} > 
    <Image src={logo} alt="logo"  priority = {true} />
    NEXTLEVEL FOOD
     </Link>


     <nav className={classes.nav}>
     <ul>
    <li>
      <Link href="/meals">browse meals</Link>
    </li>
    <li>
      <Link href="/community">foodies  community</Link>
    </li>
  </ul>
     </nav>

    </header>
  )
}
