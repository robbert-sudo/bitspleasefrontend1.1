import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Homepagina</h1>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum deleniti dicta dolorum explicabo hic ipsum laboriosam,
                    mollitia obcaecati perspiciatis sint sunt ut? Ab accusantium
                    at cumque, debitis dicta enim excepturi facilis fuga incidunt
                    maiores maxime minus nam natus nulla officia, perferendis
                    saepe sequi totam veniam vitae? Blanditiis harum quam tempora.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    commodi dolorum esse expedita fugit hic id ipsam iusto magnam,
                    modi officiis quaerat, quas quibusdam repellat temporibus ullam
                    vero, voluptates? Aliquam aperiam aut autem cupiditate, delectus
                    dolor dolores exercitationem illum laudantium magnam nemo neque
                    quam sapiente totam velit? Ab animi eaque in maiores, minus neque
                    nostrum.
                </p>
            </section>
            <section>
                <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
                <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/singup">registreren</Link> als je nog geen account hebt.</p>
            </section>
        </>
    );
}

export default Home;