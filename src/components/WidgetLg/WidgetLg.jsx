import React from 'react'
import "./WidgetLg.css"






export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHsCb2hSbgidVyay8qqIz_D6FAwTa5vAFxQ&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Amaka Vivian</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">$922.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtIg6v3rYmfBpKllXlpnhzOb52FoTaKV9Fg&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chinaza Obi</span>
          </td>
          <td className="widgetLgDate"> 20 Mar  2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="data:image/jpeg;base64,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" 
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Katerin Carol</span>
          </td>
          <td className="widgetLgDate">13 Apr 2022</td>
          <td className="widgetLgAmount">$82.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Sept 2022</td>
          <td className="widgetLgAmount">$782.60</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}






