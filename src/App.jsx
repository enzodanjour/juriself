
import Chat from './components/Chat.jsx'
import Card from './components/Card.jsx'
import './App.css'



function App() {

  return (
    <>
    <section className='p-5 header mb-8'>
      <div className='w-8/12 m-auto my-20'>
      <h1 className='text-5xl  p-2 mb-3'>JuriSelf: Simplificando o universo jurídico</h1>
      <h3 className='text-lg text-justify p-2 '>A JuriSelf é uma Lawtech que conecta cidadãos ao universo jurídico de forma fácil e acessível. Empoderamos indivíduos e tornamos a justiça compreensível para todos. Experimente nosso assistente virtual e saiba mais sobre seus direitos.</h3>

      </div>
    </section>

    <section className='bg-zinc-50 p-5 text-slate-800 w-8/12  rounded m-auto'>
      <div className='my-10 leading-8'>
        <h1 className='text-4xl p-3'>Sobre a JuriSelf </h1>
        <div className='flex p-3 gap-5'>
          <Card title = 'Missão'
          content= 'Nossa missão é tornar a justiça acessível e compreensível para todos.'/>
          <Card title = 'Visão'
          content = 'Nossa visão é criar um universo jurídico inclusivo onde os cidadãos têm fácil acesso aos seus direitos.'/>
          <Card title = 'Valores'
          content = 'Nossos valores refletem nosso compromisso com a inovação, transparência e qualidade de serviço.'/>

        </div>
      </div>
    </section>

    <section className='p-5 bg-zinc-50 text-slate-800 mt-8 rounded'>
      <div className=' my-10 w-8/12 m-auto'>
      <h1 className='text-4xl mb-5'>Nosso guia de petições</h1>
      <h3 className='text-lg mb-8'>Nosso guia de petições simplifica o processo legal, oferecendo soluções ao alcance do seu dedo para fabricação de petições.</h3>
      <a className='p-3 pill rounded-full border border-emerald-400
      hover:bg-emerald-400 hover:text-slate-100 ease-out duration-300' href="">Acesse nosso guia!</a>
      </div>
    </section>
    </>
  )
}

export default App
