import { useEffect, useState, useRef } from 'react';
import video from '../assets/prewed-echidna360p.mp4';
import echidnaHeader from '../assets/echidna-header.webp';
import ReactPlayer from 'react-player/lazy';
import netflixLogo from '../assets/netflix.png';
import logo4k from '../assets/4k.webp';
import lovely from '../assets/lovely.jpg';
import echidnaImage from '../assets/echidna.jpg';
import pantai1 from '../assets/1.jpg';
import pantai2 from '../assets/2.jpg';
import pantai3 from '../assets/3.jpg';
import pantai4 from '../assets/4.jpg';
import pantai5 from '../assets/5.jpg';
import pantai6 from '../assets/6.jpg';
import pantai7 from '../assets/7.jpg';
import pantai8 from '../assets/8.jpg';
import pantai9 from '../assets/9.jpg';
import titik from '../assets/titik.png';
import hihi from '../assets/ujung.png';
import foto from '../assets/foto.png';
import pulang from '../assets/pulang.png';
import resepsi from '../assets/resepsi.png';
import GuestIcon from '../assets/Guest.webp';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  const handleNameChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    } else {
      window.alert('oops unsupported character found');
    }
  };
  // const fetchComment = async () => {
  //   try {
  //     setLoading(true);
  //     const getComment = await axios.get(`${VITE_API_URL}/wish`);
  //     setComments(getComment?.data?.data);
  //   } catch (error) {
  //     alert('error when fetch comment');
  //     setComments([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setIsSubmitting(true);
  //     const insert = await axios.post(`${VITE_API_URL}/wish`, {
  //       name,
  //       message,
  //     });
  //     if (insert.data) {
  //       alert(insert.data.message);
  //     }
  //     fetchComment();
  //   } catch (error) {
  //     alert(error.response.data.message || 'error when input');
  //   } finally {
  //     setName('');
  //     setMessage('');
  //     setIsSubmitting(false);
  //   }
  // };
  // const scrollCommentRef = useRef(null);

  // useEffect(() => {
  //   fetchComment();
  // }, []);
  // useEffect(() => {
  //   if (scrollCommentRef.current) {
  //     scrollCommentRef.current.scrollTop =
  //       scrollCommentRef.current.scrollHeight;
  //   }
  // }, [comments]);

  return !loading ? (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed'>
      <div className='w-full max-w-md mx-auto flex flex-col relative flex-grow'>
        <div className='top-0 left-0 right-0'>
          <ReactPlayer
            url={video}
            loop={true}
            playing={true}
            width='100%'
            height='auto'
            style={{ aspectRatio: '16 / 9' }}
          />
        </div>
        <div className='mt-4 px-4'>
          <div className='flex flex-wrap font-sans'>
            <img src={netflixLogo} alt='NikahFix Logo' className='w-4 h-auto' />
            <span className='font-sans pl-1 text-gray-500 text-xs font-medium uppercase'>
              Documenter
            </span>
          </div>
          <div className='flex flex-col mt-2'>
            <div className='text-white text-xl font-sans font-bold'>
              LIBURAN KE PANTAI UJUNG GENTENG
            </div>
            <div className='flex items-center'>
              <span className='text-green-500'>100% match</span>
              <span className='bg-slate-500 text-xs ml-2 px-1 py-0 rounded-sm'>
                SU
              </span>
              <span className='ml-2'>2026 1h 26m</span>
              <img src={logo4k} alt='logo4k' className='ml-2' />
              <img src={logo4k} alt='logo4k' className='ml-2' />
            </div>
            <div className='flex flex-col mt-2'>
              <span className='bg-[#E50913] px-2 py-0 max-w-fit flex items-center justify-center rounded-sm'>
                Coming soon on Saturday, 30 Mei 2026
              </span>
              <div className='text-white mt-2'>
                Daripada kita penat sendiri-sendiri, seharian cuma mantengin HP mulu, mending kita langsung gas jalan-jalan bareng aja lah
              </div>
              <div className='mt-2 text-xs text-gray-500'>
                Kali ini gak ada alasan ya, pokoknya kalau diajak tuh harus ikut!
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Destinasi</header>
              <img
                src={hihi}
                alt=''
                srcSet=''
                style={{ aspectRatio: '16 / 9' }}
                className='mt-2 rounded-md'
              />
              <div className='text-sm italic pt-2 text-gray-500'>
                {/*<p className='mt-2'>
                  Halo! Karena kalian adalah orang penting yang mengisi
                  hari-hari kami, kami ingin informasikan bahwa kami akan segera
                  menikah!
                </p>
                <p className='mt-4'>
                  Tapi sebelumnya, kami mohon maaf kepada teman dan kerabat
                  semua karena tidak bisa mengundang kalian hadir di hari
                  bahagia kami, dikarenakan pernikahan kami bersifat intimate
                  wedding yang dilaksanakan di Bekasi dan hanya dihadiri oleh
                  keluarga dan orang terdekat.
                </p>
                <p className='mt-4'>
                  Walaupun begitu, kami harapkan sebaik-baiknya doa untuk
                  kelancaran pernikahan dan hari-hari bahagia setelahnya.
                </p>
                <p className='mt-4'>
                  Dengan penuh cinta,
                  <br />
                  The bride and groom
                </p>*/}
              </div>
            </div>
            {/*<div className='mt-6'>
              <header className='text-lg font-bold'>Bride and Groom</header>
              <div className='grid grid-cols-2 w-full gap-4'>
                <div className='flex flex-col'>
                  <img
                    src={lovely}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Echidna</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Witch of Greed
                    </span>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <img
                    src={lovely}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Echidna</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Witch of Greed
                    </span>
                  </div>
                </div>
              </div>
            </div>*/}
            <div className='mt-6'>
              <header className='text-lg font-bold'>Perjalanan Kita</header>
              <div className='grid grid-cols-1 gap-4'>
                {/* Episode1 */}
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={titik}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 1: Titik Kumpul
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Kita akan berkumpul sekitar pukul 16.00 Wib di Pangles
                </div>
                {/* <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={resepsi}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 2: Resepsi atau Makan-makan
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1]  text-sm'>
                  Setibanya disana, kita akan melakukan resepsi atau makan makan di kediaman di Cibuaya
                </div> */}
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={foto}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 2: Foto-foto dan membuat kenangan
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Seperti biasanya kalau sedang liburan, kita pasti akan melakukan foto foto untuk dijadikan kenang-kenangan
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={pulang}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        [Coming Soon] Final Episode: Akhir dari liburan
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1]  text-sm'>
                  Dan... liburan pun selesai, saatnya kembali mencari rupiah kembali
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Pantai Ujung Genteng</header>
              <div className='grid grid-cols-3 gap-3'>
                <img
                  src={pantai1}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai2}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai3}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai4}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai5}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai6}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai7}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai8}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={pantai9}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
              </div>
            </div>
            {/* --- POTONG DARI SINI --- */}
