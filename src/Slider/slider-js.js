import './slider-css.css';
function Slider() {
    return (
        <div className="carousel container" duration="7000">
            <ul>
                <li id="c1_slide1"><div>I AM SAIKAT<br /><a href="https://www.facebook.com/saikat.islam.7169709" target="_blank">Adopt me 😔</a></div></li>
                <li id="c1_slide2"><div>I AM SHISHIR<br /><a href="https://www.facebook.com/shariarshishir.shishir" target="_blank">Adopt me 😔</a></div></li>
                <li id="c1_slide3"><div>I AM SAKIB<br /><a href="https://www.facebook.com/bud.bud.1426" target="_blank">Adopt me 😔</a></div></li>
                <li id="c1_slide4"><div>I AM ABU HASAN<br /><a href="https://www.facebook.com/dev.abuhasan" target="_blank">Adopt me 😔</a></div></li>
            </ul>
            <ol>
                <li><a href="#c1_slide1"></a></li>
                <li><a href="#c1_slide2"></a></li>
                <li><a href="#c1_slide3"></a></li>
                <li><a href="#c1_slide4"></a></li>
            </ol>
        </div>
    );
}
export default Slider;
