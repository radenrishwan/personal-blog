import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
    const searchFormRef = useRef(null);
    const searchButtonRef = useRef(null);
    const navigate = useNavigate()
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const searchArticle = (event) => {
        event.preventDefault()

        navigate(`/search`, { state: searchFormRef.current.value })
        window.location.reload()
    }

    const showSearchForm = () => {
        searchFormRef.current.classList.toggle("hidden");
        searchButtonRef.current.classList.toggle("text-green-400");
    }

    return (
        <>
            <div
                className="drop-shadow-md bg-white border-opacity-60 border-0 border-b border-gray-400 fixed w-full top-0">
                <nav className="flex flex-row justify-between items-center container mx-auto px-[8rem]">
                    <div id="logo">
                        <Link to={"/"} style={{ textDecoration: "none" }}
                            children={<h2 className="hover:text-green-400">SeiorTech.</h2>} />
                    </div>
                    <div id="navigation" className="flex gap-5 items-center">
                        <Link to={"/"} style={{ textDecoration: "none" }}
                            children={<h3 className="border-0 hover:border-b-2 border-solid border-green-400">Home</h3>} />
                        <Link to={"#"} onClick={() => window.location.href = "https://github.com/radenrishwan"}
                            style={{ textDecoration: "none" }} children={<h3 className="border-0 hover:border-b-2 border-solid border-green-400">Github</h3>} />
                        <Link to={"#"} onClick={() => window.location.href = "https://blog.mohamadrishwan.me"}
                            style={{ textDecoration: "none" }} children={<h3 className="border-0 hover:border-b-2 border-solid border-green-400">About</h3>} />
                        <div className="m-2 h-7 border-solid border-l border-black border-opacity-10"></div>
                        <FontAwesomeIcon className="hover:text-green-400 cursor-pointer" icon={faMoon} />
                        <FontAwesomeIcon className="hover:text-green-400 cursor-pointer" icon={faSearch}
                            ref={searchButtonRef} onClick={showSearchForm} />
                        <form onSubmit={searchArticle}>
                            <input className="border-0 border-solid border-green-400 w-[12rem] p-1 hidden" type="text"
                                placeholder="Search" ref={searchFormRef} />
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}