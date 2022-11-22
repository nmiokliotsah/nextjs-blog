import Link from "next/link";
import { useSession } from "next-auth/react"
import Logo from "../Logo/Logo";
import style from './Navigation.module.scss';
import LoginButton from "../../shared/ui/LoginButton/LoginButton";

function Navigation() {
  const { data: session } = useSession();

  return <header className={style.blogHeader}>
    <Link href='/'>
      <Logo />
    </Link>
    <nav>
      <ul>
        {session ? <>
          <li><Link href='/posts'>Posts</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li>
            <LoginButton text='Logout' />
          </li>
        </>
          : <li>
            <LoginButton text='Login' />
          </li>
        }
      </ul>
    </nav>
  </header >
}

export default Navigation;
