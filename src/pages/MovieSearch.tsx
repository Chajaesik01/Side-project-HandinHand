import * as S from '@/components/movie-search/MovieSearch.styled'

export const MovieSearch = () => {
  return (
    <S.Container>
      <S.MainContent>
        <S.SectionTitle>영화</S.SectionTitle>
      </S.MainContent>
      <S.ResultBox>
        <S.MoviePoster
          src="https://via.placeholder.com/300x450"
          alt="Movie Poster"
        />
        <S.MovieDetailBox>
          <S.MovieTitle>라라랜드</S.MovieTitle>
          <S.MovieDate>2025</S.MovieDate>
          <S.MovieInfo>미국</S.MovieInfo>
        </S.MovieDetailBox>
      </S.ResultBox>

      <S.MainContent>
        <S.SectionTitle>시리즈</S.SectionTitle>
      </S.MainContent>
    </S.Container>
  )
}
