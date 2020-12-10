import spinner from './spinner.gif';

const Loader=()=>{
	return(
		<div className='loader'>
			<img src={spinner} alt="loader" />
			<h1>Fetching Data</h1>
		</div>
	)
}

export default Loader;