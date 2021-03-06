import React, { useState, useEffect } from 'react';

const DataTable = (props) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const funcRetrunCols = (val) => {
    console.log('entered');
    console.log(val);
    let kys = Object.keys(val);
    let z = kys.map((v, i) => {
      // console.log(val[v]);
      return <td key={i}>{val[v]}</td>;
    });

    return z;
  };
  useEffect(() => {
    console.log(props.searchItem);
    let keys = Object.keys(props.primData[0]);
    let colms = keys.map((val, i) => {
      return <td key={i}>{val}</td>;
    });
    setColumns(colms);

    // console.log(obj);
    // setData(obj);
    if (props.searchItem) {
      let fil = props.primData.filter((val) => {
        if (
          val.ftname.search(props.searchItem) >= 0 ||
          val.ltname.search(props.searchItem) >= 0
        ) {
          return true;
        } else {
          return false;
        }
      });
      let obj = fil.map((val, i) => {
        return <tr key={val.id}>{funcRetrunCols(val)}</tr>;
      });
      setData(obj);
    } else {
      let obj = props.primData.map((val, i) => {
        return <tr key={val.id}>{funcRetrunCols(val)}</tr>;
      });
      setData(obj);
    }
  }, [props.searchItem]);

  return (
    <table>
      {/* <tr><td>id</td> <td>id</td></tr> */}
      <tr key={'col'}>{columns}</tr>
      {data}
    </table>
  );
};

export default DataTable;

// const item = 'st';
