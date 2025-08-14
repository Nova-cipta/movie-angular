import { Movie } from "./movie.type";

export type MoviePaging = {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_result: number;
}