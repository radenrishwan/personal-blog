import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom"
import ArticleRepository from "../../repository/article.mjs"

export const SideBar = () => {
    const categories = ["javascript", "golang", "nodejs", "programming", "random"]
    const navigate = useNavigate()

    const repository = new ArticleRepository() // TODO: singleton instance

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        repository.findAll(3).then(newArticles => {
            setArticles(newArticles)
            setLoading(false)
        })

        // eslint-disable-next-line
    }, [])

    const reloadPage = (id) => {
        navigate(`/article/${id}`)
        window.location.reload()
    }

    return (
        <>
            <div className="w-full">
                <p className="text-2xl font-bold">Recent Articles</p>
                <div className="mt-2">
                    {
                        loading ? <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse text-2xl hover:text-green-400" /> : articles.map(article => {
                            const id = uuidv4()
                            return (
                                <div key={`${article.id}-${id}`}>
                                    <div onClick={() => reloadPage(article.id)}
                                        className="text-md font-bold text-gray-700 w-full bg-white shadow-sm rounded-md my-2 p-3 hover:text-green-400 cursor-pointer">
                                        {article.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="text-2xl font-bold mt-10">Categories</p>
                <div className="mt-2 flex flex-col gap-2">
                    {categories.map(category => {
                        return <p key={category} className="font-bold hover:text-green-400 cursor-pointer">{category}</p>
                    })}
                    <Link to={"/"} style={{ textDecoration: "none" }} children={<p className="font-bold hover:text-green-400">More...</p>} />
                </div>
            </div>
        </>
    )
}