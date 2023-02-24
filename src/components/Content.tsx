import { memo, useMemo } from 'react';
import { MovieCard } from './MovieCard';

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    Runtime: string;
  }[];
}

export function ContentComponent({ selectedGenre, movies }: ContentProps) {
  const moviesMemo = useMemo(() => {
    return movies.map((movie) => (
      <MovieCard
        key={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
        runtime={movie.Runtime}
        rating={movie.Ratings[0].Value}
      />
    ));
  }, [movies]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">{moviesMemo}</div>
      </main>
    </div>
  );
}

export const Content = memo(ContentComponent);
