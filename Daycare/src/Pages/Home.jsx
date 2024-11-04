import backgroundImage from '../assets/images/background.jpg';

const Home = () => {
    return ( 
        <div className='bg-cover bg-center h-screen'
        style={{backgroundImage: `url(${backgroundImage})`}}
        >
            
        </div>
     );
}
 
export default Home;