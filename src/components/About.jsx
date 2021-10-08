const About = () => {
    function showDate() {
        var date = Date();
        document.getElementById('demo').innerHTML = date;
    }

    function clear() {
        const style = {
            display: "none"
        };

        document.getElementById("demo").innerHTML = style;
    }
    return (
        <div className="about">
            <h2>This is the About page</h2>

            <div className="time">
                <p id="demo">show date</p>
                <button className="btn1" onClick={showDate}>Show Time</button>
                <button className="btn2" onClick={clear}>Clear Time</button>
            </div>
        </div>
    );
}
 
export default About;