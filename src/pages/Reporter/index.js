import React from 'react';
import './style.scss';

const Report = () => {
  return (
    <div>
      <div className="container">
        <hr />
        <h5>Dados Pessoais</h5>

		<div className="col-md-6 formColunas">
			Nome Civil Pedro Souza<br />
			Nome Social Não existe nome social<br />
			Nome do Curso 444.356.989-12<br />
			Nível XXX<br />
			RA XXX<br />
			Polo XXX<br />
			Ano do Ingresso.Semestre XXX
		</div>
		<div className="box col-md-1"></div>
		<div className="box linhaVertical col-md-1"></div>
		<div className="col-md-5 formColunas-1">
			Ano de Ingresso.Mês XXX<br />
			Ano de Conclusão.Semestre XXX<br />
			Ano de Conclusão.Mês XXX<br />
			Documento de Identidade XXX<br />
			Nacionalidade XXX<br />
			Naturalidade XXX<br />
			Status XXX
		</div>
		<h5>Relatório</h5>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere metus lectus, ut scelerisque velit interdum eget. Phasellus ornare mauris elit, sit amet eleifend lorem pellentesque eget. Phasellus tincidunt elit orci. Vestibulum id dolor id odio iaculis accumsan. Phasellus vel risus enim. Vivamus lobortis, est ac commodo tristique, justo odio sagittis magna, ut venenatis elit ante sit amet ipsum. Vivamus lobortis ex id nibh gravida, a vehicula leo porta. Cras malesuada, turpis nec sodales aliquam, neque justo eleifend nulla, blandit tempor lorem ipsum sit amet est. Sed dignissim eu libero ac laoreet. Proin volutpat faucibus sapien, pellentesque tempor quam sollicitudin id. Sed consectetur lorem vitae dolor finibus, eget pharetra nulla cursus. Quisque et leo in nisl accumsan maximus. In quis ullamcorper tortor. Mauris at eros aliquet, porttitor mauris non, suscipit lacus. Vestibulum pellentesque, lectus non suscipit finibus, urna metus suscipit tellus, a tristique est sapien ac nibh. 
		<div className="formConteudo"></div>
			Relatório: nome, ra, polo, pendências encontradas na auditoria emails e telefones para contato com o aluno
		<div className="formConteudo"></div>
			Resultado: RETIDO
		<div className="formConteudo"></div>
		<a><button type="button" className="btn btn-danger botoes">VOLTAR</button></a>
		<a><button type="button" className="btn btn-danger">FINALIZAR</button></a>
		<div className="formConteudo"></div>
      </div>
    </div>
  );
};

export default Report;
