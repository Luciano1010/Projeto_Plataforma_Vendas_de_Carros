import { Contaneir } from "../../components/contaneir";

export function Home() {
    return (
      <Contaneir>
        <section className="bg-white w-full p-4 rounded-lg max-w-3xl mx-auto flex justify-center items-center gap-2">
            <input
            className="w-full border-2 rounded-lg h-9 px-3 outline-none"
            placeholder="Digite o nome do carro..."
            />
            <button
            className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
            >
                Buscar
            </button>    
        </section>  

        <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros novos e usados em todo Brasil</h1>
        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <section className="w-full bg-white rounded-lg">
                <img
                className="w-full rounded-lg mb-2 max-h-62 hover:scale-105 transition-all"
                src="https://image1.mobiauto.com.br/images/api/images/v1.0/320679711/transform/fl_progressive,f_webp,q_70,w_800"
                alt="Imagem do carro"
                />
                <p className="font-bold mt-1 mb-2 px-2">Ferrari</p>
                <div className="flex flex-col px-2">
                    <span className="text-zinc-700 mb-6">Ano 2021 | 20.00km</span>
                    <strong className="text-black font-medium text-xl">Preço: 2.000.00R$</strong>
                </div>
                <div className="w-full h-px bg-slate-200 my-2">

                </div>
                <div className="px-2 pb-2">
                    <span className="text-zinc-700">São Paulo - SP</span>
                </div>
            </section>
            
        </main>
      </Contaneir>
      )
  }
  
  
  