import {motion} from "framer-motion";
import ReactionBar from "./ReactionBar";
import UserBadge from "./UserBadge";
import Tag from "./Tag";
import timeAgo from "../utils/timeAgo";

export default function PostCard({ post, author, clickable = false, full = false }) {
return (
<motion.article
whileHover={clickable ? { y: -2 } : undefined}
className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all ${
clickable ? "hover:shadow-md" : ""
}`}
>
<header className="flex items-start justify-between gap-4">
<UserBadge user={author} />
<time className="shrink-0 text-xs text-slate-400" dateTime={new Date(post.createdAt).toISOString()}>
{timeAgo(post.createdAt)}
</time>
</header>


<h3 className="mt-3 text-xl font-semibold text-slate-800">{post.title}</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">{post.content}</p>


<div className="mt-3 flex flex-wrap gap-2">
{post.tags?.map((t) => (
<Tag key={t} label={t} />
))}
</div>


<div className="mt-5 border-t border-slate-100 pt-4">
<ReactionBar reactions={post.reactions} compact={!full} />
</div>
</motion.article>
);
}