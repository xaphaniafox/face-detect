import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onClickSubmit }) => {
  return(
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your picture. Give it a try.'}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 w-40 center">
          <input 
            className="f4 pa2 w-70 center b--white" 
            type="text" 
            onChange={onInputChange} 
          />
          <button 
            className="f4 w-30 grow ph3 pv2 white bg-light-purple center justify-center b--white"
            onClick={onClickSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  )
}
export default ImageLinkForm;