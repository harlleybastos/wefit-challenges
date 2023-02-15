import { useEffect, useCallback, useMemo, memo } from "react";
import {
  useTable,
  usePagination,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useRowState,
  Column,
  HeaderProps,
  Row,
} from "react-table";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Oval } from "react-loader-spinner";

import {
  TableContainer,
  DataTable,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableCell,
  PaginationContainer,
  Prev,
  Next,
  Pages,
  LoadingContainer,
  Container,
} from "./styles";

import { Open_Sans } from "@next/font/google";

export type Page = {
  CurrentPage: number;
  HasNext: boolean;
  HasPrevious: boolean;
  PageSize: number;
  TotalCount: number;
  TotalPages: number;
};

interface TableProps {
  data: object[];
  columns: Column[];
  maxPageSize?: number;
  canSelectRows?: boolean;
  isStaticPaginated?: boolean;
  loadData?: ({ nextPage }: { nextPage: Page }) => void;
  checkboxTipPlaceholder?: string;
  customWidth?: string;
  customMinHeight?: string;
  isLoading?: boolean;
  dynamicPaginationData?: Page;
  maxHeight?: string;
  customPadding?: string;
  tHeadProps?: {
    background?: string;
    boxShadow?: boolean;
    padding?: string;
  };
  selectedRowId?: number;
}

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const CustomTable = ({
  columns,
  data,
  maxHeight,
  maxPageSize = 20,
  canSelectRows = false,
  isStaticPaginated = false,
  customMinHeight = "auto",
  customPadding = "1rem",
  tHeadProps = {
    boxShadow: true,
    background: "#fff",
    padding: "1rem",
  },
  loadData = () => null,
  dynamicPaginationData = {
    TotalPages: 0,
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 20,
    TotalCount: 0,
  },
  checkboxTipPlaceholder = "",
  customWidth = "100%",
  isLoading = false,
  selectedRowId = -1,
}: TableProps) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: <div />,
    }),
    []
  );

  const toggleAllRows = useCallback(
    ({
      getToggleAllRowsSelectedProps,
    }: React.PropsWithChildren<HeaderProps<object>>) => {
      const { onChange, indeterminate, ...rest } =
        getToggleAllRowsSelectedProps();

      return (
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
            }}
            data-tip={checkboxTipPlaceholder}
            {...rest}
          />
        </div>
      );
    },
    [checkboxTipPlaceholder]
  );

  const toggleSingleRow = useCallback(
    (row: Row<object>) => (
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              row.toggleRowSelected(true);
            } else {
              row.toggleRowSelected(false);
            }
          }}
          checked={row.isSelected}
        />
      </div>
    ),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: false,
      initialState: { pageIndex: 0, pageSize: maxPageSize },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useRowState,
    (hooks) => {
      if (canSelectRows) {
        hooks.visibleColumns.push((column) => [
          {
            id: "selection",
            Header: (row) => toggleAllRows(row),
            Cell: ({ row }) => toggleSingleRow(row),
            width: 10,
          },
          ...column,
        ]);
      }
    }
  );

  const getVisiblePages = useCallback(
    (total: number, index: number) => {
      if (total === 1) {
        return [1];
      }

      if (index % 5 >= 0 && index > 4 && index + 2 < total) {
        return [1, index - 1, index, index + 1, total];
      }

      if (index % 5 >= 0 && index > 4 && index + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      }

      if (index <= 5 && total > 5) {
        return [1, 2, 3, 4, 5, total];
      }

      if (dynamicPaginationData && !isStaticPaginated) {
        return Array.from(
          { length: dynamicPaginationData?.TotalPages || 0 },
          (v, k) => k
        ).map((current) => current + 1);
      }

      return pageOptions.map((current) => current + 1);
    },
    [dynamicPaginationData, isStaticPaginated, pageOptions]
  );

  useEffect(() => {
    if (isStaticPaginated) setPageSize(maxPageSize);
  }, [maxPageSize, isStaticPaginated, setPageSize]);

  const goToPage = useCallback(
    (nextPageIndex: number) => {
      loadData({
        nextPage: {
          ...dynamicPaginationData,
          CurrentPage: nextPageIndex,
        },
      });
    },
    [loadData, dynamicPaginationData]
  );

  const rangePagination = useMemo(
    () =>
      getVisiblePages(
        dynamicPaginationData?.TotalPages,
        dynamicPaginationData?.CurrentPage
      ).map((item, index, array) => {
        return (
          <Pages
            key={item}
            type="button"
            active={dynamicPaginationData?.CurrentPage === item}
            disabled={dynamicPaginationData?.CurrentPage === item}
            onClick={() => goToPage(item)}
          >
            {array[index - 1] + 2 < item ? `... ${item}` : item}
          </Pages>
        );
      }),
    [getVisiblePages, goToPage, dynamicPaginationData]
  );

  useEffect(() => {
    if (canSelectRows) {
      selectedFlatRows.forEach((row) => {
        if (row.toggleRowSelected) {
          if (row.isSelected) {
            row.toggleRowSelected(true);
          } else {
            row.toggleRowSelected(false);
          }
        }
      });
    }
  }, [canSelectRows, selectedFlatRows]);

  return (
    <Container isLoading={isLoading}>
      <TableContainer maxHeight={maxHeight} customMinHeight={customMinHeight}>
        <DataTable customWidth={customWidth} {...getTableProps()}>
          <TableHead tHeadProps={tHeadProps} className={openSans.className}>
            {headerGroups.map((headerGroup, index) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <TableHeaderCell
                    customPadding={tHeadProps.padding}
                    customWidth={column.width}
                    {...column.getHeaderProps([
                      {
                        className: column.className,
                        style: column.style,
                      },
                    ])}
                    key={index}
                  >
                    <div>
                      {column.render("Header")}

                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <tbody {...getTableBodyProps()}>
            {isStaticPaginated &&
              page.map((row, index) => {
                prepareRow(row);

                const currentRow = row.original as {
                  id: number;
                  isRowDisabled: boolean;
                };

                return (
                  <TableRow
                    selectedRow={selectedRowId === currentRow.id}
                    id={`row_${currentRow.id}`}
                    isRowDisabled={currentRow.isRowDisabled}
                    {...row.getRowProps()}
                    key={index}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <TableCell
                          customPadding={customPadding}
                          customVerticalAlign={
                            cell.column?.customVerticalAlign ?? "top"
                          }
                          width={cell.column.width}
                          {...cell.getCellProps([
                            {
                              className: cell.column.className,
                              style: cell.column.style,
                            },
                          ])}
                          key={index}
                        >
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}

            {!isStaticPaginated &&
              rows.map((row, index) => {
                prepareRow(row);

                const currentRow = row.original as {
                  id: number;
                  isRowDisabled: boolean;
                };

                return (
                  <TableRow
                    selectedRow={selectedRowId === currentRow.id}
                    id={`row_${currentRow.id}`}
                    isRowDisabled={currentRow.isRowDisabled}
                    {...row.getRowProps()}
                    key={index}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <TableCell
                          customPadding={customPadding}
                          customVerticalAlign={
                            cell.column?.customVerticalAlign ?? "top"
                          }
                          width={cell.column.width}
                          {...cell.getCellProps([
                            {
                              className: cell.column.className,
                              style: cell.column.style,
                            },
                          ])}
                          key={index}
                        >
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </tbody>
        </DataTable>

        {isStaticPaginated && pageCount > 1 && (
          <PaginationContainer>
            <Prev
              type="button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdChevronLeft size={25} />
            </Prev>

            {getVisiblePages(pageCount, pageIndex).map((item, index, array) => {
              return (
                <Pages
                  key={item}
                  type="button"
                  active={pageIndex === item - 1}
                  onClick={() => gotoPage(item - 1)}
                >
                  {array[index - 1] + 2 < item ? `... ${item}` : item}
                </Pages>
              );
            })}

            <Next
              type="button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <MdChevronRight size={25} />
            </Next>
          </PaginationContainer>
        )}

        {dynamicPaginationData?.TotalPages > 1 && (
          <PaginationContainer>
            <Prev
              type="button"
              onClick={() => goToPage(dynamicPaginationData?.CurrentPage - 1)}
              disabled={!dynamicPaginationData?.HasPrevious}
            >
              <MdChevronLeft size={25} />
            </Prev>

            {rangePagination}

            <Next
              type="button"
              onClick={() => goToPage(dynamicPaginationData?.CurrentPage + 1)}
              disabled={!dynamicPaginationData?.HasNext}
            >
              <MdChevronRight size={25} />
            </Next>
          </PaginationContainer>
        )}
      </TableContainer>

      {isLoading && (
        <LoadingContainer>
          <Oval color="#000" height={50} width={50} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export const Table = memo(CustomTable);
