import { Link } from "react-router-dom"

export const SideBar = () => {
    const categories = ["javascript", "golang", "nodejs", "programming", "random"]
    const articles = ["What is ReactJS ?", "Is ReactJS good for beginner ?", "GO vs NodeJS", "Why programming is fun", "Why programming is fun"]

    return (
        <>
            <div className="w-full">
                <p className="text-2xl font-bold">Recent Articles</p>
                <div className="mt-2">
                    {
                        articles.map(article => {
                            return <>
                                <div className="text-xl font-bold text-gray-700 w-full bg-white shadow-sm rounded-md my-2 p-3 hover:text-green-400 cursor-pointer">
                                    {article}
                                </div>
                            </>
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