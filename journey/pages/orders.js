import { server } from '../config'
import OrderList from '../components/OrderList'
import { authState } from "./_app";
import { useHookstate } from "@hookstate/core";

export default function Orders() {
  return (
    <div>
        <OrderList  />
    </div>
  )
}
