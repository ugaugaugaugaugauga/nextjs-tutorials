import { FooterNav } from '@/components/footer-nav'
import { Sidebar } from './_components/sidebar'
import { Title } from '@/components/title'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <section className='md:pl-[280px] pb-10'>
        <div className='md:p-8 p-4'>
          <Title />
          {children}
        </div>
        <FooterNav />
      </section>
    </>
  )
}

export default Layout
