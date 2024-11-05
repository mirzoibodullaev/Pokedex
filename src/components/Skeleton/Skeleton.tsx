import "./Skeleton.scss";

export const Skeleton = () => {
    return (
        <div className="skeleton-grid">
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="skeleton" key={index}>
                    <div className="skeleton__name shimmer"></div>
                    <div className="skeleton__img shimmer"></div>
                    <div className="skeleton__types">
                        <div className="skeleton__type shimmer"></div>
                        <div className="skeleton__type shimmer"></div>
                    </div>

                    <div className="skeleton__btn shimmer"></div>
                </div>
            ))}
        </div>
    );
};