<div className='mt-6 bg-zinc-900 p-5 rounded-lg text-white shadow-lg border border-zinc-800'>
  <header className='text-lg font-bold text-center mb-5 tracking-wide text-gray-100'>
    Konfirmasi Kehadiran
  </header>

  <form 
    onSubmit={async (e) => {
      e.preventDefault();
      
      // Mengambil data inputan
      const dataNama = e.target.fullName.value;
      const dataBersama = e.target.withWho.value;
      const submitBtn = e.target.querySelector('button[type="submit"]');
      
      if (!dataNama || !dataBersama) return alert('Mohon isi semua kolom terlebih dahulu');

      try {
        // Mengunci tombol agar tidak diklik dua kali
        submitBtn.disabled = true;
        submitBtn.innerText = 'Mengirim...';

        // Konfigurasi Google Form milik Anda
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMlC46WXYxrwZqI3M9bo-NsLvaPLxBHz1SR0iw9B6881j58A/formResponse';
        const ENTRY_ID_NAMA = 'entry.1751284153'; 
        const ENTRY_ID_BERSAMA = 'entry.672361831';

        const formData = new FormData();
        formData.append(ENTRY_ID_NAMA, dataNama);
        formData.append(ENTRY_ID_BERSAMA, dataBersama);

        // Kirim data ke Google Form
        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });

        alert('Konfirmasi kehadiran berhasil dikirim!');
        e.target.reset(); // Mengosongkan form setelah sukses kirim
      } catch (error) {
        console.error(error);
        alert('Gagal mengirim konfirmasi, silakan coba lagi.');
      } finally {
        // Mengembalikan tombol ke keadaan semula
        submitBtn.disabled = false;
        submitBtn.innerText = 'Konfirmasi Kehadiran';
      }
    }} 
    className='space-y-4'
  >
    {/* Kolom Nama Lengkap */}
    <div>
      <label htmlFor='fullName' className='block mb-2 font-sans text-sm font-medium text-gray-300'>
        Nama Lengkap
      </label>
      <input
        id='fullName'
        name='fullName'
        type='text'
        required
        className='w-full p-2.5 text-black font-sans rounded focus:outline-none focus:ring-2 focus:ring-zinc-500'
        placeholder='Masukkan nama lengkap Anda'
      />
    </div>

    {/* Kolom Bersama Siapa */}
    <div>
      <label htmlFor='withWho' className='block mb-2 font-sans text-sm font-medium text-gray-300'>
        Datang Bersama Siapa?
      </label>
      <input
        id='withWho'
        name='withWho'
        type='text'
        required
        className='w-full p-2.5 text-black font-sans rounded focus:outline-none focus:ring-2 focus:ring-zinc-500'
        placeholder='Contoh: Sendiri / Pasangan / 2 Orang Teman'
      />
    </div>

    {/* Tombol Konfirmasi */}
    <button
      type='submit'
      className='w-full bg-amber-600 hover:bg-amber-700 active:bg-amber-800 py-3 mt-4 font-bold text-white tracking-wider rounded transition-colors disabled:bg-gray-600 duration-200'
    >
      Konfirmasi Kehadiran
    </button>
  </form>
</div>
{/* --- SAMPAI SINI --- */}
            <div className='mt-6 text-center text-sm'>
              <span className=''>
                Thank you for checking up all the things up there!
              </span>
              <br />
              <span>Can’t wait to see u again!</span>
            </div>
            <div className='mt-12 text-xs text-center text-[#A3A1A1]'>
              {/*Cloning with ❤️ by janexmgd & supported by Echidna*/}
            </div>
            <div className='mt-5 text-xs cursor-pointer text-center mb-5'>
              <a
                href='https://www.nikahfix.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/*thx nikahfix.com*/}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed h-svh text-4xl text-center justify-center items-center'>
      Loading
    </div>
  );
};

export default DetailPage;
