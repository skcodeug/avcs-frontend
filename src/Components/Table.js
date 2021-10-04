import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

class Table extends React.Component {
  render() {
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      totalSize: this.props.products.length,
      sizePerPage: 5,
    };
    const { SearchBar } = Search;

    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="id"
          columns={this.props.columns}
          data={this.props.products}
          search
        >
          {(toolkitprops) => (
            <div
              style={{
                marginTop: "10%",
                backgroundColor: "white",
                borderRadius: "0.3em",
                // boxShadow: "0 10px 30px rgb(110, 110, 110,0.2)",
                padding: "4% 3%",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  left: "64%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <SearchBar
                    srText=""
                    style={{
                      width: "300px",
                      marginRight: "5%",
                    }}
                    placeholder="Search.."
                    {...toolkitprops.searchProps}
                  />
                  <span style={{ marginLeft: "2%" }}>{this.props.btn}</span>
                </div>
              </div>
              <h1
                style={{
                  marginTop: "-3%",
                  marginBottom: "5vh",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "rgba(0,0,0, 0.75)",
                }}
              >
                {this.props.name}
              </h1>

              <BootstrapTable
                hover
                {...toolkitprops.baseProps}
                {...paginationTableProps}
              />
            </div>
          )}
        </ToolkitProvider>
        <PaginationListStandalone {...paginationProps} />
      </div>
    );

    return (
      <div
        style={{
          marginLeft: "15%",
          width: "85%",
        }}
      >
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    );
  }
}

export default Table;
