import React from "react"
import BootstrapTable from "react-bootstrap-table-next"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

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
      sizePerPage: 5
    }
    const { SearchBar } = Search

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
                marginTop: "0%",
                backgroundColor: "white",
                borderRadius: "1em",
                boxShadow: "0 20px 75px rgb(110, 110, 110,0.2)",
                padding: "4% 3%",
                width: "100%"
              }}
            >
              <h1
                style={{
                  marginBottom: "2vh",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "rgb(100,100,100)"
                }}
              >
                {this.props.name}
              </h1>
              <SearchBar
                srText=""
                style={{ width: "450%", marginBottom: "5%" }}
                placeholder="Search.."
                {...toolkitprops.searchProps}
              />
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
    )

    return (
      <div
        style={{
          marginLeft: "15%",
          width: "85%"
        }}
      >
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    )
  }
}

export default Table
