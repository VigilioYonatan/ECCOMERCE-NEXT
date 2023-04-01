import StarRatings from "react-star-ratings";

function StartsExtra() {
    return (
        <StarRatings
            rating={2}
            starRatedColor="#F03637"
            // changeRating={this.changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="2px"
        />
    );
}

export default StartsExtra;
