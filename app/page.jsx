import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
<section className='w-full flex-center flex-col'>
<h1 className='head_text text-center'>
    Discover and Share
    <br className='max-mid:hidden'/>
    <span className='text-center orange_gradient'>AI powered prompts</span>
</h1>
<p className='desc text-center'>Promptlândia é uma ferramenta Open-Source para descobrir, criar e compartilhar prompts criativos para IAs.
</p>

<Feed/>
</section>
  )
}

export default Home