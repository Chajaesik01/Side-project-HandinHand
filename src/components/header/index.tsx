import { useSignOut } from '@/hooks/mutations/useSignOut'
import { useUserStore } from '@/stores/userStore'

export default function Header() {
  const { signOut, isPending } = useSignOut()
  const { user } = useUserStore()

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/series">Series</a>
        {!user && <a href="/signin">SignIn</a>}
        {!user && <a href="/signup">SignUp</a>}
        {user && (
          <button
            onClick={() => signOut()}
            disabled={isPending}>
            {isPending ? '로그아웃 중...' : '로그아웃'}
          </button>
        )}
      </nav>
    </header>
  )
}
