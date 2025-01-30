import "./home.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="home-container" data-bs-theme="dark">
			<img
				className="mb-5"
				src="https://files.toolboxtve.com/wp-content/uploads/2022/03/09085119/logo-stycky2022.png"
				alt="Logo de Toolbox"
				width="250px"
			/>
			<h1>Toolbox - file processing frontend</h1>

			<section>
				<h2>¡Hola! 👋</h2>
				<p>
					Esta aplicación está diseñada para ayudarte a explorar y
					visualizar datos de archivos CSV de manera sencilla y
					eficiente. A continuación, te explicamos cómo funciona:
				</p>
				<h5>¿Qué puedes hacer aquí?</h5>
				<ol>
					<li>
						<strong>Ver archivos disponibles</strong>
						<p>
							La aplicación se conecta a un API externo para
							obtener una lista de archivos CSV y muestra su
							contenido de forma ordenada.
						</p>
					</li>
					<li>
						<strong>Explorar datos</strong>
						<p>
							Cada archivo contiene líneas de datos con la
							siguiente información:
							<strong> texto</strong>,<strong> numero</strong>,
							<strong> hexadecimal</strong>
						</p>
					</li>
					<li>
						<strong>Filtrar por nombre de archivo</strong>{" "}
						<p>
							Si buscas un archivo en particular, puedes usar el
							filtro para encontrar rápidamente la información que
							necesitas
						</p>
					</li>
				</ol>
			</section>

			<section>
				<h5>Informacion adicional</h5>
				<ul>
					<li>
						<a
							href="https://cs1.ssltrust.me/s/YeaQjE8XFljaMxv"
							target="_blank"
							rel="noopener noreferrer"
						>
							PDF con instrucciones detalladas
						</a>
					</li>
					<li>
						<a
							href="https://cs1.ssltrust.me/s/6u9aC5hCTEhTpT1"
							target="_blank"
							rel="noopener noreferrer"
						>
							Diagrama de Secuencia
						</a>
					</li>
				</ul>
			</section>

			<Button as={Link} to="/files" variant="danger">
				explorar
			</Button>
		</div>
	);
}

export default HomePage;
