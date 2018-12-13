import React from 'react';
import ReactDOM from 'react-dom';

const Documents = () => {
         return (
            <tr key={index}>
                <td>{Produto.id}</td>
                <td>{Produto.descricao}</td>

				<td>
				   <button type="button" className="btn btn-warning">onClick={this.deletar}</button>
				</td> 
			</tr>
        );
    };

export default Documents