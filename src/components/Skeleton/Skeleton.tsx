import "./Skeleton.scss";

interface SkeletonProps {
    variant: "details" | "card";
}

export const Skeleton = ({ variant }: SkeletonProps) => {
    return (
        <div>
            {variant === "card" && (
                <div className="skeleton-card">
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
            )}
            {variant === "details" && (
                <div className="skeleton-details">
                    <h1 className="skeleton-details__name"></h1>
                    <div className="skeleton-details__image"></div>
                    <div className="skeleton-details__info">
                        <div className="skeleton-details__abilities"></div>
                        <div className="skeleton-details__stats"></div>
                        <div className="skeleton-details__abilities"></div>
                    </div>
                </div>
            )}
        </div>
    );
};
