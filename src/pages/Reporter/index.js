import React from 'react';
import './style.scss';

const Report = () => {
  return (
    <div>
      <div className="container">
        <hr />
        <h5 className="titulo-1">Dados Pessoais</h5>

		<div className="col-md-6 formColunas">
			<p className="fontTitulo">Nome Civil <span className="fontConteudo">Pedro Souza</span></p>
			<p className="fontTitulo">Nome Social <span className="fontConteudo">Não existe nome social</span></p>
			<p className="fontTitulo">Nome do Curso <span className="fontConteudo"> 444.356.989-12</span></p>
			<p className="fontTitulo">Nível <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">RA <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Polo <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Ano do Ingresso.Semestre <span className="fontConteudo">XXX</span></p>
		</div>
		<div className="box col-md-1"></div>
		<div className="box linhaVertical col-md-1"></div>
		<div className="col-md-5 formColunas">
			<p className="fontTitulo">Ano de Ingresso.Mês <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Ano de Conclusão.Semestre <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Ano de Conclusão.Mês <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Documento de Identidade <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Nacionalidade <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Naturalidade <span className="fontConteudo">XXX</span></p>
			<p className="fontTitulo">Status <span className="fontConteudo">XXX</span></p>
		</div>
		<h5 className="titulo-2">Relatório</h5>
			<p className="fontConteudo">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere metus lectus, ut scelerisque velit interdum eget. Phasellus ornare mauris elit, sit amet eleifend lorem pellentesque eget. Phasellus tincidunt elit orci. Vestibulum id dolor id odio iaculis accumsan. Phasellus vel risus enim. Vivamus lobortis, est ac commodo tristique, justo odio sagittis magna, ut venenatis elit ante sit amet ipsum. Vivamus lobortis ex id nibh gravida, a vehicula leo porta. Cras malesuada, turpis nec sodales aliquam, neque justo eleifend nulla, blandit tempor lorem ipsum sit amet est. Sed dignissim eu libero ac laoreet. Proin volutpat faucibus sapien, pellentesque tempor quam sollicitudin id. Sed consectetur lorem vitae dolor finibus, eget pharetra nulla cursus. Quisque et leo in nisl accumsan maximus. In quis ullamcorper tortor. Mauris at eros aliquet, porttitor mauris non, suscipit lacus. Vestibulum pellentesque, lectus non suscipit finibus, urna metus suscipit tellus, a tristique est sapien ac nibh. 
			</p>
		<div className="formConteudo fontConteudo"></div>
			Relatório: nome, ra, polo, pendências encontradas na auditoria emails e telefones para contato com o aluno
		<div className="formConteudo fontConteudo"></div>
			Resultado: RETIDO
		<div className="formConteudo"></div>
		<a className="btn btn-danger botoes links">VOLTAR</a>
		<a  className="btn btn-danger links">FINALIZAR</a>
		<div className="formConteudo"></div>
      </div>
    </div>
  );
};

export default Report;
