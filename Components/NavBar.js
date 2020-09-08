import Link from "next/link"

const NavBar=()=>(
    <div>
        <a className="container navbar navbar-expand navbar-dark bg-dark mb-4 navbar-brand" href="#">BitzPrice</a>
    <ul>
    <li><Link href = "/"><a>Home</a></Link></li>
    <li><Link href = "/about"><a>About</a></Link></li>
</ul>
<style>{`
    ul{
        background : #333;
        color:#fff;
        list-style:none;
        display:flex;
    }
    ul li{
        font-size : 18px;
        margin-right:20px;
    }
    ul li a{
        color : #fff;
        text-decoration :none;
    }
`}
</style> 
</div>

);

export default NavBar;