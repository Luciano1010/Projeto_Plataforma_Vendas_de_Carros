import { useState, useEffect, } from "react"
import { Contaneir } from "../../components/contaneir"
import { FaWhatsapp } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebaseconnection"

import { Swiper, SwiperSlide} from "swiper/react"





interface CarsProps {
  id: string;
  name: string;
  model: string;
  city: string;
  year: string;
  km: string;
  description: string;
  created: string;
  price: string | number;
  owner: string;
  uid: string;
  whatsapp: string;
  images: carImagesProps[];
}

interface carImagesProps {
  name: string;
  uid: string;
  url: string;
}

export function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState<CarsProps>()
  const [sliderPerview, setsliderPerview] = useState<number>(2)
  const navigate = useNavigate();

 


  useEffect(() => {
    async function loadCar() {
      if (!id) { return }

      const docRef = doc(db, "cars", id)
      getDoc(docRef)
        .then((snapshot) => {

          if((!snapshot.data())){
            navigate("/")
          }

          setCar({
            id: snapshot.id,
            name: snapshot.data()?.name,
            year: snapshot.data()?.year,
            city: snapshot.data()?.city,
            model: snapshot.data()?.model,
            uid: snapshot.data()?.uid,
            description: snapshot.data()?.description,
            created: snapshot.data()?.created,
            whatsapp: snapshot.data()?.whatsapp,
            owner: snapshot.data()?.owner,
            km: snapshot.data()?.km,
            price: snapshot.data()?.price,
            images: snapshot.data()?.images

          })
        })
    }

    loadCar();
  }, [id])


  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 720){
      setsliderPerview(1);
    }
    else{
      setsliderPerview(2);
    }
  }
    handleResize();

    window.addEventListener("resize", handleResize)

    return() => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])


  return (
    <Contaneir>
     {car && (

          <Swiper 
          slidesPerView={sliderPerview}
          pagination={{clickable: true}}
          navigation>
              {car?.images.map( image =>(
                <SwiperSlide key={image.name}>
                  <img
                  className="w-full h-96 object-cover"
                  src={image.url}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
     )}

      {car && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col  sm:flex-row mb-4 items-center justify-between">
            <h1 className="font-bold text-3xl text-black">{car?.name}</h1>
            <h1 className="font-bold text-3xl text-black">R$ {car?.price}</h1>
          </div>
          <p>{car?.model}</p>
          <div className="flex w-full gap-6 my-4">
            <div className="flex flex-col gap-4">
              <div>
                <p>Cidade</p>
                <strong>{car?.city}</strong>
              </div>
              <div>
                <p>Ano</p>
                <strong>{car?.year}</strong>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p>KM</p>
                <strong>{car?.km}</strong>
              </div>
              <div>
                <p>Modelo</p>
                <strong>{car?.model}</strong>
              </div>
            </div>
          </div>

          <strong>Descrição</strong>
          <p className="mb-4 ">{car?.description}</p>

          <strong>Telefone|Whatsapp</strong>
          <p>{car?.whatsapp}</p>


          
          <a 
          href={`https://api.whatsapp.com/send?phone=${car?.whatsapp}&text=Olá vi esse ${car?.name} na WebCarros e fiquei interessado.`}
          target="_blank"
          className="bg-green-500 w-full text-white flex items-center justify-center gap 2 my-6 h-11 text-xl rounded-lg font-medium cursor-pointer">
            Entre em contato com o Vendedor
            <FaWhatsapp size={25} color="#fff"/>
          </a>
          
          

        </main>
      )}
    </Contaneir>

  )
}


