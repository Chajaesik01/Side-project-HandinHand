import * as S from './HomeNoAuth.styles'
import { useNavigate } from 'react-router-dom'

import { PopularMediaSlider } from '../popular-media-slider/PopularMediaSlider'
import { Button, DeferredLoader } from '@/components'
import { Suspense } from 'react'
import { supabase } from '../../../../supabaseConfig'

export const HomeNoAuth = () => {
  const navigate = useNavigate()

  async function getComments() {
    const { data: comments, error } = await supabase
      .from('comments')
      .select('*')

    if (error) {
      console.error(error)
      throw error
      return
    }

    console.log(comments)
  }

  return (
    <S.Container>
      <S.Title>영차에 오신 것을 환영합니다 </S.Title>
      <S.SubTitle>로그인 후 영화, 시리즈를 평가하고 공유해보세요</S.SubTitle>
      <Button
        type="button"
        color="pink"
        size="large"
        onClick={() => navigate('/signin')}>
        로그인하기
      </Button>
      <button onClick={getComments}>댓글 가져오기</button>

      <S.PopularMediaSliderWrapper>
        <Suspense fallback={<DeferredLoader />}>
          <PopularMediaSlider />
        </Suspense>
      </S.PopularMediaSliderWrapper>
    </S.Container>
  )
}
