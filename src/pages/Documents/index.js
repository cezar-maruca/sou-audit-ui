import React from 'react';
import './style.scss';
import Button from '../../components/Button';

const Documents = () => {
  return (
    <div>
      <div className="container-fluid">
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
		
		<h5 className="titulo-2">Documentos</h5>
			<p className="titulo-3">Aluno transferiu de polo?</p>
			<div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="Yes">
					Sim	
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					Não
				</label>
			</div>
			<p className="titulo-3">Teve Bonificação no ingresso do curso:</p>
			<div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					Não
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="PPI">
					PPI
				</label>	
			</div>
			<div className="form-check checarForm-2">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="PPI">
					Estudo em escola pública
				</label>	
			</div>
			<p className="titulo-3">Onde está localizado o prontuário do aluno:</p>
			<div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					No polo
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="PPI">
					Na sede
				</label>	
			</div>
			<div className="form-check checarForm-2">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="PPI">
					Outro
				</label>	
			</div>
			 <p>
				<hr />
				<p className="linhasConteudo"></p>
				<hr />
			 </p>
			 <p className="titulo-3">RG</p>
			 <div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="Yes">
					Sim	
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					Não
				</label>
			</div>
			<p className="titulo-3">Histórico de Ensino Médio</p>
			 <div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="Yes">
					Sim	
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					Não
				</label>
			</div>
			<p className="titulo-3">Certificado ce Conclusão do Ensino Médio</p>
			 <div className="form-check checarForm">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="Yes">
					Sim	
				</label>	
			</div>
			<div className="form-check checarForm-1">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
				<label className="form-check-label" forHTML="No">
					Não
				</label>
			</div>
			<p className="linhasConteudo"></p>
			<div className="row">
				<div className="boxConteudo col-md-4 boxLinhas">
					RG
				</div>
				<div className="boxConteudo col-md-4">
					RG
				</div>
				<div className="boxConteudo col-md-4">
					RG
				</div>
			</div>
			<div className="row botoesForm">
				<button className="voltar">VOLTAR</button>
				<button className="finalizar">PRÓXIMA</button>	
			</div>	
		</div>
    </div>
  );
  
};

function itemSelect(elem) {
	/*var si = $(elem).val();/*
	var isCheck = $(elem).is(':checked');

		if(isCheck) {'
			fadeIn($(elem).siblings());
		} else {
			fadeOut($(elem).siblings());
		}
	}
	
	function fadeIn(itemClass, itemId) {
		$(itemClass).fadeIn();
		$(itemId).addClass('borda');
	}

	function fadeOut(itemClass, itemId) {
		$(itemClass).fadeOut();
		$(itemId).removeClass('borda');*/
	}


export default Documents;