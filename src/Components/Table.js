import React from "react"
import { Container } from "react-bootstrap"
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
                marginTop: "1%",
                backgroundColor: "white",
                borderRadius: "0.5%",
                boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)",
                padding: "2% 4%",
                width: "100%"
              }}
            >
              <SearchBar
                srText=""
                style={{ width: "500%", marginBottom: "6%" }}
                placeholder="Type here to search . . ."
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
        <Container
          style={{
            margin: "0 0 3% 0",
            fontSize: "2rem",
            fontWeight: "bolder",
            backgroundColor: "white",
            borderRadius: "0.5%",
            boxShadow: "0 1px 2px rgb(0 0 0 / 0.2)",
            padding: "1% 0% 1% 4%"
          }}
        >
          <h2
            style={{
              marginBottom: "0",
              fontSize: "2rem",
              fontWeight: "bolder"
            }}
          >
            {this.props.name}
          </h2>
        </Container>
        <PaginationProvider pagination={paginationFactory(options)}>
          {contentTable}
        </PaginationProvider>
      </div>
    )
  }
}

export default Table
