import { transparentize } from "polished";
import styled, { css } from "styled-components";

interface TableContainerProps {
  customMinHeight: string;
  maxHeight?: string;
}

export const TableContainer = styled.div<TableContainerProps>`
  position: relative;
  overflow-x: scroll;
  min-height: ${({ customMinHeight }) => customMinHeight};
  max-height: ${({ maxHeight }) => maxHeight || "auto"};

  @media (min-width: 768px) {
    max-width: 100%;
    overflow-x: ${({ maxHeight }) => (maxHeight ? "auto" : "unset")};
  }
`;

interface DataTableProps {
  customWidth: string;
}

export const DataTable = styled.table<DataTableProps>`
  background: "#fff";
  width: 100%;
  overflow-x: auto;
  max-width: 100%;
  border-collapse: collapse;
  border-spacing: 1px 0;

  .align-center {
    text-align: center;
  }

  .align-end {
    text-align: end;
  }

  .border-right {
    border-right: 1px solid gray;
  }

  .name-width {
    min-width: 265px;
  }

  .radio {
    display: unset;
    text-transform: initial;
  }

  td.tags {
    padding-top: 1rem;
    max-width: 600px;
    padding-bottom: 0.5rem;
  }

  .checkboxes {
    width: 5%;
    text-align: center;

    div {
      display: block;
    }
  }

  @media (min-width: 640px) {
    width: ${({ customWidth }) => customWidth};
  }
`;

interface TableHeadProps {
  tHeadProps?: {
    background?: string;
    boxShadow?: boolean;
    padding?: string;
  };
}

export const TableHead = styled.thead<TableHeadProps>`
  width: 100%;
  font-size: 0.875rem; /* 14px */
  color: #999;
  height: 36px;

  tr td {
    font-weight: bold;
  }
`;

interface TableHeaderCellProps {
  customWidth?: string | number | undefined;
  customPadding?: string;
}

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
  padding: ${({ customPadding }) => customPadding};
  font-weight: bold;
  text-align: left;
  max-width: ${({ customWidth }) => customWidth || "auto"};
  width: ${({ customWidth }) => customWidth || "auto"};

  div.overrideMe {
    font-weight: normal;
    text-transform: none;
  }

  &.checkFilter div {
    display: flex;
  }
`;

interface TableRowProps {
  isRowDisabled?: boolean;
  selectedRow?: boolean;
}

export const TableRow = styled.tr<TableRowProps>`
  min-height: 36px;
`;

interface TableCellProps {
  customPadding: string;
  customVerticalAlign: string;
}

export const TableCell = styled.td<TableCellProps>`
  padding: ${({ customPadding }) => customPadding};
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  position: relative;
  vertical-align: ${({ customVerticalAlign }) => customVerticalAlign};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Prev = styled.button`
  width: 2.1875rem;
  height: 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-right: 0.625rem;
`;

export const Next = styled.button`
  width: 2.1875rem;
  height: 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 0.625rem;
`;

interface PagesProps {
  active?: boolean;
}

export const Pages = styled.button<PagesProps>`
  min-width: 2.1875rem;
  height: 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding-left: 0.625rem;
  padding-right: 0.625rem;

  & + button {
    margin-left: 0.5rem;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.7;
  background: white;
  top: 0;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  min-height: ${({ isLoading }) => (isLoading ? "165px" : "auto")};
`;
