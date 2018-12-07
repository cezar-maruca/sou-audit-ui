import React from 'react';
import './style.scss';


const Audit = () => {
    return (
        <div>
            <div className="col-md-12">
                <div className="col-md-9 border center">
                    <div className="text-center">
                        <h5>Selecione o curso de GRADUAÇÃO que deseja acessar:</h5>
                    </div>
                    <div class="row">
                        <div className="col-md-5 center">
                            <div className="text-center">
                                <form action="fs" method="post">
                                    <div class="submit-line">
                                        <input type="text" />
                                        <button class="submit-lente" type="submit">
                                        <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <table className="table table-hover borda-tabela-titulos">
                        <thead>
                            <tr>
                                <th scope="col">Nome do Curso</th>
                                <th scope="col">Turma de Oferta</th>
                                <th scope="col">Matriz do Curso</th>
                                <th scope="col">Descrição do Curso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Engenharia de Produção</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                            </tr>
                            <tr>
                                <td>Engenharia de Produção</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                            </tr>
                            <tr>
                                <td>Engenharia de Produção</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                            </tr>
                            <tr>
                                <td>Engenharia de Produção</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                            </tr>
                            <tr>
                                <td>Engenharia de Produção</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Audit;