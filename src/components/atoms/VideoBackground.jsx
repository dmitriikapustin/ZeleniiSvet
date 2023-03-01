

export default function VideoBackground(){
    return(
        <div className="videoBack">
            <video playsInline autoPlay loop muted>
                <source src="./images/back.mp4" type="video/mp4" />
            </video>
        </div>
    )
}