/**
 * Created by olewithmore on 6/6/2018.
 */
import React, {Component} from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_data';


class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    }

  }

  render() {

    console.log("this.props.ole", this.props.dataTable);

    let dataTable = this.props.dataTable.rows;
    let listHeders = this.props.headers.map((e, i) => {
        let isKey = (i === 0)? true : false;
        return (
          <TableHeaderColumn dataField={e} isKey={isKey} dataSort key={i}>{e}</TableHeaderColumn>
        );
    });

    console.log("dataTable :", dataTable);
    return (
      <React.Fragment>
          <BootstrapTable data={dataTable} version="4" printable striped hover pagination search options={this.options}>
            {listHeders}
          </BootstrapTable>
      </React.Fragment>
    );
  }
}

export default DataTable;
