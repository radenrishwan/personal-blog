import { Link } from "react-router-dom";

export const Article = (props) => {
    const date = new Date(parseInt(props.article.createdAt))

    return <div className="h-[18rem] w-full flex flex-row gap-5 bg-white shadow-sm rounded-md">
        <div className="basis-2/5">
            <img
                src={props.article.thumbnail}
                alt="article-img"
                className="object-center object-cover h-full w-full rounded-l-md"
            />
        </div>
        <div className="flex flex-col justify-between basis-3/5 p-5">
            <div>
                <p className="text-2xl font-bold">
                    {props.article.title}
                </p>
                <p className="text-md font-light mt-2">
                    {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} | <span className="font-bold">{props.article.author}</span>
                </p>
                <p className="text-md font-medium mt-2">{props.article.description}
                </p>
            </div>
            <div>
                <Link to={props.to} style={{ textDecoration: "none" }} children={<p className="font-bold hover:text-green-400">Read More</p>} />
            </div>
        </div>
    </div>
}