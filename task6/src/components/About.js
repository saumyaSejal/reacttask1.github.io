import myImage from 'public/profilepic.jpg'

function About(){
    return(
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <img src={myImage} alt="saumya sejal">
                    </img>
                </div>

                <div className="col-6">
                    <h3 className="Display-3">About Me</h3>
                    <p>I am in my third year at VIT Vellore's computer science 
engineering degree. I'm passionate about front-end 
design, development, and user experience. Idealistically, 
I'd like to find a profession that allows me to express my 
creative potential. I've explored Graphic design and 
front-end UI design for a small business and am eager to 
learn more about the field</p>
                </div>
            </div>
        </div>
    );
};

export default About