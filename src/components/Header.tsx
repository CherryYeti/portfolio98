type HeaderType = {
    title: string;
  };

const Header = ({title}: HeaderType) =>{
  return(
    <h1 className='text-4xl font-bold'>{title}</h1>

  )
}
export default Header;