import './Write.css'

const Write = () => {
    return (
        <div className="write">
            <img src="https://cdn.pixabay.com/photo/2018/03/01/14/48/woman-3190829_960_720.jpg" className="writeImg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Рublish</button>
            </form>
        </div>
    )
}

export default Write;
