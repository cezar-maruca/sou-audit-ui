import React from 'react';
import './style.scss';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import PersonalDate from '../../assets/imgs/editar.png';

const PersonalData = () => {
  return (
    <div>
		<div className="container-fluid">
			<hr />
			<h5 className="titulo-1">Dados Pessoais</h5>
			<div className="borda">
				<p className="fontTitulo">Nome</p>
				<span className="fontConteudo"><img src={PersonalDate}  alt="editar"/>Pedro Souza</span>
			</div>
			<div className="borda">
				<p className="fontTitulo">Nome Social</p>
				<span className="fontConteudo"><img src={PersonalDate}  alt="editar"/>Não Existe nome comercial</span>
			</div>
			<div className="row colunaDados">
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Documento de Indentidade</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>444.356.989-12</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Emissor/Estado</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>SSP</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Nacionalidade</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>Brasileiro</span>
				</div>
			</div>
			<div className="row">
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">CPF</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>132564789-88</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Título de Eleitos</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>45879564132879256328</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Certificado de Reservista</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>7489456132456789132</span>
				</div>
			</div>
			<div className="row">
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Cidade de Nascimento</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>132564789-88</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Naturalidade</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>Brasileira</span>
				</div>
				<div className="borderColunas col-md-4">
					<p className="fontTituloCont">Data de Nascimento</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>12/12/2002</span>
				</div>
			</div>
			<div className="borda">
			<p className="fontTitulo">Nome do Mãe</p>
				<span className="fontConteudo"><img src={PersonalDate}  alt="editar"/>Telma Souza</span>
			</div>
			<div className="borda">
			<p className="fontTitulo">Nome do Pai</p>
				<span className="fontConteudo"><img src={PersonalDate}  alt="editar"/>Pedro Souza</span>
			</div>
			<div className="borda">
			<p className="fontTitulo">Endereço Residencial (com complementos)</p>
				<span className="fontConteudo"><img src={PersonalDate}  alt="editar"/>Rua rua rua, 128 - Apto 26487 - Prédio 1</span>
			</div>
			<div className="row">
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">CEP</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>06598-888</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Bairro</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>São Miguel</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Cidade</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>São Paulo</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Estado</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>São Paulo</span>
				</div>
			</div>
			<div className="row colunaDados">
				<div className="borderColunas-2 col-md-6">
					<p className="fontTituloCont">E-mail Pessoal</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>nome.sobrenome@gmail.com</span>
				</div>
				
				<div className="borderColunas-2 col-md-6">
					<p className="fontTituloCont">Telefone</p>
					<span className="fontConteudoDados"><img src={PersonalDate}  alt="editar"/>12458792688</span>
				</div>
			</div>
			<h5 className="titulo-1">Dados de Ingresso</h5>
			<div className="row">
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Curso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Nível de Curso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Tipo de Curso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Polo</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
			</div>
			<div className="borda">
				<p className="fontTitulo">Endereço do Polo</p>
				<span className="fontConteudo">XXX</span>
			</div>
			<div className="row">
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Forma de Ingresso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Classificação no Processo Seletivo</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Data de Matrícula</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Semestre/Ano de Ingresso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
			</div>
			<div className="row">
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Mês/Ano de Ingresso</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Semestre/Ano de Conclusão</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Mês/Ano de Conclusão</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Regulação</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
			</div>
			<div className="borda">
				<p className="fontTitulo">E-mail Institucional</p>
				<span className="fontConteudo">XXX</span>
			</div>
			<h5 className="titulo-1">Dados do Ensino Médio</h5>
			<div className="row colunaDados">
				<div className="borderColunas-2 col-md-6">
					<p className="fontTituloCont">Data de Conclusão do Ensino Médio</p>
					<span className="fontConteudoDados">12/12/1212</span>
				</div>
				
				<div className="borderColunas-2 col-md-6">
					<p className="fontTituloCont">Nome da Escola de Conclusão do Ensino Médio</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
			</div>
			<div className="borda">
				<p className="fontTitulo">Endereço (com complementos)</p>
				<span className="fontConteudo">Rua rua rua, 198 - Apto 26487 - Prédio 1</span>
			</div>
			<div className="row">
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">CEP</p>
					<span className="fontConteudoDados">06598-888</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Bairro</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Cidade</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
				<div className="borderColunas-1 col-md-3">
					<p className="fontTituloCont">Estado</p>
					<span className="fontConteudoDados">XXX</span>
				</div>
			</div>
			<div className="row botoesForm">
				<button className="voltar">VOLTAR</button>
				<button className="finalizar">PRÓXIMA</button>	
			</div>
			<p></p>
		</div>  
    </div>
  );
  
};



export default PersonalData;