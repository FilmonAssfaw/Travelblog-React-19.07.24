import "./PostMeta.css";

export default function PostMeta({ author, date }) {
  return (
    <div className="PostMeta">
      <span className="PostMeta-author">from {author}</span>
      <span className="PostMeta-date">
        on <time>{date}</time>
      </span>
    </div>
  );
}
